import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService} from '../services/alert.service';
import { FirebaseService } from '../services/firebase.service';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { CustomValidators } from '../custom-validators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  model: any = {};
  loading = false;
  isSignedIn = false
  loginForm: FormGroup;
  public frmSignup: FormGroup;
constructor(private router: Router,
  private alertService: AlertService,
  public firebaseService : FirebaseService,
  private fb: FormBuilder) {
    this.frmSignup = this.createSignupForm();
  }
  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true
      this.alertService.success('Registration successful', true);
      this.router.navigate(['login']);
    }
    
  }
  handleLogout(){
    this.isSignedIn = false

  }
}
