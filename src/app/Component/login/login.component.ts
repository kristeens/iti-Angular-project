import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ProfilePageComponent } from '../profile-page/profile-page.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,
    ProductPageComponent,
    ProfilePageComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() username: string = '';
  @Output() email: string = '';
  //@Output() userLoggedIn = new EventEmitter<{ username: string; email: string }>();


  onSubmit() {
    if (this.username && this.email) {
      window.location.href = '/profile';
    }
    this.submitted = true;
    console.log('User Info:', this.username);
  }

submitted = false;

}