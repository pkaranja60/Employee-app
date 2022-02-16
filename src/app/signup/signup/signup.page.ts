import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupPageForm } from './signup.page.form';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new SignupPageForm(this.formBuilder).createForm();
  }

  signup() {
    this.router.navigate(['login']);
  }

  login() {
    this.router.navigate(['login']);
  }

}
