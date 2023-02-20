import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const imgBtn = document.querySelector('.img__btn');
    const cont = document.querySelector('.cont');
    
    if (imgBtn && cont) {
      imgBtn.addEventListener('click', function() {
        cont.classList.toggle('s--signup');
      });
  }

  }}
