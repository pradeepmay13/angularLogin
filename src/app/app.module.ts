import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule  }    from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { routingComponent } from './routing/routing.module';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { FormService } from './services/form.service';
import { MasterDataService } from './services/master-data.service';
import { AuthGuard } from './auth.guard';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
//import { FileUploaderModule } from "ng4-file-upload/file-uploader.module";
import { CategoryPipe } from './pipes/category.pipe';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GithubAuthInterceptor } from './interceptors/githubauth.interceptor';
import { SharedService } from './services/shared.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination'; 


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    CategoryPipe,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    //FileUploaderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    Ng2SearchPipeModule, //including into imports
    Ng2OrderModule, // importing the sorting package here
    NgxPaginationModule,
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.threeBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.4)', 
        backdropBorderRadius: '4px',
        primaryColour: '#007bff', 
        secondaryColour: '#00FF00', 
        tertiaryColour: '#FF0000'
    })
  ],
  providers: [AuthService, AuthGuard, FormService, MasterDataService, SharedService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GithubAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
