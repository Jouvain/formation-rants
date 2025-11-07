import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage';
import { NotFoundComponent } from './components/not-found/not-found';
import { AdminComponent } from './components/admin/admin';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'home', component: HomepageComponent},
    {path: 'admin', component: AdminComponent},
    {path: '**', component: NotFoundComponent}
];
