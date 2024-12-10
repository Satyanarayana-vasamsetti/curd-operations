import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  fg!:FormGroup;
  constructor(private fb : FormBuilder){
  this.fg=this.fb.group({
    username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.email,Validators.pattern('')]],
    password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('')]],
    
  })
  }
  onSubmit(){
    if(this.fg.valid){
      alert('Successfully added');
    }
    else{
      alert('Something went wrong');
    }
  }
}
