import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CategorySelectedComponent} from './categories/category/category-selected/category-selected.component';
import {BlueprintDetailsComponent} from './blueprints/blueprint/blueprint-details/blueprint-details.component';
import {AccountComponent} from './account/account.component';
import {FavoritesComponent} from './account/favorites/favorites.component';
import {OrdersComponent} from './account/orders/orders.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'category/:name', component: CategorySelectedComponent,
    children: [
      {path: ':filter', redirectTo: 'category/:name'} // TODO
    ]
  },
  {path: 'details/:blueprint', component: BlueprintDetailsComponent},
  {
    path: 'account', component: AccountComponent, children: [
      {path: 'favorites', component: FavoritesComponent},
      {path: 'orders', component: OrdersComponent}
    ]
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
