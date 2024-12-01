"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let CountryService = class CountryService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getAvailableCountries() {
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`https://date.nager.at/api/v3/AvailableCountries`));
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch available countries: ' + error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getCountryInfo(countryCode) {
        try {
            const countryInfoResponse = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`));
            console.log('CountryInfo API Response:', countryInfoResponse.data);
            const countryName = countryInfoResponse.data.commonName?.toLowerCase();
            const borders = countryInfoResponse.data.borders?.map((border) => border.commonName) || [];
            if (!countryName) {
                throw new Error('Country name not found in response');
            }
            console.log(`Extracted Country Name (lowercase): ${countryName}`);
            console.log(`Extracted Borders: ${borders}`);
            const [populationResponse, flagResponse] = await Promise.all([
                (0, rxjs_1.firstValueFrom)(this.httpService.post('https://countriesnow.space/api/v0.1/countries/population', {
                    country: countryName,
                })),
                (0, rxjs_1.firstValueFrom)(this.httpService.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
                    country: countryName,
                })),
            ]);
            return {
                borders: countryInfoResponse.data.borders || [],
                populationData: populationResponse.data.data || [],
                flagUrl: flagResponse.data.data.flag || '',
            };
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch country information: ' + error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CountryService);
//# sourceMappingURL=country.service.js.map