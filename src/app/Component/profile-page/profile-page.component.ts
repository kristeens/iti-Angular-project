import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  /*user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    gender: 'Male',
    image: 'https://via.placeholder.com/150',
  };*/
  @Input() username: string = '';
  @Input() email: string = '';
  gender: string = '';
  password: string = '';
  file: File | null = null;


  onSubmit() {
    if (this.username && this.email && this.gender) {
      alert(`Profile Updated:\nUsername: ${this.username}\nEmail: ${this.email}\nGender: ${this.gender}`);
      // Handle further processing (e.g., API call to save the data)
    } else {
      alert('Please fill in all fields.');
    }
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

}
