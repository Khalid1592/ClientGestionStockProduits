import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  credentials =  {
        username: '',
        password: ''
  };

  constructor(private fb: FormBuilder,
              private appServivce: AppService,
              private router: Router){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(3)]],
      password : ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  logIn(){
    this.appServivce.authenticate(this.credentials, ()=> {
      this.router.navigateByUrl('/home/(contentOutlet:produit)');
    });
  }
}
