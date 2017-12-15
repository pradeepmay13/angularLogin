import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
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


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,   
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FileUploaderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
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
  providers: [AuthService, AuthGuard, FormService, MasterDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
