import { Component, OnInit } from '@angular/core';
import {   ColDef, GridOptions, IMultiFilterParams, ITextFilterParams } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { transactionService } from 'src/app/services/trasanction.service';
import { transactionDTO } from './transaction.interface';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  private unSub$ = new Subject<void>();
  //transaction:Array<transactionDTO>=[];
  constructor(private transactionService: transactionService){}
  ngOnInit(): void {
    this.getAllTrasansaction();
   // this.getTrasansactionByUserId(1);
  }
  gridOptions: GridOptions = {
    columnDefs : [
      { field: 'transactionDate',width: 360 ,    },
      { field: 'amount',width: 360,    },
      { field: 'destinationIban' ,width: 360,  },
      { field: 'type',width: 400 },
   

      // { field: 'Actions' ,width: 120,  cellRenderer: OfferListActionComponent,  },
     // { field: 'Actions' ,width: 120,  },

  ],
  defaultColDef: {
    editable: true,
    minWidth: 100,
    flex: 1,
    resizable: true,

  }

}
  rowData = [];



  getAllTrasansaction() {
   
      this.transactionService.findAllTransactions().subscribe(
        (res) => {
         this.rowData = res;
          console.log("all transaction",res)
        },
        (error) => {
          console.error('Error loading transaction data:', error);
        }
      );
    
  }

  getTrasansactionByUserId(id:number) {
   
    this.transactionService.findAllTransactionsByUserId(1).subscribe(
      (res) => {
       this.rowData = res;
        console.log(" transaction of the user with id ",res)
      },
      (error) => {
        console.error('Error loading transaction data:', error);
      }
    );
  
}
  ngOnDestroy(): void {
    this.unSub$.unsubscribe();
  }












}
