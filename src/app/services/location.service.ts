import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { LocationModel } from '../models/location';

const Api_Url= 'https://localhost:44368/';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(){
    return this.http.get(`${Api_Url})/api/location`,)
  };

  createLocation(location:LocationModel){
    return this.http.post(`${Api_Url}/api/location`,location,)
  };

  getLocation(id: string){
    return this.http.get(`${Api_Url}/api/location/${id}`,)
  }

  updateLocation(location: LocationModel){
    return this.http.put(`${Api_Url}/api/location`, location ,)

  }

  deleteLocation(id: number){
    return this.http.delete(`${Api_Url}/api/location${id}`,)
  }
}
