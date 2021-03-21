import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyCarComponent } from './components/buy-car/buy-car.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './security/auth.guards';

const routes: Routes = [
  {path: '', component: LandingPageComponent , canActivate : [AuthGuard]},
  {path: 'vender-mi-auto', component: SellCarComponent, canActivate : [AuthGuard]},
  {path: 'comprar-un-auto', component: BuyCarComponent, canActivate : [AuthGuard]},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
