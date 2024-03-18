import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: String="";
   
    flat_no:String="";
  email:String="";
  phone:String="";
  password:String="";
  
  constructor (private http : HttpClient){

  }
  ngOnInit():void{}
  register(){
    let bodydata={
      "username":this.username,
   
      "flat_no":this.flat_no,
    "email":this.email,
    "phone":this.phone,
    "password":this.password,
    };
    this.http.post("http://localhost:9992/user/create", bodydata).subscribe({
      
      error: (error: any) => {
        console.error('An error occurred:', error);
        alert("An error occurred:"+error);
      },
      complete: () => {
       
        console.log('HTTP POST request completed successfully.');
        alert("HTTP POST request completed successfully.");
      }
    });
  }
  save(){
    this.register();
  }
} 
