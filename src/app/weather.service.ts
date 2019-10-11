import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
city=[]
cityname
  constructor(public http:HttpClient) {

   }
UpDateWeather(City){
  return this.http.get('https://api.openweathermap.org/data/2.5/weather?q= '+ City + ',za&APPID=f8c40d7ecbc70fe038cbac865f70ad4f')
}
search(){
  return this.city
}
}
