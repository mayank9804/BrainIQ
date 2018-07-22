import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { AuthService } from '../core/auth.service';
import { CoreService } from '../core/core.service';
import { debounceTime } from 'rxjs/operators';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [

    trigger('inputEntry', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(-20%)', opacity: 0 }),
        animate('500ms ease-out')
      ])
    ])
  ]

})
export class LoginComponent implements OnInit {
  // Login FormGroup
  loginForm: FormGroup;
  userMessage: string;
  passwordMessage: string;
  loading: boolean = false;
  loginData = {};
  errDisplay: any;


  errMessage: string;

  constructor(private _route: Router, private _authService: AuthService, private _coreService: CoreService, private fb: FormBuilder) { }


  ngOnInit() {
    this.loginForm = this.fb.group({

      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]

    });

    this.loginForm.get("username").valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value =>
      this.userNotify(this.loginForm.get("username")));

    this.loginForm.get("password").valueChanges.subscribe(value =>
      this.passwordNotify(this.loginForm.get("password")));
  }

  private validationMessagesUsername = {
    required: "Username cannot be empty",
    minlength: "Too short!"
  }
  private validationMessagesPassword = {
    required: "Please input your top secret password!"
  }
  userNotify(c: AbstractControl): void {
    //Clear the previous messages if any
    this.userMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.userMessage = Object.keys(c.errors).map(key =>
        this.validationMessagesUsername[key]).join('');
    }

  }

  passwordNotify(c: AbstractControl): void {
    this.passwordMessage = '';//Clear the previous messages if any
    if ((c.touched || c.dirty) && c.errors) {
      this.passwordMessage = Object.keys(c.errors).map(key =>
        this.validationMessagesPassword[key]).join('');
    }
  }


  login(data) {
    Object.keys(data).map(key => {
      this.loginData[key] = data[key];
    });

    this.loading = true;

    this._authService.login(this.loginData).subscribe(
      res => {
        this.loading = false;
        if (res.message.toLocaleLowerCase() == 'authorized user') {
          if (this._authService.whichRole().toLocaleLowerCase() == 'isstudent') {
            this._route.navigate(['/student/dashboard']);
          }
          else if (this._authService.whichRole().toLocaleLowerCase() == 'ismentor') {
            this._route.navigate(['/mentor/dashboard']);
          }
          else if (this._authService.whichRole().toLocaleLowerCase() == 'isadmin') {
            this._route.navigate(['/admin']);
          }
        }
      },
      err => {
        this.loading=false;
        this.errMessage = (err.status == 401) ? err.error.message : "Something is quite not right!";
      });
  }
}

