import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  baseUrl="https://db.ezobooks.in/kappa/image/task"

  constructor(private http:HttpClient) { }

  fetchApi(){
    return this.http.get(`${this.baseUrl}`)
  }
}
