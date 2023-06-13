// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-resetpassword',
//   templateUrl: './resetpassword.component.html',
//   styleUrls: ['./resetpassword.component.css']
// })
// export class ResetpasswordComponent {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class PasswordResetComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  passwordMismatch: boolean = false;
  passwordResetSuccess: boolean = false;

  resetPassword() {
    if (this.newPassword === this.confirmPassword) {
      // Passwords match, perform the necessary actions to reset the password
      // You can make an API call or use any other method to reset the password
      // Once the password is reset successfully, set the passwordResetSuccess flag to true
      this.passwordResetSuccess = true;
      this.passwordMismatch = false;
    } else {
      // Passwords do not match, display an error message
      this.passwordMismatch = true;
      this.passwordResetSuccess = false;
    }
  }

  passwordMatch = false;
passwordUpdated = false;

checkPasswordMatch() {
  const newPassword = document.getElementById('newPassword') as HTMLInputElement;
  const confirmPassword = document.getElementById('confirmPassword') as HTMLInputElement;
  const errorElement = document.querySelector('.password-match-error');
  
  if (newPassword.value !== confirmPassword.value) {
    this.passwordMatch = false;
    // errorElement.style.display = 'block';
  } else {
    this.passwordMatch = true;
    // errorElement.style.display = 'none';
  }
}

updatePassword() {
  if (this.passwordMatch) {
    // Code to update the password
    this.passwordUpdated = true;
  }
}

}

