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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const country_service_1 = require("./country.service");
let CountryController = class CountryController {
    constructor(countryService) {
        this.countryService = countryService;
    }
    async getAvailableCountries() {
        return this.countryService.getAvailableCountries();
    }
    async getCountryInfo(countryCode, countryName) {
        return this.countryService.getCountryInfo(countryCode);
    }
};
exports.CountryController = CountryController;
__decorate([
    (0, common_1.Get)('available'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getAvailableCountries", null);
__decorate([
    (0, common_1.Get)(':countryCode'),
    __param(0, (0, common_1.Param)('countryCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "getCountryInfo", null);
exports.CountryController = CountryController = __decorate([
    (0, common_1.Controller)('countries'),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryController);
//# sourceMappingURL=country.controller.js.map