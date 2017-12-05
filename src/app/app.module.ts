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
import { AuthGuard } from './auth.guard';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,   
  ],
  imports: [
    BrowserModule,
    RoutingModule,
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
  providers: [AuthService, AuthGuard, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
