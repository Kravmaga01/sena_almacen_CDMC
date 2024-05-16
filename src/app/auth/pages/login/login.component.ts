import { AfterViewInit, Component } from '@angular/core';
import { User } from '../../models/user.interface';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  loginForm: User = {
    email: '',
    password: '',
    name: ''
  };
  signUpForm: User = {
    email: '',
    password: '',
    name: ''
  };
  showSignUp: boolean = false;

  constructor(private readonly auth: AuthService) {}

  ngAfterViewInit(): void {
    const imgBtn = document.querySelector('.img__btn');
    const cont = document.querySelector('.cont');

    if (imgBtn && cont) {
      imgBtn.addEventListener('click', function () {
        cont.classList.toggle('s--signup');
      });
    }
  }

  signIn(): void {
    this.auth.signIn(this.loginForm);
  }

  signUp(): void {
    this.auth.signUp(this.signUpForm);
  }

  forgotPassword(): void {
    // Implementa la lógica para recuperar la contraseña si es necesario
  }

  toggleSignUp(): void {
    this.showSignUp = !this.showSignUp;
  }
}
