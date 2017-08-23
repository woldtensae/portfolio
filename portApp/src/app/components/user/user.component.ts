import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  lastname:string;
  age:number;
  address:Address;
  email:string;
  hobbies:string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Abebe';
    this.lastname = 'Kebde';
    this.age = 36;
    this.email = 'test@gmail.com';
    this.address = {
      city: 'Alameda',
      state: 'California',
      zip: '945'
    }
  }
}

interface Address{
  city:string,
  state:string,
  zip:string
}