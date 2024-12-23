import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseurl = "https://sheetdb.io/api/v1/26un9pc321bow";
  constructor(private http:HttpClient) { }

  getAll():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}`);
  }
  getByEmail(email:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/search?email=${email}`);
  }
  addUser(records:Student):Observable<any>{
    return this.http.post<any>(this.baseurl,{data:records});
  }
  deleteUser(id:number):Observable<any[]>{
    return this.http.delete<any[]>(`${this.baseurl}/id/${id}`)
  }
  updateUser(id:number,record:Student):Observable<any[]>{
    return this.http.put<any[]>(`${this.baseurl}/id/${id}`,{data:record})
  }
}
