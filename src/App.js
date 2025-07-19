import logo from './logo.svg';
import './App.css';
import Section from './components/Section';
import SectionHeader from './components/SectionHeader';

function App() {
  return (
    <div className="App row">
      <div className="column">
      <div>Catherine Zhang</div>
      <div>cathzhangc@gmail.com</div>
      </div>
      <div className="column">
        <SectionHeader title={"EDUCATION"} />
        <Section description = "Bachelor's of Science in Mathematics-Computer Science" dates="Sept 2020 - June 2024"/>
        <SectionHeader title={"PROJECTS"} />
        <Section title="Arteva" description = "Currently working on creating an art social networking site to share creations between family and friends. My goal was to create a progress-tracking system in order to encourage myself and others to draw. Through this project, I learned more about user authorization, as well as utilizing Gemini API to create a prompt generator for sketches." link="https://github.com/caz002/art-app"/>
        <Section title="Coding Developer Journal" description = "This project was the final of one of my undergrad courses, where I collaborated with 10 student engineers to follow Agile principles towards creating an educational web product. I learned more about design principles, architectural decisions, and the challenges that come with creating software applications." link="https://github.com/cse110-sp24-group6/cse110-sp24-group6"/>
        </div>
    </div>
  );
}

export default App;
