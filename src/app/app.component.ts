import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductPageComponent } from './Component/product-page/product-page.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ProductPageComponent,
    ProfilePageComponent,
    RegistrationComponent,
    RouterModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: string = '';
  email: string = '';

  onUserLogin(username: string, email: string) {
    this.username = username;
    this.email = email;
  }
  title = 'store-website';

}
