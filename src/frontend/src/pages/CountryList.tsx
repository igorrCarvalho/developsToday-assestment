import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAvailableCountries } from '../api/api';
import { LoaderCircle } from 'lucide-react';

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<{ countryCode: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAvailableCountries()
      .then(setCountries)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className='w-full h-screen flex items-center justify-center bg-black'>
        <LoaderCircle className='animate-spin w-16 h-16 text-gray-500' />
    </div>
  );

  return (
    <div className='w-full h-full flex items-center justify-center bg-black p-5'>
        <div className='w-[50%] flex items-center justify-center flex-col bg-white text-black gap-2 rounded p-5'>
            <div className='w-full flex items-center justify-center'>
                <h1 className='text-black'>Available Countries</h1>
            </div>
            <div className=' w-[60%] flex items-center justify-center rounded'>
                <ul className='flex flex-col items-center justify-center'>
                    {countries.map((country) => (
                    <li key={country.countryCode} className=''>
                        <Link className='' to={`/country/${country.countryCode}`}>{country.name}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default CountryList;
