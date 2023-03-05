import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { InventoryComponent } from './pages/store/pages/inventory/inventory.component';
import { SlectionCardComponent } from './pages/store/pages/slection-card/slection-card.component';
import { ProductsComponent } from './pages/store/products/products.component';
import { StoreComponent } from './pages/store/store.component';
import { AdministracionUsuariosComponent } from './pages/users/users.component';
import { RequestsSelectionComponent } from './pages/request/pages/requests-selection/requests-selection.component';
import { WarehouseRequestComponent } from './pages/warehouse-request/warehouse-request.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'information',
        component: HomeScreenComponent,
      },

      {
        path: 'store',
        component: StoreComponent,
        children: [
          {
            path: 'create',
            component: ProductsComponent,
          },
          {
            path: 'store-selection',
            component: SlectionCardComponent,
          },
          {
            path: 'inventory',
            component: InventoryComponent,
          },
          {
            path: 'requests-selection',
            component: RequestsSelectionComponent,
          },
          {
            path: 'solicitudes',
            component:WarehouseRequestComponent
            
          },
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: 'store-selection',
          },
        ],
      },

      {
        path: 'users',
        component: AdministracionUsuariosComponent,
      },

      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'information',
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
