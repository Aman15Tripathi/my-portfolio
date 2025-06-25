// import React from "react";
// const About = () => {
//     return(
//         <div className="About">
//             <h1>About Me</h1>
//             <p>I am a MERN stack developer with a passion for building full-stack applications.</p>
//             <p>My journey in web development started with learning the basics of HTML, CSS, and JavaScript. Over time, I delved into the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js.</p>
//             <p>In my free time, I enjoy contributing to open-source projects and exploring new technologies. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, ipsam repellendus ullam ipsum ducimus quaerat, veniam similique aspernatur porro, hic dignissimos quia officia non excepturi? Adipisci voluptates consequuntur ratione provident?
//             Corporis debitis sapiente laboriosam, est ullam totam mollitia reprehenderit voluptatum illum, tenetur natus? Obcaecati tenetur quibusdam cum doloribus in a laboriosam, aliquam sequi quo commodi sed rerum minima ex hic!
//             Repudiandae nemo laboriosam maiores eligendi unde quos voluptates adipisci facilis aliquam, sint velit recusandae iure corrupti natus, dolorum laudantium eaque quam doloribus. Nihil, rerum voluptate quae similique exercitationem aperiam ducimus.
//             Laboriosam saepe error, atque fuga nobis natus enim quo aut perferendis id vel eius quod amet provident ratione? Voluptatum porro dolorum cupiditate laboriosam dolorem unde asperiores distinctio dignissimos molestias corporis.
//             Deleniti cupiditate natus laborum consequatur nobis rem molestiae ab neque reiciendis quos fuga, culpa repellendus facere ad ea at sint id tenetur corrupti nam officiis accusantium! Dicta eius officia facere?
//             Odio amet optio cupiditate consequatur obcaecati, neque fugiat similique alias qui deleniti excepturi nesciunt, voluptatum nihil aut culpa inventore, autem officiis vero numquam maiores explicabo adipisci. Delectus consectetur amet doloremque!
//             Harum tempora, tenetur enim voluptate impedit quam explicabo soluta ipsa atque fuga facere amet dignissimos totam ex. Laborum repudiandae itaque incidunt! Tenetur corporis, odit magni perferendis amet quaerat ipsam cupiditate.
//             Incidunt autem dolore ducimus nihil nemo, vitae ut aspernatur corporis molestias nam numquam laboriosam asperiores voluptatum sequi? Id quos, perspiciatis ipsam aperiam, cum asperiores exercitationem quod, molestias facere inventore laborum!
//             Excepturi deserunt repudiandae, dignissimos cum sint cumque, laborum voluptatem debitis ab error ex quia dolorem incidunt consequuntur tempora aperiam adipisci eligendi. Recusandae, velit! Eaque ex quam voluptates autem ducimus deleniti!
//             Facere laborum nemo deserunt eligendi nostrum reiciendis voluptate quo laudantium dolorem fugiat minima ad obcaecati blanditiis eveniet unde, praesentium magnam est in veritatis illo repellat. Natus enim laudantium laboriosam nulla.</p>
//         </div>
//     );
// };

// export default About


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <p className="about-text" data-aos="fade-up" data-aos-delay="200">
          I'm a passionate <span className="highlight">MERN Stack Developer</span> with a focus on building elegant, fast, and scalable web apps.
          I enjoy solving problems through code and creating seamless user experiences. Whether it’s React on the front-end or Node.js on the back-end,
          I’m always excited to build and learn something new.
        </p>
        <p className="about-text" data-aos="fade-up" data-aos-delay="400">
          Beyond coding, I enjoy contributing to open source, designing UI/UX prototypes, and staying current with the latest tech trends.
        </p>
      </div>
    </section>
  );
};

export default About;



