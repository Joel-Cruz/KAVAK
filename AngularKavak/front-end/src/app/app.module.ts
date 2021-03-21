import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { HeaderComponent } from './components/header/header.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';
import { BuyCarComponent } from './components/buy-car/buy-car.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './security/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HeaderComponent,
    ListCarsComponent,
    LandingPageComponent,
    SellCarComponent,
    BuyCarComponent,
    FilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
