import React from "react"

function Meme(){

  React.useEffect(
    () => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
    },[]
  )
  

  const [meme, setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  }) 

  const [allMemes,setAllMemes] = React.useState()

  function handleClick(){
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage:allMemes[randomNumber].url
      }
    })
  }

  function handleChange(event){
    const {name,value} = event.target
    setMeme(
      prevMeme => {
        return {
          ...prevMeme,
          [name]: value
        }
      }
    )
  }
  return (
    <div className="meme">
      <div className="input--fields">
        <input 
          type="text" 
          className="nice" 
          placeholder="Enter top phrase"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          />
        <input 
          type="text" 
          className="nice" 
          placeholder="Enter bottom phrase"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          />
      </div>
      <button onClick={handleClick} className="bgi btn--getimg">Get a new meme image</button>
      <div className="memeImgDiv">
        <img className="memeImg" src={meme.randomImage} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}

export default Meme;

