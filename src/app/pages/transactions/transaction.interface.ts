export interface transactionDTO {
   //id:number;
    amount?:number;
    type?:'TRANSFERT'|'DEPOSIT';
    destinationIban?:string;
    transactionDate?:string;
    userId?:number;
    
   }