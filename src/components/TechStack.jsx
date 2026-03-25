import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from "@react-three/rapier";


const textureLoader = new THREE.TextureLoader();

const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
];

const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(25)].map(() => ({
  scale: [0.4, 0.5, 0.6][Math.floor(Math.random() * 3)],
}));

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}) {
  const api = useRef();

  useFrame((_, delta) => {
    if (!isActive || !api.current) return;

    delta = Math.min(0.1, delta);

    const pos = api.current.translation();
    const impulse = vec
      .set(pos.x, pos.y, pos.z)
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current.applyImpulse(impulse, true);
    api.current.setAngvel({ x: 0.5, y: 0.3, z: 0.2 }, true);
  });

  return (
    <RigidBody
      ref={api}
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 20, r(20) - 10]}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />

      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3(), isActive }) {
  const ref = useRef();

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;

    const target = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );

    ref.current.setNextKinematicTranslation(target);
  });

  return (
    <RigidBody ref={ref} type="kinematicPosition" colliders={false}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");

      if (!workSection) {
        setIsActive(true);
        return;
      }

      const rect = workSection.getBoundingClientRect();
      setIsActive(rect.top < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.5,
          metalness: 1,
          roughness: 0.1,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
        })
    );
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-[radial-gradient(circle_at_center,#020617,#000000)]">

      {/* TITLE */}
      <h2 className="absolute top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          My Tech Stack
        </span>
      </h2>

      {/* CANVAS */}
      <Canvas
        shadows
        camera={{ position: [0, 0, 20], fov: 35 }}
        gl={{ alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />

        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />

        <directionalLight position={[-5, 5, -5]} intensity={1.5} />

        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={
                materials[Math.floor(Math.random() * materials.length)]
              }
              isActive={isActive}
            />
          ))}
        </Physics>

        <Environment
          files="/models/char_enviorment.hdr"
          background={false}
          blur={0.8}
        />

        <EffectComposer>
          <N8AO intensity={1.5} aoRadius={2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;