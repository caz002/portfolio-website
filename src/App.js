import logo from './logo.svg';
import './App.css';
import Section from './components/Section';
import SectionHeader from './components/SectionHeader';
import EducationCard from './components/EducationCard';
import artevaImage from './assets/artevaimage.png';
import cse110 from './assets/cse110.png';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="row">
        <div className='fixedside'>
          <ContactCard />
        </div>
        <div className='scrollable column'>
          <SectionHeader title={"EDUCATION"} />
          <EducationCard />
          <SectionHeader title={"PROJECTS"} />
          <Section title="Arteva" description = "Currently working on creating an art social networking site to share creations between family and friends. My goal was to create a progress-tracking system in order to encourage myself and others to draw. Through this project, I learned more about user authorization, as well as utilizing Gemini API to create a sketch prompt idea generator." link="https://github.com/caz002/art-app" image = {artevaImage}/>
          <Section title="Coding Developer Journal" description = "This project was the final of one of my undergrad courses, where I collaborated with 10 student engineers to follow Agile principles towards creating an educational web product. I learned more about design principles, architectural decisions, and the challenges that come with creating software applications." link="https://github.com/cse110-sp24-group6/cse110-sp24-group6" image={cse110}/>
        </div>
    </div>
  );
}

export default App;
