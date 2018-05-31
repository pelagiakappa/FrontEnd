import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {CategoriesComponent} from './categories/categories.component';
import {BlueprintsComponent} from './blueprints/blueprints.component';
import {FiltersComponent} from './filters/filters.component';
import {HomeComponent} from './home/home.component';
import {CategoriesService} from './categories/categories.service';
import {FilterComponent} from './filters/filter/filter.component';
import {FiltersService} from './filters/filters.service';
import {CategoryComponent} from './categories/category/category.component';
import {BlueprintComponent} from './blueprints/blueprint/blueprint.component';
import {CategorySelectedComponent} from './categories/category/category-selected/category-selected.component';
import {BlueprintsService} from './blueprints/blueprints.service';
import {FooterComponent} from './footer/footer.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {BreadcrumbComponent} from './breadcrumbs/breadcrumb/breadcrumb.component';
import {BreadcrumbsService} from './breadcrumbs/breadcrumbs.service';
import {SuggestionsComponent} from './search-bar/suggestions/suggestions.component';
import {AppRoutingModule} from './app-routing.module';
import {DataStorageService} from './shared/data-storage.service';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {DropdownDirective} from './shared/dropdown.directive';
import {BlueprintDetailsComponent} from './blueprints/blueprint/blueprint-details/blueprint-details.component';
import {AccountComponent} from './account/account.component';
import {FavoritesComponent} from './account/favorites/favorites.component';
import {OrdersComponent} from './account/orders/orders.component';
import {AlertsComponent} from './alerts/alerts.component';
import {AlertSuccessComponent} from './alerts/alert-success/alert-success.component';
import {AlertInfoComponent} from './alerts/alert-info/alert-info.component';
import {AlertWarningComponent} from './alerts/alert-warning/alert-warning.component';
import {AlertDangerComponent} from './alerts/alert-danger/alert-danger.component';
import {RatingsComponent} from './account/ratings/ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    CategoriesComponent,
    BlueprintsComponent,
    FiltersComponent,
    HomeComponent,
    FilterComponent,
    CategoryComponent,
    BlueprintComponent,
    CategorySelectedComponent,
    FooterComponent,
    BreadcrumbsComponent,
    BreadcrumbComponent,
    SuggestionsComponent,
    SignupComponent,
    SigninComponent,
    DropdownDirective,
    BlueprintDetailsComponent,
    AccountComponent,
    FavoritesComponent,
    OrdersComponent,
    AlertsComponent,
    AlertSuccessComponent,
    AlertInfoComponent,
    AlertWarningComponent,
    AlertDangerComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CategoriesService,
    FiltersService,
    BlueprintsService,
    BreadcrumbsService,
    DataStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
