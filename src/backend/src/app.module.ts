import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryService } from './country/country.service';
import { CountryController } from './country/country.controller';
import { HttpModule } from '@nestjs/axios';
import { CountryModule } from './country/country.module';

@Module({
  imports: [HttpModule, CountryModule],
  controllers: [AppController, CountryController],
  providers: [AppService, CountryService],
})
export class AppModule {}
