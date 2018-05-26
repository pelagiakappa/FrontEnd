import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CategorySelectedComponent} from './categories/category/category-selected/category-selected.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {BlueprintDetailsComponent} from './blueprints/blueprint/blueprint-details/blueprint-details.component';
import {AccountComponent} from './account/account.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {
    path: 'category/:name', component: CategorySelectedComponent,
    children: [
      {path: ':filter', redirectTo: 'category/:name'} // TODO
    ]
  },
  {path: 'details/:blueprint', component: BlueprintDetailsComponent},
  {path: 'account', component: AccountComponent},
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
