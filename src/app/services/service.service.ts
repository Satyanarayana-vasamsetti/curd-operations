import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseurl = "https://sheetdb.io/api/v1/m6k1k0y2ys35f";
  constructor(private http:HttpClient) { 
  }
  getall():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}`)
  }
  adduser(record:Employee):Observable<any[]>{
    return this.http.post<any[]>(`${this.baseurl}`,{data:record})
  }
  getbyemail(email:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/search-by-email?=${email}`)
  }
  updateuser(id:number,record:Employee):Observable<any[]>{
    return this.http.put<any[]>(`${this.baseurl}/search-by-id?=${id}`,{data:record})
  }
  deleteuser(id:number):Observable<any[]>{
    return this.http.delete<any[]>(`${this.baseurl}/search-by-id?=${id}`)
  }
}
