import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

const routes:Routes=[
	{ path: '', redirectTo: 'login',pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: '**', redirectTo: '/' },
	{ path:'**', component: PagenotfoundComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
export const routingComponent=[ 
	LoginComponent, 
	HomeComponent,
	PagenotfoundComponent
]
