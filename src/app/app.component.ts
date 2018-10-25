import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from './services/communicator.service';
import { WeatherCurrent, WeatherForecast } from './interfaces/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  temperatureCurrent: number;
  windSpeedCurrent: number;
  temperatureForecast: number;
  windspeedForecast: number;
  title = 'assignmentAngularBackbase';
  imgPath = 'assets/img/';

  constructor(communicatorService: CommunicatorService) {
    communicatorService.WeatherCurrent$.subscribe((data: WeatherCurrent) => {
      this.temperatureCurrent = data.temperatureCurrent;
      this.windSpeedCurrent = data.windSpeedCurrent
    });
    communicatorService.WeatherForecast$.subscribe((data: WeatherForecast) => {
      this.temperatureForecast = data.temperatureForecast;
      this.windspeedForecast = data.windSpeedForecast
    });
  }
}
