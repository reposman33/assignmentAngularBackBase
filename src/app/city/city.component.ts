import { Component, Input } from "@angular/core";

import { AppComponent } from "../app.component";
import { WeatherApi } from "../services/weatherApi";
import { CommunicatorService } from "../services/communicator.service";
import { WeatherCurrent, WeatherForecast } from "../interfaces/weather";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.scss"]
})
export class CityComponent {
  @Input() cityName: string;
  @Input() cityCode: string;
  imgPath: string;
  isSelected: boolean = false;

  /**
   * Do setup work of component
   * @Constructor
   * @param {AppComponent} appComponent - reference to parent component
   * @param {WeatherApi} weatherService - reference to service that retrieves OWM data
   * @param {CommunicatorService} communicatorService - reference to servivce that allows components to send and receive data
   */

  constructor(
    private appComponent: AppComponent,
    private weatherService: WeatherApi,
    private communicatorService: CommunicatorService
  ) {
    this.imgPath = appComponent.imgPath;
  }

  /**
   * Request current weather info from Service, extract relevant information
   * @getCurrentWeather
   * @return void
   **/
  getCurrentWeather() {
    this.weatherService
      .getCurrentWeather(this.cityCode)
      .subscribe((data: WeatherCurrent) => {
        // broadcast response data using the communicatorService
        this.communicatorService.sendCurrentWeather({
          temperatureCurrent: Math.round(data["main"].temp),
          windSpeedCurrent: Math.round(data["wind"].speed)
        });
      });
  }

  /**
   * Request forecast weather info from Service, extract relevant information
   * @getForecastWeather
   * @return void
   **/
  getForecastWeather() {
    this.weatherService
      .getForecastWeather(this.cityCode)
      // broadcast response data using the communicatorService
      .subscribe((data: WeatherForecast) => {
        this.communicatorService.sendForecastWeather({
          temperatureForecast: Math.round(data["list"][0].main.temp),
          windSpeedForecast: Math.round(data["list"][0].wind.speed)
        });
      });
  }
}
