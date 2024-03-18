import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent {
 to_email: string = '';
  message: string = '';
  to_name:string='';
  randomCode: number = 0; 
  constructor(private router: Router,private http: HttpClient) {}
  generateRandomCode() {
    this.randomCode = Math.floor(10000000 + Math.random() * 90000000); // Generate a random 8-digit integer code
  }
  

  sendEmail() {
  
    this.generateRandomCode();
  
    
    const emailParams = {
      to_email: this.to_email,
      from_name: "aditya sohagpure",
      to_name:this.to_name ,
      message: this.message,
      randomCode: this.randomCode.toString(),
    };
    this.http.post("http://localhost:9992/invitaion/send", emailParams).subscribe(  (resultData: any) => {
  console.log(resultData);

  if (resultData.status) 
  {
    emailjs.init('pdsduYzU7-C6zNxy6');
    emailjs.send("service_0y3jhaz","template_4sposbk", emailParams)
      .then((response) => {
        console.log('Email sent successfully!', response);
        this.router.navigateByUrl('main')
        // You can add further logic here, like displaying a success message to the user
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // You can add further error handling here, like displaying an error message to the user
      });
  

  } 
  else
   {
    alert("Incorrect Email or Password");
    console.log("Errror login");
  }
});
   
  }
}
