import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import {HttpClient} from '@angular/common/http'
import { Token } from '../models/Token'

const Api_Url= 'https://localhost:44368/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(regUSerData:RegisterUser){
this.http.post(`${Api_Url}/api/account/Register`, regUSerData)
  }
  login(loginInfo){
    const authString =
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${Api_Url}/token`,authString).subscribe((token:Token)=>{
      localStorage.setItem('id_token',token.access_token);
    });
  }s
}
