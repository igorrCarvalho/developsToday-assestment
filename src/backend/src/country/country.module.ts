import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule to make HTTP requests
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  imports: [HttpModule],  // Make sure HttpModule is imported for HTTP requests
  controllers: [CountryController],  // Register the controller here
  providers: [CountryService],  // Register the service here
})
export class CountryModule {}