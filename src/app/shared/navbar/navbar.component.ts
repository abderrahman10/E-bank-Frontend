import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @Input() isAdmin=false;
    role='user';
    constructor(private router:Router){
    

    }
  items: MenuItem[] | undefined;
  Adminitems: MenuItem[] | undefined;
  ngOnInit() {

  if(this.isAdmin){
            this.role='admin';
        }

    this.items = [
        {
            label: 'dashboard',
            icon: 'pi pi-fw pi-file',
            // command: () => {
            //     //this.router.navigate(['../user/dashboard']);
                
            // },
           routerLink: '../'+this.role+'/dashboard',
           visible:!this.isAdmin
        },
        {
            label: 'transactions',
            icon: 'pi pi-fw pi-pencil',
            visible:!this.isAdmin,
            routerLink: '../'+this.role+'/transactions',
            

        },
        {
            label: 'contact list',
            icon: 'pi pi-fw pi-user',
            visible:!this.isAdmin,
            routerLink:'../'+this.role+'/contacts'
            

            
        },
        {
            label: 'customers',
            icon: 'pi pi-fw pi-user',
            visible:this.isAdmin,
            routerLink:'../admin/customers'
            
        
        },
        {
            label: ' Profile',
            icon: 'pi pi-fw pi-user',
           routerLink:'../'+this.role+'/profile'
        },
       
        {
            label: 'logout',
            icon: 'pi pi-fw pi-power-off',
            routerLink:'/login'
        }
    ];
}
}
