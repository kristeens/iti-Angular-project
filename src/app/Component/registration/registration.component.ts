import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,

  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  gender: string = '';
  file: File | null = null;

  onSubmit() {
    if (this.username && this.password && this.email && this.gender) {
      alert(`Username: ${this.username}\nEmail: ${this.email}\nGender: ${this.gender}`);
    }
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onUserLogin(username: string, email: string) {
    this.username = username;
    this.email = email;
  }

}
