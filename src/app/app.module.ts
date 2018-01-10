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
import { FileUploaderModule } from "ng4-file-upload/file-uploader.module";
import { CategoryPipe } from './pipes/category.pipe';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { MyHttpInterceptor } from './interceptors/myhttp';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    CategoryPipe,
    OrderbyPipe,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FileUploaderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.threeBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.4)', 
        backdropBorderRadius: '4px',
        primaryColour: '#007bff', 
        secondaryColour: '#00FF00', 
        tertiaryColour: '#FF0000'
    })
  ],
  providers: [AuthService, AuthGuard, FormService, MasterDataService
    //{ 
     // provide: HTTP_INTERCEPTORS, 
     // useClass: MyHttpInterceptor, 
     // multi: true 
    //}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
