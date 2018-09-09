import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CategorySelectedComponent} from './categories/category/category-selected/category-selected.component';
import {BlueprintDetailsComponent} from './blueprints/blueprint/blueprint-details/blueprint-details.component';
import {AccountComponent} from './account/account.component';
import {FavoritesComponent} from './account/favorites/favorites.component';
import {OrdersComponent} from './account/orders/orders.component';
import {RatingsComponent} from './account/ratings/ratings.component';
import {AuthGuard} from './auth/auth-guard.service';
import {FiltersComponent} from './filters/filters.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category/:name', component: CategorySelectedComponent},
  {
    path: 'filters/:name', component: FiltersComponent,
    children: [
      {path: ':filter', redirectTo: 'filters/:name'} // TODO
    ]
  },
  {path: 'details/:blueprint', component: BlueprintDetailsComponent},
  {
    path: 'account', component: AccountComponent, children: [
      {
        path: 'favorites', component: FavoritesComponent,
        data: {title: 'favorites'}
      },
      {
        path: 'ratings', component: RatingsComponent,
        data: {title: 'ratings'}
      },
      {
        path: 'orders', component: OrdersComponent,
        data: {title: 'orders'}
      }
    ], canActivate: [AuthGuard], data: {title: 'profile'}
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
