import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { count } from 'console';

@Injectable()
export class CountryService {
  constructor(private readonly httpService: HttpService) {}

  // Fetch the list of available countries
  async getAvailableCountries() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`https://date.nager.at/api/v3/AvailableCountries`)
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch available countries: ' + error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Fetch detailed information about a specific country
  async getCountryInfo(countryCode: string) {
    try {
        const countryInfoResponse = await firstValueFrom(
            this.httpService.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`)
          );
      
          console.log('CountryInfo API Response:', countryInfoResponse.data); // Debug response
      
          // Extract the commonName and borders
          const countryName = countryInfoResponse.data.commonName?.toLowerCase(); // Convert to lowercase
          const borders = countryInfoResponse.data.borders?.map((border: any) => border.commonName) || [];
      
          if (!countryName) {
            throw new Error('Country name not found in response');
          }
      
          console.log(`Extracted Country Name (lowercase): ${countryName}`); // Debugging
          console.log(`Extracted Borders: ${borders}`); // Debugging
      
          // Step 2: Use the lowercase country name to fetch population data and flag URL
          const [populationResponse, flagResponse] = await Promise.all([
            // Fetch Historical Population Data
            firstValueFrom(
              this.httpService.post('https://countriesnow.space/api/v0.1/countries/population', {
                country: countryName,
              })
            ),
            // Fetch Flag URL
            firstValueFrom(
              this.httpService.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
                country: countryName,
              })
            ),
          ]);

      return {
        borders: countryInfoResponse.data.borders || [],
        populationData: populationResponse.data.data || [],
        flagUrl: flagResponse.data.data.flag || '',
      };
    } catch (error) {
      throw new HttpException(
        'Failed to fetch country information: ' + error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}