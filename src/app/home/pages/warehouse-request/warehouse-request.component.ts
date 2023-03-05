import { Component } from '@angular/core';

@Component({
  selector: 'app-warehouse-request',
  templateUrl: './warehouse-request.component.html',
  styleUrls: ['./warehouse-request.component.scss']
})
export class WarehouseRequestComponent {


  solicitudes = [
    { nombre: 'Solicitud 1', tipo: 'Cuero', cantidad: 10, ficha: '560603', descripcion: 'Necesito cuero para n proyecto ' },
    { nombre: 'Solicitud 2', tipo: 'Tela', cantidad: 5, ficha: '4651651', descripcion: 'Necesito tela para mis jovenes' },
    { nombre: 'Solicitud 3', tipo: 'Chapas', cantidad: 7, ficha: '46464', descripcion: 'Ayuda se  agoto todo el material' }
  ];

  aceptarSolicitud(solicitud:string) {
    // Lógica para aceptar la solicitud
  }

  rechazarSolicitud(solicitud:any) {
    // Lógica para rechazar la solicitud y eliminarla de la tabla
    const index = this.solicitudes.indexOf(solicitud);
    if (index !== -1) {
      this.solicitudes.splice(index, 1);
    }
  }
}

