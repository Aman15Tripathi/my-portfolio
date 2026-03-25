import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap
} from "react-icons/fa";
import {
  SiMongodb, SiJavascript, SiExpress
} from "react-icons/si";

const MySkills = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">

      {/*  TOP HALF */}
      <div className="flex-1 flex flex-col justify-center px-5 bg-gradient-to-r from-[#16222a] to-[#3a6073] text-white">

        {/* SKILL ITEM */}
        {[
          { name: "React", icon: <FaReact />, width: "90%", color: "#61dafb" },
          { name: "Node.js", icon: <FaNodeJs />, width: "85%", color: "#22c55e" },
          { name: "MongoDB", icon: <SiMongodb />, width: "80%", color: "#10b981" },
          { name: "JavaScript", icon: <SiJavascript />, width: "88%", color: "#facc15" },
        ].map((skill, i) => (
          <div key={i} className="max-w-[500px] w-full mx-auto my-3">

            {/* HEADER */}
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xl">{skill.icon}</span>
              <p>{skill.name}</p>
            </div>

            {/* BAR */}
            <div className="w-full h-[8px] bg-[#1e293b] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: skill.width,
                  background: skill.color
                }}
              ></div>
            </div>

          </div>
        ))}
      </div>

      {/*  BOTTOM HALF */}
      <div className="flex-1 flex justify-center items-center bg-gradient-to-r from-[#16222a] to-[#3a6073]">

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 w-[80%] md:w-[60%]">

          {/* ICONS */}
          {[
            { icon: <FaHtml5 />, color: "#e34c26" },
            { icon: <FaCss3Alt />, color: "#264de4" },
            { icon: <FaBootstrap />, color: "#7952b3" },
            { icon: <SiJavascript />, color: "#facc15" },
            { icon: <FaReact />, color: "#61dafb" },
            { icon: <FaNodeJs />, color: "#22c55e" },
            { icon: <SiMongodb />, color: "#10b981" },
            { icon: <SiExpress />, color: "#ffffff" },
          ].map((item, i) => (
            <span key={i} className="flex justify-center items-center">
              <span
                className="text-4xl transition duration-300 hover:scale-125"
                style={{ color: item.color }}
              >
                {item.icon}
              </span>
            </span>
          ))}

        </div>
      </div>
    </div>
  );
};

export default MySkills;