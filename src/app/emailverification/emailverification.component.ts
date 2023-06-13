import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.css']
})
export class EmailVerificationComponent {

  constructor(private router: Router) { }

  resetPassword() {
    // Handle form submission logic here

    // Navigate to the resetpassword route
    this.router.navigate(['/reset-password']);
  }
}
