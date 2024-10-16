import Confetti from 'react-confetti-explosion';
import translations from '../public/language/translations'
import dark from '../public/dark_mode.svg'
import light from '../public/light_mode.svg'
import { useEffect,  useRef,  useState } from "react";

const defaultOptions = {
  'theme': window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  'language': navigator.language == 'es-ES' ? 'es' : 'en',
};

function App() {
  const [language, setLanguage] = useState(navigator.language)
  const [theme, setheme] = useState(defaultOptions.theme)
  const [cities, setCities] = useState(defaultOptions.language)
  const [points, setPoints] = useState(0)
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
          <section className="config">
            <div className="languages">
              <button className='mode-btn' onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
              <img src={language === 'en' ? translations.image.es : translations.image.en} alt="spanish" className='img-language' />
              </button> 
            </div>
            <div className="themes">
              <button className='mode-btn' onClick={() => setheme(theme === 'light' ? 'dark' : 'light')}>
                <img src={theme === 'light' ? light : dark} alt="dark theme" className={`img-theme ${theme}`} />
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