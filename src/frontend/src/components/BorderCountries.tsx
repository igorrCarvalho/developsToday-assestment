import React from 'react';
import { Link } from 'react-router-dom';

interface BorderCountriesProps {
  borders: { commonName: string; countryCode: string }[];
}

const BorderCountries: React.FC<BorderCountriesProps> = ({ borders }) => {
  if (!borders || borders.length === 0) {
    return <p>No border countries available.</p>;
  }

  return (
    <ul>
      {borders.map((border, index) => (
        <li key={index}>
          <Link to={`/country/${border.countryCode}`}>{border.commonName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BorderCountries;
