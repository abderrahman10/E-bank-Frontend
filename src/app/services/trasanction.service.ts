import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { transactionDTO } from '../pages/transactions/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class transactionService {
  private baseUrl = 'http://localhost:8080';
  constructor(private httpclient:HttpClient) { }


  findAllTransactions(): Observable<any> {
    
    return this.httpclient.get<any>(this.baseUrl + '/transactions/');
  }

  findAllTransactionsByUserId(id:number): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}/transactions/users/${id}`);
  }
  addNewtransaction(input: transactionDTO):Observable<any>{
    return this.httpclient.post<any>(`${this.baseUrl}/transactions/`,input);
  }


}






