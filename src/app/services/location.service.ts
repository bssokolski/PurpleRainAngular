import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { LocationModel } from '../models/location';

const Api_Url= 'https://purplerainapi2.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(){
    return this.http.get(`${Api_Url})/api/location`,{headers: this.getHeaders()});
  }
  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createLocation(location:LocationModel,){
    return this.http.post(`${Api_Url}/api/location`,location,{headers: this.getHeaders()});

  }

  getLocation(id: string){
    return this.http.get(`${Api_Url}/api/location/${id}`,{headers: this.getHeaders()});
  }

  updateLocation(location: LocationModel){
    return this.http.put(`${Api_Url}/api/location`, location ,{headers: this.getHeaders()});

  }

  deleteLocation(id: number){
    return this.http.delete(`${Api_Url}/api/location${id}`,{headers: this.getHeaders()});
  }
}
