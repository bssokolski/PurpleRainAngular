import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Outfit } from '../models/Outfit';

const Api_Url= 'https://localhost:44368/';

@Injectable({
  providedIn: 'root'
})
export class OutfitsService {

  constructor(private http: HttpClient) { }

  getOutfits(id){
    return this.http.get(`${Api_Url}/api/Outfit/${id}`,)
  }

  createOutfits(outfit: Outfit){
    return this.http.post(`${Api_Url}/api/Outfit`, outfit,)
  }

  updateOutfit(outfit:Outfit){
    return this.http.put(`${Api_Url}/api/Outfit`,outfit,)
  }

  deleteOutfit(id: number){
    return this.http.delete(`${Api_Url}/outfit/${id}`,)

  }

}
