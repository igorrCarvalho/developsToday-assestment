import { HttpService } from '@nestjs/axios';
export declare class CountryService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getAvailableCountries(): Promise<any>;
    getCountryInfo(countryCode: string): Promise<{
        borders: any;
        populationData: any;
        flagUrl: any;
    }>;
}
