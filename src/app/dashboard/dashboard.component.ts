import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  records:Employee[]=[];
  constructor(private service:ServiceService){}
  ngOnInit():void{
    this.getall();
  }
  getall():void{
    this.service.getall().subscribe(data=>this.records=data);
  }
}

