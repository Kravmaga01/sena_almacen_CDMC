import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StoreComponent } from './pages/store/store.component';
import { SlectionCardComponent } from './pages/store/pages/slection-card/slection-card.component';
import { InventoryComponent } from './pages/store/pages/inventory/inventory.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { FormsModule } from '@angular/forms';
import {InventaryDataService} from './services/store/inventary.service';
import { GraphTableComponent } from './pages/store/pages/inventory/component/graph-table/graph-table.component';
import { AdministracionUsuariosComponent } from './pages/users/users.component';
import { RequestsSelectionComponent } from './pages/request/pages/requests-selection/requests-selection.component';
import { WarehouseRequestComponent } from './pages/warehouse-request/warehouse-request.component';





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
