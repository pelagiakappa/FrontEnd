import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

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
import {ServerService} from './server.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':category', component: CategorySelectedComponent},
  {path: ':category/:filter', component: CategorySelectedComponent}
];

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
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CategoriesService, FiltersService, BlueprintsService, BreadcrumbsService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
