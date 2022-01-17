import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/components/signup/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  usernameTs = '';
  passTs = '';
  isSignUp = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isSignUp = !this.isSignUp;
  }

  onSubmit(form: NgForm) {
    // signUP case
    if (this.isSignUp) {
      const val = form.value;
      this.usernameTs = val.username;
      this.passTs = val.pass;

      this.authService.signUp(this.usernameTs, this.passTs).subscribe(
        (resData) => {
          console.log(resData);
        },
        (error) => {
          console.log(error);
        }
      );
      console.log(val);
      form.reset();
    }

    // Login case
    else if (!this.isSignUp) {
      const val = form.value;
      this.usernameTs = val.username;
      this.passTs = val.pass;
      this.authService.login(this.usernameTs, this.passTs).subscribe(
        (resData) => {
          console.log(resData);
          this.authService.isAuth = true;
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
          this.authService.isAuth = false;
        }
      );
      form.reset();
    }
  }
}
