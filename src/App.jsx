import { useState, useEffect, useRef } from 'react'
import './App.css'
import NewCountry from './components/NewCountry';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const medals = useRef([
    { id: 1, name: 'Gold', color: '#FFD700', rank: 1 },
    { id: 2, name: 'Silver', color: '#C0C0C0', rank: 2 },
    { id: 3, name: 'Bronze', color: '#CD7F32', rank: 3 },
  ]);

  function handleAdd(name) {
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    setCountries([...countries].concat({ id: id, name: name, Gold: 0, Silver: 0, Bronze: 0 }));
  }

  function handleDelete(countryId) {
    setCountries([...countries].filter(c => c.id !== countryId));
  }

  function handleIncrement(countryId, medalName) {
    const idx = countries.findIndex(c => c.id === countryId);
    const mutableCountries = [...countries];
    mutableCountries[idx][medalName] += 1;
    setCountries(mutableCountries);
  }
  function handleDecrement(countryId, medalName) {
    const idx = countries.findIndex(c => c.id === countryId);
    const mutableCountries = [...countries];
    mutableCountries[idx][medalName] -= 1;
    setCountries(mutableCountries);
  }

  function getAllMedalsTotal() {
    let sum = 0;
    medals.current.forEach(medal => { sum += countries.reduce((a, b) => a + b[medal.name], 0); });
    return sum;
  }

  // this is the functional equivalent to componentDidMount
  useEffect(() => {
    // initial data loaded here
    let fetchedCountries = [
      { id: 1, name: 'United States', Gold: 2, Silver: 2, Bronze: 3 },
      { id: 2, name: 'China', Gold: 3, Silver: 1, Bronze: 0 },
      { id: 3, name: 'Germany', Gold: 0, Silver: 2, Bronze: 2 },
      { id: 4, name: 'France', Gold: 2, Silver: 2, Bronze: 1 },
      { id: 5, name: 'Spain', Gold: 1, Silver: 1, Bronze: 0 },
      { id: 6, name: 'United Kingdom', Gold: 0, Silver: 2, Bronze: 3 },
      { id: 7, name: 'Brazil', Gold: 3, Silver: 0, Bronze: 0 },
      { id: 8, name: 'Italy', Gold: 2, Silver: 2, Bronze: 2 },
      { id: 9, name: 'Switzerland', Gold: 1, Silver: 1, Bronze: 2 },
      { id: 10, name: 'Poland', Gold: 0, Silver: 2, Bronze: 1 },
      { id: 11, name: 'Sweden', Gold: 0, Silver: 3, Bronze: 1 },
      { id: 12, name: 'Ireland', Gold: 2, Silver: 1, Bronze: 0 },
      { id: 13, name: 'Scotland', Gold: 3, Silver: 0, Bronze: 2 },
    ]
    setCountries(fetchedCountries);
  }, []);

  return (
    <>
    <h1>Olympic Medals | {getAllMedalsTotal()} | <NewCountry onAdd={handleAdd} /></h1>
      <ul>
        {
            countries.sort((a, b) => a.name.localeCompare(b.name)).map(country =>
              <Country
                key={country.id}
                country={country}
                medals={medals.current}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            )
        }
      </ul>
    </>
  )
}

export default App
