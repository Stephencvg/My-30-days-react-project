/* eslint-disable react/prop-types */
const Mains = ({ country, getCountryData }) => {
  console.log(country);
  return (
    <>
      <div className='main--container'>
        <div className='country--flag--and--name'>
          <img
            className='flag'
            src={country.flag}
            alt='country--flag'
          />
          <p className='country--name'>{country.name}</p>
        </div>
        <div className='country--details'>
          <p>
            <span className='details--name'>Capital: </span>
            <span>{country.capital}</span>
          </p>
          <p>
            <span className='details--name'>Languag: </span>
            <span>{country.language}</span>
          </p>
          <p>
            <span className='details--name'>Population: </span>{' '}
            <span>{country.population}</span>
          </p>
          <p>
            <span className='details--name'>Currency: </span>{' '}
            <span>{country.currency}</span>
          </p>
        </div>
      </div>
      <button
        onClick={getCountryData}
        className='select--country'
      >
        Select Country
      </button>
      <footer className="foot">&copy;Bowen University(DDS) Stephen Adeoye</footer>
    </>
  );
};

export default Mains;
