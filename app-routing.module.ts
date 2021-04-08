import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import {BackpartComponent} from './backpart/backpart.component';
//import {HeaderComponent } from './header/header.component';
import { InternationalComponent } from './international/international.component';
import { TrendingComponent} from './trending/trending.component';
import { RegionalComponent } from './regional/regional.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component:HomeComponent  },
  { path: 'login', component: LoginComponent },
{ path: 'register', component: SignupComponent },
//{path:'backpart',component:BackpartComponent},
{ path: 'international', component: InternationalComponent},
{ path: 'trending', component: TrendingComponent},
{ path: 'regional', component: RegionalComponent},
{ path: 'welcome', component: WelcomeComponent}
// { path: 'home', component: HomeComponent },

// otherwise redirect to home
//{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
