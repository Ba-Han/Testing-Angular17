import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyComponent } from './company/company.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductListDetailComponent } from './product-list-detail/product-list-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    {'path': 'home', title: 'Home', component: HomeComponent},
    {'path': 'about', title: 'About', component: AboutComponent},
    {'path': 'about', children: [
        {'path': 'company', title: 'About | Company', component: CompanyComponent},
        {'path': 'employees', title: 'About | Employees', component: EmployeesComponent}
    ]},
    {'path': 'contact', title: 'Contact', component: ContactComponent},
    {'path': 'product-list', title: 'ProductList', component: ProductListComponent},
    {'path': 'product-list', children: [  
        {'path': 'product-list-detail', title: 'ProductList | ProductListDetail', component: ProductListDetailComponent},
    ]},
    {'path': '', redirectTo: '/home', pathMatch: 'full'},
    {'path': '**', title: 'PageNotFound', component: PageNotFoundComponent}
];
