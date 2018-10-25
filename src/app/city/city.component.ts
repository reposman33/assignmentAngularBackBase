import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from '../app.component'; 
import { WeatherApi } from '../services/weatherApi';
import { CommunicatorService } from '../services/communicator.service';
import { WeatherCurrent, WeatherForecast } from '../interfaces/weather';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() cityName: string;
  @Input() cityCode: string;
  imgPath: string;
  isSelected: boolean = false;
  
  constructor(private appComponent: AppComponent,
            private weatherService: WeatherApi,
            private communicatorService: CommunicatorService) {
    this.imgPath = appComponent.imgPath;
  }

  ngOnInit() { }

  getCurrentWeather () {
    this.weatherService.getCurrentWeather(this.cityCode)
    .subscribe((data: WeatherCurrent) => {
      this.communicatorService.sendCurrentWeather({
        temperatureCurrent: data['main'].temp,
        windSpeedCurrent: data['wind'].speed
      });
    }
  }

  getForecastWeather () {
    this.weatherService.getForecastWeather(this.cityCode)
    .subscribe((data: WeatherForecast) => {
      this.communicatorService.sendForecastWeather({
        temperatureForecast: data['list'][0].main.temp,
        windSpeedForecast: data['list'][0].wind.speed
      });
  }
}
