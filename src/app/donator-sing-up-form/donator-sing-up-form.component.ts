import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-donator-sing-up-form',
  templateUrl: './donator-sing-up-form.component.html',
  styleUrls: ['./donator-sing-up-form.component.css']
})
export class DonatorSingUpFormComponent implements OnInit {
  fullname: string;
  phonenumber: BigInteger;
  email:string;
  username:string;
  password:string;
  conpassword:string;
  gender:string;
  dob:Date;
  bloodgroup:string;
  height:number;
  weight:number;
  hvdisease:boolean;
  diseases:string;
  agree:boolean;





  constructor() { }

  ngOnInit(): void {
  }
  submitForm() {
    //grabing all the fields and their values
    const message = "My name is "+this.fullname;
    alert(message);
    
  }

}

