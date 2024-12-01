import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const fetchAvailableCountries = async () => {
  const response = await axios.get(`${API_BASE_URL}/countries/available`);
  return response.data;
};

export const fetchCountryInfo = async (countryCode: string) => {
  const response = await axios.get(`${API_BASE_URL}/countries/${countryCode}`);
  return response.data;
};