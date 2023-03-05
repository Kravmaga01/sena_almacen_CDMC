import { Component } from '@angular/core';

interface Usuario {
  foto: string;
  nombre: string;
  correo: string;
  rol: string;
}

@Component({
  selector: 'app-administracion-usuarios',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class AdministracionUsuariosComponent {
  usuarios: Usuario[] = [
    {foto: 'https://via.placeholder.com/50', nombre: 'Usuario 1', correo: 'usuario1@example.com', rol: 'admin'},
    {foto: 'https://via.placeholder.com/50', nombre: 'Usuario 2', correo: 'usuario2@example.com', rol: 'user'}
  ];
  isEditing = false;

  editarTabla() {
    this.isEditing = true;
  }

  guardarTabla() {
    this.isEditing = false;
  }

  agregarUsuario() {
    this.usuarios.push({foto: '', nombre: '', correo: '', rol: 'user'});
  }

  eliminarUsuario(index: number) {
    this.usuarios.splice(index, 1);
  }
}