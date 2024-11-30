import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('countries') // Base route: /countries
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  // Route: GET /countries/available
  @Get('available')
  async getAvailableCountries() {
    return this.countryService.getAvailableCountries();
  }

  // Route: GET /countries/:countryCode
  @Get(':countryCode')
  async getCountryInfo(@Param('countryCode') countryCode: string, countryName: string) {
    return this.countryService.getCountryInfo(countryCode);
  }
}