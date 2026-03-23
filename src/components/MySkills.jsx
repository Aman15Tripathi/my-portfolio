
import './mySkills.css'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress, SiNextdotjs } from "react-icons/si";

const MySkills = () => {
    return (
        <div className='skills-wrapper'>

            {/* first half */}
            <div className='skills-top'>
                <div className="skill">
                    <div className="skill-header">
                        <FaReact className="icon react" />
                        <p>React</p>
                    </div>
                    <div className="bar">
                        <div className="progress react"></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <FaNodeJs className="icon node" />
                        <p>Node.js</p>
                    </div>
                    <div className="bar">
                        <div className="progress node"></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <SiMongodb className="icon mongo" />
                        <p>MongoDB</p>
                    </div>
                    <div className="bar">
                        <div className="progress mongo"></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <SiJavascript className="icon js" />
                        <p>JavaScript</p>
                    </div>
                    <div className="bar">
                        <div className="progress js"></div>
                    </div>
                </div>
            </div>

            {/* second half */}

            <div className="skills-bottom">

                <div className="badges">

                    <span>< FaHtml5 className='icon html' /></span>
                    <span><FaCss3Alt className='icon css' /></span>
                    <span><FaBootstrap className='icon bootstrap' /></span>
                    <span><SiJavascript className='icon js' /></span>
                    <span><FaReact className='icon react' /></span>
                    <span><FaNodeJs className='icon node' /></span>
                    <span> <SiMongodb className='icon mongo' /></span>
                    <span><SiExpress className='icon express' /></span>

                </div>

            </div>

        </div>
    );
};

export default MySkills;

