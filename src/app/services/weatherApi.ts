import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherApi {
  /** @OWMUrl {string} common part of Open Weather Map url for all requests*/
  OWMUrl: string = 'https://api.openweathermap.org/data/2.5/';
  OWMAPIKey = 'b94008c5eae5ea224cef3211ac8f1c4e';
  /** @currentWeatherUrl {string} Url to retrieve the current weatherdata from Open Weather Map API*/
  currentWeatherUrl: string = `${this.OWMUrl}weather?q=`;
  /** @forecastWeatherUrl {string} Url to retrieve the forecast weatherdata from Open Weather Map API*/
  forecastWeatherUrl: string = `${this.OWMUrl}forecast?cnt=1&q=`;

  /**
   * Constructor 
   * @param http {HttpClient} - Implicitly create a private classmember.
   */
  constructor(private http: HttpClient) { }

  /** Retrieve the current weather data from Open Weather Map API
   * @param {string} cityCode - city name and ISO 3166 country codes (e.g. 'Berlin,DE')
   * @return {observable}
  */
  getCurrentWeather(cityCode: string) {
    return this.http.get(`${this.currentWeatherUrl}${cityCode}&units=metric&appid=${this.OWMAPIKey}`);
  }

  /** Retrieve the forecast weather data from Open Weather Map API
   * @param {string} cityCode - city name and ISO 3166 country codes (e.g. 'Berlin,DE')
   * @return {observable}
  */
 getForecastWeather(cityCode: string) {
    return this.http.get(`${this.forecastWeatherUrl}${cityCode}&units=metric&appid=${this.OWMAPIKey}`);
  }  
}
