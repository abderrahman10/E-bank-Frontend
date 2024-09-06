import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginI, registerI } from '../auth/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }
  private baseUrl = 'http://localhost:8080/auth';




  login(input : loginI): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}/authenticate`,  input);
  }

  register(input: registerI): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}/register`, input );
  }
}
