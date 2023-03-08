import { Component } from '@angular/core';

@Component({
  selector: 'app-material-request-form-component',
  templateUrl: './material-request-form-component.component.html',
  styleUrls: ['./material-request-form-component.component.scss']
})
export class MaterialRequestFormComponentComponent {
 
    
    nombreProfesor!: string;
    ficha!: string;
    descripcion!: string;
    materialSeleccionado!: string;
    cantidad!: number;
    descripcionMaterial!: string;
    materiales = [
      {
        nombre: 'Material 1',
      
        cantidad: 5,
        descripcion: 'Descripción del material 1'
      },
      {
        nombre: 'Material 2',
     
        cantidad: 10,
        descripcion: 'Descripción del material 2'
      },
      {
        nombre: 'Material 3',
        cantidad: 3,
        descripcion: 'Descripción del material 3'
      }
    ];;
    
    materialesDisponibles = ['Material 1', 'Material 2', 'Material 3'];
materialesSeleccionados: string[] = [];
materialesAgregados: any[] = [];// Aquí puedes definir los materiales disponibles en el almacén
  
agregarMaterial() {
  const nuevoMaterial = {
    nombre: this.materialSeleccionado,
    cantidad: this.cantidad,
    descripcion: this.descripcionMaterial
  };
  this.materialesAgregados.push(nuevoMaterial);
}
  
    enviarSolicitud() {
      // Aquí puedes escribir la lógica para enviar la solicitud de materiales al almacén
    }

    eliminarMaterial(material:any){
      
    }
  
 
  
  
  
  
  
}
