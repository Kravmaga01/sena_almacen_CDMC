import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { RequestsSelectionComponent } from './pages/requests-selection/requests-selection.component';
import { SlectionCardComponent } from './pages/selection-card/slection-card.component';

import { StoreComponent } from './pages/store/store.component';
import { AdministracionUsuariosComponent } from './pages/users/users.component';
import { WarehouseRequestComponent } from './pages/warehouse-request/warehouse-request.component';
import { MaterialRequestFormComponentComponent } from './pages/material-request-form-component/material-request-form-component.component';
import { RejectedRequestsComponentComponent } from './pages/rejected-requests-component/rejected-requests-component.component';

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
            path: 'create-solicitud',
            component: MaterialRequestFormComponentComponent,
          },
          {
            path: 'reject-solicitud',
            component: RejectedRequestsComponentComponent,
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
