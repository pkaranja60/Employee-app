import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/AppState';
import { hide, show } from 'src/store/loading/loading.actions';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  forgotPassword(){
    this.store.dispatch(show());

    setTimeout(() =>{
      this.store.dispatch(hide());
    }, 2000);
  }

  login(){
    this.store.dispatch(show());

    setTimeout(() =>{
      this.store.dispatch(hide());
      this.router.navigate(['/home']);
    }, 2500);
  }

  signup() {
    this.router.navigate(['signup']);
  }

}
