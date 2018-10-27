/**
 * @interface WeatherCurrent - describe the current weather data 
 */
export interface WeatherCurrent {
    temperatureCurrent: number,
    windSpeedCurrent: number
}

/**
 * @interface WeatherForecast - describe the forecast weather data 
 */
export interface WeatherForecast{
    temperatureForecast: number,
    windSpeedForecast: number
}
