// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Validators } from '@angular/forms';
// import { AuthService } from 'src/app/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   newform!: FormGroup;
//   constructor(private authService: AuthService) {}

//   ngOnInit(): void {
//     this.newform = new FormGroup({
//       email: new FormControl('', [Validators.required]),
//       pass: new FormControl(null, [
//         Validators.required,
//         Validators.minLength(4),
//       ]),
//     });
//   }

//   onClick() {
//     // this.authService.login(this.email , this.pass).subscribe(
//     //   resData => {
//     //     console.log(resData);
//     //   },
//     //   error => {
//     //     console.log(error);
//     //   }
//     // );

//     console.log(this.newform.get('pass'));
//   }

//   get email(): any {
//     return this.newform.controls['email'];
//   }

//   get pass(): any {
//     return this.newform.controls['pass'];
//   }
// }

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }
