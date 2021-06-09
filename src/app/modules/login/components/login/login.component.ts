import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/modules/core/services/products/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private productService: ProductsService,
               private authService: AuthService,
               private router: Router ) { 

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberUser: [false]
    });

   }

  ngOnInit(): void { 
    if(localStorage.getItem('email')) {
      this.loginForm.reset({
        email: localStorage.getItem('email'),
        rememberUser: true
      });
    }
  }

  login(): void { 

    if(this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
        return;
    }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...',
      icon: 'info',
    });
    Swal.showLoading();

    this.authService.logIn(this.loginForm.value)
        .subscribe((response: any) => {

          if(this.loginForm.get('rememberUser')) {
            localStorage.setItem('email', this.loginForm.get('email')?.value);
          }

          Swal.close();
          this.router.navigateByUrl('/admin');

        }, (err: any) => {

          let error = err.error.errors ? err.error.errors[0].msg : err.error.message;
          Swal.fire({
            title: 'Error al autenticar',
            text: error,
            icon: 'error',
          });

        });
  }

  validateField(field: string): any {
    return this.loginForm.get(field)?.invalid && this.loginForm.get(field)?.touched;
  }

}
