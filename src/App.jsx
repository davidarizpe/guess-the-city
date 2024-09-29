import Confetti from 'react-confetti-explosion';
import translations from '/public/language/translations.js'
import dark from '/public/dark_mode.svg'
import light from '/public/light_mode.svg'
import { useEffect,  useRef,  useState } from "react";

function App() {
  const [language, setLanguage] = useState('en')
  const [theme, setheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const [cities, setCities] = useState(translations.cities[language])
  const [points, setPoints] = useState(8)
  const [win, setWin] = useState(false)

  const answer = useRef(null)

  
  const sumbit = (e) => {
    e.preventDefault()
    
    let value = answer.current.value;
    let city = cities[points]
    
    if (value.toLowerCase() === city.name.toLowerCase() || value.toLowerCase() === city.abbreviation?.toLowerCase()) {
      if (cities[points + 1]) {
        setPoints(points + 1)
        answer.current.value = ''
        return
      }
      
      setWin(true)
      return
    } else {
      points > 0 ? setPoints(points - 1) : null
      answer.current.value = ''
    }
  }
  
  function reset () {
    setWin(false);
    setPoints(0);
    answer.current.value = '';
  }
  
  useEffect(() => {
    document.body.className = theme
    setCities(translations.cities[language])
  }, [theme, language])

  useEffect(() => {
    if (win) {
      setTimeout(() => {
        reset()
      }, 1000)
    }
  }, [win])

  return (
    <div className='App'>
      <nav className="nav">
        <h1 className="title">{translations.title[language]}</h1>
          <section className="styles">
            <div className="languages">
              <button className='mode-btn' id="spanish" onClick={() => setLanguage('es')}>
              <img src={translations.image.es} alt="spanish" className='img-language' />
              </button>          
              <button className='mode-btn' id="english" onClick={() => setLanguage('en')}>
                <img src={translations.image.en} alt="english" className='img-language' />
              </button>
            </div>
            <div className="mode">
              <button className='mode-btn' onClick={() => setheme('dark')}>
                <img src={dark} alt="dark theme" className={`img-theme ${theme}`} />
              </button>
              <button className='mode-btn' onClick={() => setheme('light')}>
                <img src={light} alt="light theme" className={`img-theme ${theme}`} />
              </button>
            </div>
          </section>
      </nav>

      <main className="main">
        <img className="city" src={cities[points].image} alt={cities[points].name} />
        
        <form className="answer" onSubmit={sumbit}>
          <input type="text" placeholder="Enter" className={`input ${theme}`} ref={answer} />
          <button className="submit">Submit</button>
        </form>
      </main>

      {
        win && (
          <Confetti />
        )
      }
    </div>
  )
}

export default App;