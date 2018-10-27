import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WeatherCurrent, WeatherForecast } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private WeatherCurrentSubject = new Subject<WeatherCurrent>();
  private WeatherForecastSubject = new Subject<WeatherForecast>();
  public WeatherCurrent$ = this.WeatherCurrentSubject.asObservable()
  public WeatherForecast$ = this.WeatherForecastSubject.asObservable()

  constructor() { }

  /**
   * by calling this method other components can broadcast current weather data to whoever is subscribed 
   * @sendCurrentWeather
   * @param {WeatherCurrent} data - current weather data to be broadcasted
   * @returns void
   */
  sendCurrentWeather(data: WeatherCurrent) {
    this.WeatherCurrentSubject.next(data);
  }

  /**
   * by calling this method other components can broadcast forecast weather data to whoever is subscribed 
   * @sendForecastWeather
   * @param {WeatherForecast} data - forecast weather data to be broadcasted
   * @returns void
   */
  sendForecastWeather(data: WeatherForecast) {
    this.WeatherForecastSubject.next(data);
  }

}
