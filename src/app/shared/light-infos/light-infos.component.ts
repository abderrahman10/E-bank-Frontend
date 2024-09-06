import { Component, Input } from '@angular/core';
export interface lightInfoInputs{
  title?:string;
  amount?:number;
}
@Component({
  selector: 'app-light-infos',
  templateUrl: './light-infos.component.html',
  styleUrls: ['./light-infos.component.scss']
})
export class LightInfosComponent {
@Input() lightInfo!:lightInfoInputs;

}
