import { CountryService } from './country.service';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    getAvailableCountries(): Promise<any>;
    getCountryInfo(countryCode: string, countryName: string): Promise<{
        borders: any;
        populationData: any;
        flagUrl: any;
    }>;
}
