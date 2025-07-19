import linkedinImage from "../assets/linkedin.svg"
import github from "../assets/github.svg"
export default function ContactCard() {
    const handleLinkedinClick = () =>{
        window.open("https://www.linkedin.com/in/catherine-zhang-b6a86415a/", '_blank', 'noopener,noreferrer');
    };
    const handleGithubClick = () =>{
        window.open("https://github.com/caz002", '_blank', 'noopener,noreferrer');
    };
  return (
    <div className="sectionparent contactbody">
        <div style={{fontSize:"3rem"}}>Catherine Zhang</div>
        <div className="contactrow">   
          <div className='ptext'>cathzhangc@gmail.com</div>
          <img onClick = {handleLinkedinClick} src={linkedinImage} alt="linkedin"></img>
          <img onClick = {handleGithubClick}src={github} alt="github"></img>
        </div>
    </div>
  );
}