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

  sendCurrentWeather(data: WeatherCurrent) {
    this.WeatherCurrentSubject.next(data);
  }

  sendForecastWeather(data: WeatherForecast) {
    this.WeatherForecastSubject.next(data);
  }

}
