import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage';
import { NotFoundComponent } from './components/not-found/not-found';
import { AdminComponent } from './components/admin/admin';
import { AuthComponent } from './components/auth/auth';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'home', component: HomepageComponent},
    {path: 'admin', component: AdminComponent , canActivate: [authGuard]},
    {path: 'auth', component: AuthComponent},
    {path: '**', component: NotFoundComponent}
];
