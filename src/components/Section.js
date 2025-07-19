import linkIcon from '../assets/Link.svg'; 
export default function Section({title, description, link, dates, image}) {
  
  const handleClick = () =>{
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='sectionparent'>
    <img className="addborder" src={image} alt="Arteva"></img>
    <div className = "section">
      {title &&<div className='titlerow'>
        <div className='title'>{title}</div>
        {link && <div className = "githublink" onClick = {handleClick} style={{opacity:0.75, fontSize:"1.5rem"}}>View Github<img src={linkIcon} alt="link"/></div>}
      </div>}
      <div className='ptext'>{description}</div>
    </div>
    </div>
  );
}