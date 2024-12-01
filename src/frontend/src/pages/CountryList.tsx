import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAvailableCountries } from '../api/api';

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<{ countryCode: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAvailableCountries()
      .then(setCountries)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading countries...</p>;

  return (
    <div>
      <h1>Available Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.countryCode}>
            <Link to={`/country/${country.countryCode}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
