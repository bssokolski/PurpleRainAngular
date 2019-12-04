import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActionModel } from '../models/Action';
import { zip } from 'rxjs';

const Api_Url = 'https://purplerainapi2.azurewebsites.net';
const Api_Url2 = 'http://api.openweathermap.org/data/2.5/weather?';
const APPID = "84e63bc040e0079a4cc79dfff77e9389";
@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpClient) { }

  getAction(id: string) {
    return this.http.get(`${Api_Url}api/Action/${id}`,{headers: this.getHeaders()});
  }
  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  updateAction(action: ActionModel, id: number) {
    return this.http.put(`${Api_Url}/api/Action?actionID=${id}`, action, {headers: this.getHeaders()});
  }

  createAction(locationid: string, action: ActionModel) {
    return this.http.post(`${Api_Url}api/Action?locationid=${locationid}`, action, {headers: this.getHeaders()});
  }

  getEnumAction(temp: number, locationID: number) {
    return this.http.get(`${Api_Url}/api/Action?${temp}&locationID=${locationID}`) //does this need to recieve a zipcode instead?

  }
  getTempOpen(zipCode:number): any{
    return this.http.get(`${Api_Url2}zip=${zipCode}&units=imperial&APPID=${APPID}`)
  }
}
