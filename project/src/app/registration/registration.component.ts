import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  fg!:FormGroup;
  constructor(private fb : FormBuilder,private service :StudentService){
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
  adduser(): void {
    if (this.fg.valid) {
      const formData = {
        id: undefined, // Optional field
      src: 'default-src', // Default value; replace with actual data if available
      alt: 'default-alt', // Default value
      name: this.fg.value.username, // Map to form field 'username'
      email: this.fg.value.email,   // Map to form field 'email'
      password: this.fg.value.password, // Map to form field 'password'
      description: 'default-description', // Default value
      description1: 'default-description1', // Default value
      username: this.fg.value.username, // Map to form field 'username'
      };
  
      this.service.addUser(formData).subscribe({
        next: (response) => {
          alert('User added successfully!');
          console.log('Response:', response); // Debugging response
          this.fg.reset(); // Reset form after successful submission
        },
        error: (err) => {
          console.error('Error while adding user:', err);
          alert('Failed to add user. Please try again.');
        },
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
  
}
