import { AboutMe } from "./About";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { useRef } from 'react';
import { Projects } from "./Projects";
import { Blogs } from "./Blogs";
import { Contact} from "./Contact";

export const Portfolio = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const blogRef = useRef(null);
    const contactRef = useRef(null);

    return(
        <div>
            <Header aboutRef={aboutRef} skillsRef={skillsRef} projectRef={projectRef}
                blogRef={blogRef} contactRef={contactRef} />
            <AboutMe skillsRef={skillsRef} aboutRef={aboutRef} />
            <Skills skillsRef={skillsRef} />
            <Projects projectRef={projectRef} />
            <Blogs blogRef={blogRef} />
            <Contact aboutRef={aboutRef} contactRef={contactRef} />
        </div>
    );
};