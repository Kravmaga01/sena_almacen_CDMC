import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { InventoryComponent } from './pages/store/pages/inventory/inventory.component';
import { SlectionCardComponent } from './pages/store/pages/slection-card/slection-card.component';
import { ProductsComponent } from './pages/store/products/products.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      
    {
      path:'information',
      component: HomeScreenComponent
    },
      {
        path: 'store',
        component: StoreComponent,
        children: [
          {
            path: 'Create',
            component: ProductsComponent,
          },
          {
            path: 'Store-selection',
            component: SlectionCardComponent,
          },
          {
            path: 'inventory',
            component: InventoryComponent,
          },
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: 'Store-selection',
          },
        ],
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
