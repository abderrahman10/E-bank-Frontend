import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DateDto } from '../pages/user-dashboard/Date.interface';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private baseUrl = 'http://localhost:8080';

  constructor(private httpclient:HttpClient) { }


  
  getAccountBalance(id: number): Observable<any> {
 
    return this.httpclient.get(`${this.baseUrl}/statistics/account-balance/${id}`);
  }
  gethighestTransfert(id: number): Observable<any> {
 
    return this.httpclient.get(`${this.baseUrl}/statistics/highest-transfert/${id}`);
  }
  gethighestDeposit(id: number): Observable<any> {
 
    return this.httpclient.get(`${this.baseUrl}/statistics/highest-deposit/${id}`);
  }

  getsumbydate(id:number,input: DateDto):Observable<any>{
    return this.httpclient.post<any>(`${this.baseUrl}/statistics/sum-by-date/${id}`,input);
  }


}
