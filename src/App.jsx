import translations from '/public/language/translations.js'
import dark from '/public/dark_mode.svg'
import light from '/public/light_mode.svg'
import { useEffect, useState } from "react";

function App() {
  const [language, setLanguage] = useState('en')
  const [theme, setheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

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
    </div>
  )
}

export default App;