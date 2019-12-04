import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Outfit } from '../models/Outfit';


const Api_Url= 'https://purplerainapi2.azurewebsites.net';
const Api_Url2 = 'http://api.openweathermap.org/data/2.5/weather?';
const APPID = "84e63bc040e0079a4cc79dfff77e9389";

@Injectable({
  providedIn: 'root'
})
export class OutfitsService {

  constructor(private http: HttpClient) { }

  getOutfits(id){
    return this.http.get(`${Api_Url}/api/Outfit/${id}`,{headers: this.getHeaders()})
  }
  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createOutfits(id:string , outfit: Outfit){
    return this.http.post(`${Api_Url}/api/Outfit?locationid=${id}`, outfit,{headers: this.getHeaders()});
  }

  updateOutfit(outfit:Outfit,id: number){
    return this.http.put(`${Api_Url}/api/Outfit?outfitid=${id}`,outfit,{headers: this.getHeaders()});
  }

  deleteOutfit(id: number){
    return this.http.delete(`${Api_Url}api/Outfit/${id}`,{headers: this.getHeaders()});

  }

  getEnumOutfit(temp: number, locationID: number) {
    return this.http.get(`${Api_Url}/api/Outfit?${temp}&locationID=${locationID}`,{headers: this.getHeaders()}); //does this need to recieve a zipcode instead??

  }
  getTempOpen(zipCode:number){
    return this.http.get(`${Api_Url2}zip=${zipCode}&units=imperial&APPID=${APPID}`,{headers: this.getHeaders()});

}
}
