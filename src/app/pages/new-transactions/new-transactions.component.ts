import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { StatisticsService } from 'src/app/services/statistics.service';
import { transactionService } from 'src/app/services/trasanction.service';
import { transactionDTO } from '../transactions/transaction.interface';
import { ContactDto } from '../new-contact/newContact.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-transactions',
  templateUrl: './new-transactions.component.html',
  styleUrls: ['./new-transactions.component.scss']
})
export class NewTransactionsComponent implements OnInit {
  submitButton!:boolean;
  selectedTransactionType: any;
  transaction: transactionDTO = {};
 contactdto:Array<ContactDto>=[];
 AccountBalance?: number; id?:number
  constructor(
    private statisticsService:StatisticsService,
    private contactservice:ContactService,
    private transactionservice:transactionService,
    private router:Router,
    private fb: FormBuilder
 ){}
  ngOnInit(): void {
    this.getAllContacts();
    this.getAccountBalance(1);
  }
      


  

  transactionTypes = [
    { label: 'Deposit',value: 'DEPOSIT'  },
    { label: 'Transfer', value: 'TRANSFERT'   }
  ];
  contacts: any[] = [];
 


  getAllContacts() {
    this.contactservice.findAllContacts().subscribe(
      (res) => {  
        this.contactdto = res;

        // Dynamically populate the contacts array
        this.contacts = this.contactdto.map(contact => {
          return {
            label: contact.firstname + ' ' + contact.lastname,
            value: contact.iban
          };
        });

        console.log("all contact", res);
      },
      (error) => {
        console.error('Error loading all contact data:', error);
      }
    );
  }


  getAccountBalance(id:number) {
 
    this.statisticsService.getAccountBalance(id).subscribe(
      (res) => {
       this.AccountBalance = res;
        console.log(" Account Balance of the user with id ",id)
      },
      (error) => {
        console.error('Error loading contact data:', error);
      }
    );

} 

async cancel(){
  await this.router.navigate(['user/transactions'])
}

saveTransaction(){
    
      this.transactionservice.addNewtransaction(this.transaction).subscribe( (res) => {
        this.router.navigate(['/user/transactions']);
      },
      (error) => {
        console.error('Error creation new transaction:', error);
      });
    
  
}
  
}
