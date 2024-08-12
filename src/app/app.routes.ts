import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductPageComponent } from './Component/product-page/product-page.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { RegistrationComponent } from './Component/registration/registration.component';

export const routes: Routes = [  { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductPageComponent, canActivate: [] },
    { path: 'profile', component: ProfilePageComponent, canActivate: [] },
];
