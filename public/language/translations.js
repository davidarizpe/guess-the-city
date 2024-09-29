import es from './es.png'
import en from './en.png'
import cdmx from '../cities/cdmx.png'
import nyc from '../cities/nyc.png'
import london from '../cities/london.png'
import paris from '../cities/paris.png'
import barcelona from '../cities/barcelona.png'
import madrid from '../cities/madrid.png'
import tokyo from '../cities/tokyo.png'
import sydney from '../cities/sydney.png'
import rome from '../cities/rome.png'

const data = {
  title: {
    en: 'Guess the city',
    es: 'Adivina la Ciudad'
  },
  image: {
    en,
    es
  },

  cities: {
    en: [
      {
        id: 1,
        name: 'Mexico City',
        abbreviation: 'CDMX',
        image: cdmx
      },
      {
        id: 2,
        name: 'New York',
        abbreviation: 'NYC',
        image: nyc
      },
      {
        id: 3,
        name: 'London',
        abbreviation: null,
        image: london
      },
      {
        id: 4,
        name: 'Paris',
        abbreviation: null,
        image: paris
      },
      {
        id: 5,
        name: 'Barcelona',
        abbreviation: null,
        image: barcelona
      },
      {
        id: 6,
        name: 'Madrid',
        abbreviation: null,
        image: madrid
      },
      {
        id: 7,
        name: 'Tokyo',
        abbreviation: null,
        image: tokyo
      },
      {
        id: 8,
        name: 'Sydney',
        abbreviation: null,
        image: sydney
      },
      {
        id: 9,
        name: 'Rome',
        abbreviation: null,
        image: rome
      }
    ],
    
    es: [
      {
        id: 1,
        name: 'Ciudad de México',
        abbreviation: 'CDMX',
        image: cdmx
      },
      {
        id: 2,
        name: 'Nueva York',
        abbreviation: 'NYC',
        image: nyc
      },
      {
        id: 3,
        name: 'Londres',
        abbreviation: null,
        image: london
      },
      {
        id: 4,
        name: 'Paris',
        abbreviation: null,
        image: paris
      },
      {
        id: 5,
        name: 'Barcelona',
        abbreviation: null,
        image: barcelona
      },
      {
        id: 6,
        name: 'Madrid',
        abbreviation: null,
        image: madrid
      },
      {
        id: 7,
        name: 'Tokio',
        abbreviation: null,
        image: tokyo
      },
      {
        id: 8,
        name: 'Sydney',
        abbreviation: null,
        image: sydney
      },
      {
        id: 9,
        name: 'Roma',
        abbreviation: null,
        image: rome
      },
    ]
  }
}

export default data