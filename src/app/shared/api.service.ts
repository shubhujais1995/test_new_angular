import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getSingle<T>(id: number) {
    return this.httpClient.get<T>(`https://api.jsonapi.co/rest/v1/user/${id}`);
  }
  
  post<T>(item: any) {
    item = { 
      "email": "abc@gmail.com",
      "password":"password"
    }
    return this.httpClient.post<T>(`https://api.jsonapi.co/rest/v1/user/login`, item);
  }

  put<T>(id: number, item: any) {
    item = {"user": "data"}
    return this.httpClient.put<T>(`https://api.jsonapi.co/rest/v1/user/create`, item);
  }

  delete(id: number) {
    return this.httpClient.delete(`https://api.jsonapi.co/rest/v1/user/${id}`);
  }
}
