import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    { path: 'home', component: HomeComponent },
    {
        path: 'registration', component: UserComponent,
        children: [{ path: '', component: RegistrationComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];
