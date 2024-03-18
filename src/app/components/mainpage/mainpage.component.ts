import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  num_of_visitor:string='455';
  constructor(private router: Router,private http: HttpClient) {}

  send() {
this.router.navigateByUrl("invitation")
  }




}
