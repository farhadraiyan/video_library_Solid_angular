import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username="farhad";
  password="1234";

  validate=false;

  constructor() { }

  ngOnInit() {
  }

  loginValidate(form:NgForm)
  {
    if(this.username!=form.value.username || this.password!=form.value.password)
    {
      this.validate=true;
    }
    else{
      this.validate=false;
    }


  }

}
