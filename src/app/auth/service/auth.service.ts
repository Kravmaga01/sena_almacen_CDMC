import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from '../../../environments/enviroment'; // Importar la configuración de Firebase desde el archivo de entorno
import { User } from '../models/user.interface';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth(); // Obtener la instancia de autenticación

  constructor(private readonly router: Router) {
    // Inicializar Firebase con la configuración firebaseConfig del entorno
    initializeApp(firebaseConfig);
  }

  signUp(user: User) {
    const { email, password } = user;
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Usuario registrado correctamente
        const user = userCredential.user;
        // Redirigir a la página de inicio, por ejemplo
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        // Manejar errores de registro
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }

  signIn(user: User) {
    const { email, password } = user;
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Usuario inició sesión correctamente
        const user = userCredential.user;
        // Redirigir a la página de inicio, por ejemplo
        this.router.navigateByUrl('home');
      })
      .catch((error) => {
        // Manejar errores de inicio de sesión
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
      
  }

  initAuthStateListener() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // Usuario ha iniciado sesión
        const uid = user.uid;
        // Realizar acciones necesarias para el usuario autenticado
      } else {
        // Usuario ha cerrado sesión
        // Realizar acciones necesarias para el usuario no autenticado
      }
    });
  }
}