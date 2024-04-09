/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Mains from './Mains';
import Navbar from './Navbar';
import { countriesData } from './countries';

const App = () => {
  // console.log(countriesData);
  const [countries, setCountries] = useState(countriesData);

  const [selectedCountries, setSelectedCountries] = useState({
    name: '',
    capital: '',
    language: '',
    population: '',
    flag: '',
    currency: '',
  });
  const getCountryData = () => {
    const countryArray = countries;
    const randomCountry = Math.floor(Math.random() * countryArray.length);
    const value = countryArray[randomCountry];

    setSelectedCountries((prevCountry) => ({
      ...prevCountry,
      name: value.name,
      capital: value.capital,
      language: value.languages,
      population: value.population,
      flag: value.flag,
      currency: value.currency,
    }));
  };

  return (
    <div>
      <Navbar />
      <Mains
        country={selectedCountries}
        getCountryData={getCountryData}
      />
    </div>
  );
};

export default App;
