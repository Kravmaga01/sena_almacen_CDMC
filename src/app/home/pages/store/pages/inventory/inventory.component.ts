import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

    data = [
      { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
      { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { id: 3, first: '', last: 'Larry the Bird', handle: '@twitter' }
    ];
  
    isEditing = false;
  
    editTable() {
      this.isEditing = true;
    }
  
    saveTable() {
      this.isEditing = false;
      // Aquí puedes agregar la lógica para guardar los datos en algún servicio o API.
    }
  
}
