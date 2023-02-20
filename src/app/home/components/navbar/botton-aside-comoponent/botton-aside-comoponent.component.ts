// Importar component, EventEmitter y Output desde el módulo @angular/core
import { Component,  EventEmitter, Output } from '@angular/core';

// Decorador @Component que define la metadata del componente
@Component({
  selector: 'app-botton-aside-comoponent', // Selector del componente
  templateUrl: './botton-aside-comoponent.component.html', // Ruta del archivo de template HTML
  styleUrls: ['./botton-aside-comoponent.component.scss'] // Ruta del archivo de estilos CSS
})

// Clase del componente que contiene la lógica del mismo
export class BottonAsideComoponentComponent {
    // Propiedad para controlar la visualización del menú lateral
    showAside: string = 'none';

    // Propiedad para controlar el estado del botón de menú
    isMenuActive: boolean = false;

    // Evento de salida que se emite cuando se cambia el estado de visualización del menú
    @Output() showAsideChange = new EventEmitter<string>();

    // Método que se ejecuta cuando se hace clic en el botón de menú
    toggleAside() {
       // Si el menú no está visible, se muestra y se cambia el estado del botón a activo
       if (this.showAside === 'none') {
          this.showAside = 'block';
          this.isMenuActive = true;
       } else { // Si el menú está visible, se oculta y se cambia el estado del botón a inactivo
          this.showAside = 'none';
          this.isMenuActive = false;
       }

       // Se emite el evento showAsideChange con el nuevo valor de la propiedad showAside
       this.showAsideChange.emit(this.showAside);
    }
}