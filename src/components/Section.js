export default function Section({title, description, link, dates}) {
  
  const handleClick = () =>{
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className = "section">
      {title &&<div className='row'>
        <div className='title'>{title}</div>
        {link && <div className = "githublink" onClick = {handleClick}>View Github</div>}
      </div>}
      {dates && <div>{dates}</div>}
      <div>{description}</div>
    </div>
  );
}