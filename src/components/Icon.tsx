export default function Icon({setShowPopup, src, text}: {setShowPopup: React.Dispatch<React.SetStateAction<boolean>>, src:string, text:string}){
    return(
        <>
        <div onClick = {() => setShowPopup(true)} className='icon'>
          <img src={src} style={{width: 32, height: 32}} alt="icon"></img>
          <div>{text}</div>
        </div>
        </>
    )
}