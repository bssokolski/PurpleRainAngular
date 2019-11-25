import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders } from '@angular/common/http';
import { ActionModel } from '../models/Action';

const Api_Url= 'https://localhost:44368/';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpClient) { }

  getAction(id: string){
    return this.http.get(`${Api_Url}/Actions/${id}`,)
  }

  updateAction(action: ActionModel){
    return this.http.put(`${Api_Url}/api/outfit`, action,)
  }



}
