import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor() { }

  onSwitchMode(){
    this.isLoginMode= !this.isLoginMode
  }
  ngOnInit() {
  }

  onSubmit(form: NgForm){

    if (!form.valid) {
      return;
    }
    console.log(form)
    const email = form.value.email;
    const password = form.value.password;

  }

}
