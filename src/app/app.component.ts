import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'; // Adjust the path if necessary

@Component({
  selector: 'app-root',
  standalone: true, // Set this to true for a standalone component
  imports: [HttpClientModule, LoginComponent], // Import HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My app'; // Adjust as necessary
}
