
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistResolver } from './wishlist/wishlist.resolver';
import { ListitemComponent } from './listitem/listitem.component';
import { ListitemResolver } from './listitem/listitem.resolver';
import { NavbarComponent } from './navbar/navbar.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendListResolver } from './friend-list/friend-list.resolver';
import { FriendComponent } from './friend/friend.component';
import { FriendResolver } from './friend/friend.resolver';
import { ToolbarComponent } from './user/toolbar/toolbar.component';
import { MainComponent } from './main/main.component'
export const appRoutes: Routes = [
    
    
// Login and Register Paths    
   {path: 'toolbar',
    component: ToolbarComponent,
    outlet: 'toolbar'
},
    {path: 'register',
     component: RegistrationComponent
},

    {path: 'login', 
    component: SignInComponent
    // ,
    // pathMatch : 'full'
},


// Main - logged in path 

    {path: '', 
    component: MainComponent, 
    //pathMatch: 'full',
    children: [
        {path: 'navbar',
        component: NavbarComponent,
       // outlet: "navbar"
},
        {path: 'home', 
        component: HomeComponent,
        canActivate:[AuthGuard]       
},      
        { path: 'wishlist/:id',
        component: WishlistComponent,
        resolve: {wishlist: WishlistResolver}
        // ,
        //     children: [{ path: '', component: ListitemComponent}]
},
    { path: 'listitem', 
    component: ListitemComponent
},

    { path: 'listitem/:id',
      component: ListitemComponent
},
    { path: 'friends',
      component: FriendComponent,
      resolve: {friends: FriendResolver }     
},     
    { path: '', 
    component: FriendComponent,
    canActivate:[AuthGuard],
    outlet: "frlist",
    resolve: {friends: FriendResolver }
}, 

    { path: 'friendlist/:id',
    component: FriendListComponent,
    resolve: { friendlist: FriendListResolver},
    children: 
        [{ path: ' ',
           pathMatch: 'full',
           component: ListitemComponent}]
}

]} 
]; 
    
    
    
    
    
    
    
    
    


   


 

