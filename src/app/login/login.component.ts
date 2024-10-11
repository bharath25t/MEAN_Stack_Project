// login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule] // Include FormsModule and CommonModule
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  onLogin() {
    const loginData = { username: this.username, password: this.password };

    this.http.post('http://localhost:3000/login', loginData)
      .subscribe(
        (response: any) => {
          alert('Login successful!');
          console.log(response);
        },
        (error) => {
          this.errorMessage = 'Invalid username or password';
          console.error(error);
        }
      );
  }
}
