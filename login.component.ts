import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
//import { PasswordValidator } from '../password.validator';
import { FirebaseService } from '../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService} from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  isSignedIn = false
  accountErrorMessage: string;
  constructor(public firebaseService : FirebaseService,
              private route: ActivatedRoute,
               private router: Router,
               private alertService: AlertService) { 
    
  }
  login= new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ])
  });
 

  ngOnInit() {
    this.firebaseService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    .then(() => {
      if(this.firebaseService.isLoggedIn){
        this.isSignedIn = true
        this.router.navigate(['international']);
        //this.router.navigate([this.returnUrl]);
      }
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/wrong-password":
        case "auth/user-not-found":
        {
           this.accountErrorMessage = "Invalid email address or password.";
           break;
        }
           default:
        {
            this.accountErrorMessage = "Unexpected Error";
            break;
        }
   }
});
    
  }
    

  handleLogout(){
    this.isSignedIn = false

  }
  

}
