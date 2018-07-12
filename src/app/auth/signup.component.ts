import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { trigger, state, transition, style, animate } from '@angular/animations';


//Responsible for cross validation in nested form group!
function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {

  let passwordControl = c.get('password');
  let confirmControl = c.get('rePassword');

  if (passwordControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (passwordControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true };
}


@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [

    trigger('inputEntry', [
      state('in',style({transform:'translateY(0)',opacity:1})),
      transition('void => *',[
        style({ transform: 'translateY(-10%)', opacity: 0 }),
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class SignupComponent implements OnInit {
  //POST data sample model
  signupData = {
    name: {}
  };

  //DOM Error renderer
  emailMessage: String;
  firstnameMessage: String;
  lastnameMessage: String;
  usernameMessage: String;
  passwordMessage: String;
  repasswordMessage: String;
  // linkedinurlMessage: String;

  //Root Form Group
  signupForm: FormGroup;

  //ValidationError Messages Consider putting it into an angular service!
  private validationMessagesEmail = {
    required: "Email field is required!",
    pattern: "Please enter a valid email address!"
  }

  private validationMessagesFirstName = {
    required: "First name cannot be empty"
  }

  private validationMessagesLastName = {
    required: "Last name cannot be empty"
  }

  private validationMessagesUsername = {
    required: "Username cannot be empty",
    minlength: "Too short!"
  }

  private validationMessagesPassword = {
    required: "Password cannot be empty",
    minlength: "Too short!"
  }

  private validationMessagesRePassword = {
    required: "Enter the password again here!",
    match: "Passwords do not match!"
  }

  private validationMessagesLinkedinUrl = {
    required: "Please mention your linkedin url!",
    pattern: "You have entered an incorrect url! (eg: https://www.linkedin.com/xyz)"
  }


  constructor(private _route: Router, private _authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {

    this.signupForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nameGroup: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]]
      }),
      userName: ['', [Validators.required, Validators.minLength(3)]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        rePassword: ['', [Validators.required]]
      }, { validator: passwordMatcher }),

      role: 'student',
      linkedinUrl: ''
    })

    const emailControl = this.signupForm.get('emailId');
    const firstNameControl = this.signupForm.get('nameGroup.firstName');
    const lastNameControl = this.signupForm.get('nameGroup.lastName');
    const userNameControl = this.signupForm.get('userName');
    const passwordControl = this.signupForm.get('passwordGroup.password');
    const rePasswordControl = this.signupForm.get('passwordGroup.rePassword');
    const linkedinUrlControl = this.signupForm.get('linkedinUrl');
    const role = this.signupForm.get('role');


    emailControl.valueChanges.subscribe(value => {
      this.setEmailMessage(emailControl);
    });
    firstNameControl.valueChanges.subscribe(value => {
      this.setFirstNameMessage(firstNameControl);
    });
    lastNameControl.valueChanges.subscribe(value => {
      this.setLastNameMessage(lastNameControl);
    });
    userNameControl.valueChanges.subscribe(value => {
      this.setUserNameMessage(userNameControl);
    });
    passwordControl.valueChanges.subscribe(value => {
      this.setPasswordMessage(passwordControl);
    });
    rePasswordControl.valueChanges.subscribe(value => {
      this.setRePasswordMessage(rePasswordControl);
    });
    linkedinUrlControl.valueChanges.subscribe(value => {
      this.setLinkedinUrlMessage(linkedinUrlControl)
    });
    role.valueChanges.subscribe(value => {
      this.setFormValidationUpdate(value);
    })

  }


  setEmailMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key =>
        this.validationMessagesEmail[key]).join(' ')
    }
  }
  setFirstNameMessage(c: AbstractControl): void {
    this.firstnameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.firstnameMessage = Object.keys(c.errors).map(key =>
        this.validationMessagesFirstName[key]).join(' ')
    }
  }
  setLastNameMessage(c: AbstractControl): void {
    this.lastnameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.lastnameMessage = Object.keys(c.errors).map(key =>
        this.validationMessagesLastName[key]).join(' ')
    }
  }
  setUserNameMessage(c: AbstractControl): void {
    this.usernameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.usernameMessage = Object.keys(c.errors).map(key =>
        this.validationMessagesUsername[key]).join(' ')
    }
  }
  setPasswordMessage(c: AbstractControl): void {
    this.passwordMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.passwordMessage = Object.keys(c.errors).map(key =>
        this.validationMessagesPassword[key]).join(' ')
    }
  }
  setRePasswordMessage(c: AbstractControl): void {
    this.repasswordMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.repasswordMessage = Object.keys(c.errors).map(key =>
        this.validationMessagesRePassword[key]).join(' ')
    }
  }
  setLinkedinUrlMessage(c: AbstractControl): void {
    this.linkedinurlMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.linkedinurlMessage = Object.keys(c.errors).map(key =>
        this.validationMessagesLinkedinUrl[key]).join(' ')
    }
  }

  setFormValidationUpdate(value) {
    const linkedinUrlControl = this.signupForm.get('linkedinUrl');
    if (value === 'mentor') {
      linkedinUrlControl.setValidators([Validators.required, Validators.pattern('https://www.linkedin.com/[a-z0-9-/]+')]);
    } else {
      linkedinUrlControl.clearValidators();
    }
    linkedinUrlControl.updateValueAndValidity();
  }



  async signup(data) {
    Object.keys(data).map(key=>{
      data[key.toLocaleLowerCase()]
    })
    if (this.signupForm.get('role').value == 'student') {
      await this._authService.registerStudent(this.signupData, () => {
        this._route.navigateByUrl('/student/dashboard');
      });

      
    }
    else if (this.signupForm.get('role').value == 'mentor') {
      this.signupData.linkedinUrl = this.linkedinUrl;
      await this._authService.registerMentor(this.signupData, () => {
        this._route.navigateByUrl('/mentor/dashboard');
      });

    }
  }
}
