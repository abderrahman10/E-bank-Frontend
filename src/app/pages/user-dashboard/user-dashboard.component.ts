import { Component, OnInit, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { StatisticsService } from 'src/app/services/statistics.service';
import { lightInfoInputs } from 'src/app/shared/light-infos/light-infos.component';
import { ChartComponent,ApexAxisChartSeries,ApexChart, ApexXAxis,ApexDataLabels,ApexStroke,ApexYAxis,ApexTitleSubtitle,ApexLegend} from "ng-apexcharts";

import { series } from "./data";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  DateFromulaire!: FormGroup;
 // ContactId!: string | null;
  submitButton: boolean = true;
  id!: number;
  //@ViewChild("chart") chart: ChartComponent;

  public chartOptions: Partial<ChartOptions>;


    AccountInfo:Array<lightInfoInputs>=[];
    private accountbalance?:number;
    private HighestDeposit?:number;
    private HighestTransfert?:number;
    constructor( private activatedRoute: ActivatedRoute ,private router: Router,private StatisticsService:StatisticsService,private fb: FormBuilder){
      this.createForm();
      this.chartOptions = {
        series: [
          {
            name: "STOCK ABC",
            data: series.monthDataSeries1.prices
          }
        ],
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
  
        title: {
          text: "Fundamental Analysis of Stocks",
          align: "left"
        },
        subtitle: {
          text: "Price Movements",
          align: "left"
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: "left"
        }
      };
    }
    
  createForm() {
    this.DateFromulaire = this.fb.group({
      startDate:['',  Validators.required],
      endDate:['',  Validators.required],
 

    });

  }

  getSumByDates() {
    console.log("form update: ", this.DateFromulaire.value);
    
      this.StatisticsService.getsumbydate(1, this.DateFromulaire.value).subscribe(
        (dataSum) => {
          console.log("this is the transaction sum",dataSum)
        },
        (error) => {
          console.error('Error editing contact data:', error);
        }
      );
    


  }
  ngOnInit(): void {
  
    this.initializeAccountInfo();
 
    }
   
  
  private async initializeAccountInfo(){
    this.accountbalance=await lastValueFrom(this.StatisticsService.getAccountBalance(1)) 
    this.HighestTransfert= await lastValueFrom(this.StatisticsService.gethighestTransfert(1)) 
      this.HighestDeposit= await  lastValueFrom(this.StatisticsService.gethighestDeposit(1)) 
  this.AccountInfo=[
        {
        title:'Account Balance',
        amount:this.accountbalance,
      
        },
        {
        title:'Highest Transfer',
        amount:this.HighestTransfert,
   
        },
        {
          title:'Highest Deposit',
          amount:this.HighestDeposit,
       
        }

];

  }

  

}
