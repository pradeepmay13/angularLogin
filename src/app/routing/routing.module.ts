import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';
import { PrimeNgComponent } from '../prime-ng/prime-ng.component';
import { UploaderComponent } from '../uploader/uploader.component';
import { ListComponent } from '../list/list.component';
import { InterceptexampleComponent } from '../interceptexample/interceptexample.component';
import { YaTableComponent } from '../ya-table/ya-table.component';


const routes:Routes=[
	{ path: '', redirectTo: 'login',pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'fileUpload', component: FileuploadComponent, canActivate: [AuthGuard] },
  { path: 'dataList', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'primeNg', component: PrimeNgComponent, canActivate: [AuthGuard] },
  { path: 'uploader', component: UploaderComponent, canActivate: [AuthGuard] },
  { path: 'yaTable', component: YaTableComponent, canActivate: [AuthGuard] },
  { path: 'yaTable/:id', component: YaTableComponent, canActivate: [AuthGuard] },
  { path: 'yaTable/:id/:subId', component: YaTableComponent, canActivate: [AuthGuard] },
  { path: 'InterceptExample', component: InterceptexampleComponent, canActivate: [AuthGuard] },
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
	PagenotfoundComponent,
  FileuploadComponent,
  PrimeNgComponent,
  UploaderComponent,
  ListComponent,
  InterceptexampleComponent,
  YaTableComponent
]
