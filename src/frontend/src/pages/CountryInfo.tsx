import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCountryInfo } from '../api/api';
import PopulationChart from '../components/PopulationChart';
import { LoaderCircle } from 'lucide-react';

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

  if (loading) return (
    <div className='w-full h-screen flex items-center justify-center'>
        <LoaderCircle className='animate-spin w-16 h-16' />
    </div>
  );

  return (
    <div className='flex w-full h-screen items-center justify-center rounded'>
        <div className='w-[60%] p-5 bg-black flex flex-col items-center justify-center gap-2'>
            <h1 className='text-white'>{countryInfo.populationData.country}</h1>
            <img
                src={countryInfo.flagUrl}
                alt={`${countryInfo.populationData.country} flag`}
                width="200"
            />
            <h2 className='text-white'>Border Countries:</h2>
            <ul>
                {countryInfo.borders.map((border: any, index: number) => (
                <li key={index}>
                    <Link to={`/country/${border.countryCode}`}>{border.commonName}</Link>
                </li>
                ))}
            </ul>
            <h2 className='text-white'>Population Over Time:</h2>
            <PopulationChart populationData={countryInfo.populationData.populationCounts} />
        </div>
    </div>
  );
};

export default CountryInfo;
