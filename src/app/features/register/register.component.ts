import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { User } from 'src/app/core/model/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;
  user: User = {
    username: null,
    password: null
  }
  show: boolean;

  constructor(fb: FormBuilder, private registerService: RegisterService, private router:Router) {
    this.registerForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  eseguiRegistrazione() {
    this.user.username=this.registerForm.get('username').value;
    this.user.password=this.registerForm.get('password').value;
    this.registerService.registrazione(this.user);
    this.router.navigateByUrl('login');
  }

  password() {
    this.show = !this.show;
  }


}
