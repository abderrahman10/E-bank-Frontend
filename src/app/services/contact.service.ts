import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContactDto } from '../pages/new-contact/newContact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:8080';
  private ContactUpdated = new BehaviorSubject<any>(null);

  constructor(private httpclient:HttpClient) { }


  findAllContacts(): Observable<any> {
    
    return this.httpclient.get<any>(`${this.baseUrl}/Contacts/`);
  }

  findAllContactsByUserId(id:number): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}/Contacts/users/${id}`);
  }
  addNewContact(input: ContactDto):Observable<any>{
    return this.httpclient.post<any>(`${this.baseUrl}/Contacts/`,input);
  }




  getContactById(id: string): Observable<any> {
 
    return this.httpclient.get(`${this.baseUrl}/Contacts/${id}`);
  }

   updateContact(id:string,data:any):Observable<any>{
     return this.httpclient.put(`${this.baseUrl}/Contacts/update/${id}`,data);
   }
   //renvoie un observable créé à partir de ContactUpdated, et tout composant ou service qui s'abonne à cet
   // observable recevra des mises à jour chaque fois qu'une nouvelle valeur est émise par ContactUpdated
  getUpdate(): Observable<any> {
    return this.ContactUpdated.asObservable();
  }
  //Elle est responsable de l'émission d'une nouvelle valeur (dans ce cas, un message sous forme de chaîne de caractères) 
  //à tous les observateurs qui se sont abonnés à l'observable associé à ContactUpdated

  sendUpdate(message: string) {
    this.ContactUpdated.next(message);
  }
  
//   La fonction sendUpdate(message: string) est responsable de l'émission (envoi) d'une mise à jour,
//    représentée par le message spécifié, à tous les observateurs qui se sont abonnés à l'observable ContactUpdated.

// La fonction getUpdate(): Observable<any> renvoie l'observable associé à ContactUpdated.
//  Tout composant ou service qui s'abonne à cet observable recevra les mises à jour émises par sendUpdate.

DeleteContact(id:string){
  return this.httpclient.delete(`${this.baseUrl}/Contacts/${id}`);

}
  
}
