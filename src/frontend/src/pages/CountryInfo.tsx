import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCountryInfo } from '../api/api';
import PopulationChart from '../components/PopulationChart';

const CountryInfo: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [countryInfo, setCountryInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (countryCode) {
      fetchCountryInfo(countryCode)
        .then(setCountryInfo)
        .finally(() => setLoading(false));
    }
  }, [countryCode]);

  if (loading) return <p>Loading country information...</p>;

  return (
    <div>
      <h1>{countryInfo.populationData.country}</h1>
      <img
        src={countryInfo.flagUrl}
        alt={`${countryInfo.populationData.country} flag`}
        width="200"
      />
      <h2>Border Countries:</h2>
      <ul>
        {countryInfo.borders.map((border: any, index: number) => (
          <li key={index}>
            <Link to={`/country/${border.countryCode}`}>{border.commonName}</Link>
          </li>
        ))}
      </ul>
      <h2>Population Over Time:</h2>
      <PopulationChart populationData={countryInfo.populationData.populationCounts} />
    </div>
  );
};

export default CountryInfo;
