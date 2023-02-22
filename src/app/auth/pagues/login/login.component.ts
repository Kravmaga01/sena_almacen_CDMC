import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  loginForm: any = {};
  signUpForm: any = {};
  showSignUp: boolean = false; // Aquí se declara la propiedad
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
    // Aquí debes implementar la lógica para autenticar al usuario.
    console.log('User signed in', this.loginForm);
  }

  forgotPassword(): void {
    // Aquí debes implementar la lógica para recuperar la contraseña.
    console.log('Forgot password', this.loginForm.email);
  }

  toggleSignUp(): void {
    this.showSignUp = !this.showSignUp;
  }
}
