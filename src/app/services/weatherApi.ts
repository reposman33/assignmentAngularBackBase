import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherApi {
  OWMUrl: string = 'https://api.openweathermap.org/data/2.5/';
  OWMAPIKey = 'b94008c5eae5ea224cef3211ac8f1c4e';
  currentWeatherUrl: string = `${this.OWMUrl}weather?q=`;
  forecastWeatherUrl: string = `${this.OWMUrl}forecast?cnt=1&q=`;

  constructor(private http: HttpClient) { }

  getCurrentWeather(cityCode: string) {
    return this.http.get(`${this.currentWeatherUrl}${cityCode}&units=metric&appid=${this.OWMAPIKey}`);
  }

  getForecastWeather(cityCode: string) {
    return this.http.get(`${this.forecastWeatherUrl}${cityCode}&units=metric&appid=${this.OWMAPIKey}`);
  }  
}
