import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StoreComponent } from './pages/store/store.component';
import { SlectionCardComponent } from './pages/store/pages/slection-card/slection-card.component';
import { InventoryComponent } from './pages/store/pages/inventory/inventory.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';




@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    StoreComponent,
    SlectionCardComponent,
    InventoryComponent,
    HomeScreenComponent,
  ],
  imports: [
    CommonModule,
  
    HomeRoutingModule
  ]
})
export class HomeModule { }
