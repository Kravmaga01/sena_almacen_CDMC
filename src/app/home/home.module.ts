import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { FormsModule } from '@angular/forms';
import {InventaryDataService} from './services/store/inventary.service';
import { AdministracionUsuariosComponent } from './pages/users/users.component';
import { WarehouseRequestComponent } from './pages/warehouse-request/warehouse-request.component';
import { SlectionCardComponent } from './pages/selection-card/slection-card.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { GraphTableComponent } from './pages/inventory/component/graph-table/graph-table.component';
import { RequestsSelectionComponent } from './pages/requests-selection/requests-selection.component';
import { MaterialRequestFormComponentComponent } from './pages/material-request-form-component/material-request-form-component.component';
import { RejectedRequestsComponentComponent } from './pages/rejected-requests-component/rejected-requests-component.component';





@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    StoreComponent,
    SlectionCardComponent,
    InventoryComponent,
    HomeScreenComponent,
    GraphTableComponent,
    AdministracionUsuariosComponent,
    RequestsSelectionComponent,
    WarehouseRequestComponent,
    MaterialRequestFormComponentComponent,
    RejectedRequestsComponentComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [
    InventaryDataService
  ]
  
})
export class HomeModule { }
