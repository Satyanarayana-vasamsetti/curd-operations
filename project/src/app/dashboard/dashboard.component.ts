import { Component } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  records:Student[]=[];
  constructor(private service:StudentService){}
  ngOnInit():void{
    this.getall();
  }
  getall():void{
    this.service.getAll().subscribe(data=>this.records=data);
  }
}
