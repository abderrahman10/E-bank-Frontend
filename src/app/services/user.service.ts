import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = 'http://localhost:8080';

  constructor(private httpclient:HttpClient) { }
 
 
  findAllUsers(): Observable<any> {
    
    return this.httpclient.get<any>(`${this.baseUrl}/users/`);
  }

  findUserByUserId(id:number): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}/users/${id}`);
  }


  ValidateUserById(id:number): Observable<any> {
    return this.httpclient.patch<any>(`${this.baseUrl}/users/validate/${id}`,null);
  }
  InValidateUserById(id:number): Observable<any> {
    return this.httpclient.patch<any>(`${this.baseUrl}/users/invalidate/${id}`,null);
  }
  Delete(id:number): Observable<any> {
    return this.httpclient.delete<any>(`${this.baseUrl}/users/${id}`);
  }
}
