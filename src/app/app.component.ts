import { Component } from '@angular/core';
import { CommunicatorService } from './services/communicator.service';
import { WeatherCurrent, WeatherForecast } from './interfaces/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  /** @param {number} temperatureCurrent - initialize classmember for use in template to display data */
  temperatureCurrent: number;
  /** @param {number} windSpeedCurrent - initialize classmember for use in template to display data */
  windSpeedCurrent: number;
  /** @param {number} temperatureForecast - initialize classmember for use in template to display data */
  temperatureForecast: number;
  /** @param {number} windspeedForecast - initialize classmember for use in template to display data */
  windspeedForecast: number;
  /** @param {string} title - initialize classmember for use in template to display app title */
  title: string = 'assignmentAngularBackbase';
  /** @param {string} imgPath - initialize classmember for use in template to display local images */
  imgPath = 'assets/img/';

  /***
   * Initialize the setup for incoming weather data  
   * @ Constructor
   * @param {CommunicatorService} communicatorService - allows to be notified of incoming data from source  
  */
  constructor(communicatorService: CommunicatorService) {
    // subscribe to current weather data
    communicatorService.WeatherCurrent$.subscribe((data: WeatherCurrent) => {
      this.temperatureCurrent = data.temperatureCurrent;
      this.windSpeedCurrent = data.windSpeedCurrent
    });
    // subscribe to forecast weather data
    communicatorService.WeatherForecast$.subscribe((data: WeatherForecast) => {
      // initialize classmembers with weather forecast data
      this.temperatureForecast = data.temperatureForecast;
      this.windspeedForecast = data.windSpeedForecast
    });
  }
 
}
