import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActionModel } from '../models/Action';
import { zip } from 'rxjs';

const Api_Url = 'https://localhost:44368/';
const Api_Url2 = 'http://api.openweathermap.org/data/2.5/weather?';
const APPID = "84e63bc040e0079a4cc79dfff77e9389";
@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpClient) { }

  getAction(id: string) {
    return this.http.get(`${Api_Url}api/Action/${id}`)
  }

  updateAction(action: ActionModel, id: number) {
    return this.http.put(`${Api_Url}/api/Action?actionID=${id}`, action)
  }

  createAction(locationid: number, action: ActionModel) {
    return this.http.post(`${Api_Url}api/Action?locationid=${locationid}`, action)
  }

  getEnumAction(temp: number, locationID: number) {
    return this.http.get(`${Api_Url}/api/Action?${temp}&locationID=${locationID}`) //does this need to recieve a zipcode instead?

  }

  getTempOpen(zipCode:number): any{
    return this.http.get(`${Api_Url2}zip=${zipCode}&units=imperial&APPID=${APPID}`)
  }
}
