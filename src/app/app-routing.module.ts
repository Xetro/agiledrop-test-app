import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesListResolverService } from './companies-list/companies-list-resolver.service';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyDetailResolverService } from './company-detail/company-detail-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: CompaniesListComponent,
    resolve: {
      data: CompaniesListResolverService
    }
  },
  {
    path: 'detail/:id',
    component: CompanyDetailComponent,
    resolve: {
      data: CompanyDetailResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
