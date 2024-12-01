import React, { useEffect, useState } from 'react';
import { useParams, Link, redirect, useNavigate } from 'react-router-dom';
import { fetchCountryInfo } from '../api/api';
import PopulationChart from '../components/PopulationChart';
import { House, LoaderCircle } from 'lucide-react';

const CountryInfo: React.FC = () => {
  const navigate = useNavigate();
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
    <div className='w-full h-screen flex items-center justify-center bg-black'>
        <LoaderCircle className='animate-spin w-16 h-16 text-gray-500' />
    </div>
  );

  return (
    <div className='flex w-full h-screen items-center justify-center bg-black p-5'>
        <div className='relative w-[60%] p-5 bg-white flex flex-col items-center justify-center gap-2 rounded'>
            <div className='absolute top-2 left-2'>
                <House className='text-black w-4 h-4 cursor-pointer' onClick={() => navigate("/")}/>
            </div>
            <h1 className='text-white'>{countryInfo.populationData.country}</h1>
            <img
                className='border border-gray-500 rounded'
                src={countryInfo.flagUrl}
                alt={`${countryInfo.populationData.country} flag`}
                width="200"
            />
            <h2 className='text-black'>Border Countries:</h2>
            <ul>
                {countryInfo.borders.map((border: any, index: number) => (
                <li key={index}>
                    <Link to={`/country/${border.countryCode}`}>{border.commonName}</Link>
                </li>
                ))}
            </ul>
            <PopulationChart populationData={countryInfo.populationData.populationCounts} />
        </div>
    </div>
  );
};

export default CountryInfo;
