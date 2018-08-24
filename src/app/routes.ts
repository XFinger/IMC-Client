
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

export const appRoutes: Routes = [
    {path: 'home', 
     component: HomeComponent,
     canActivate:[AuthGuard]
    //  ,
    //     children: [{ 
    //     path: '',
    //     component: NavbarComponent},
    //     {
    //     path: '',
    //     component: FriendComponent,
    //     resolve: {
    //         friends: FriendResolver
    //     },
    //     outlet: "friend-list",
    // }
    //]

    },
    
    {path: 'navbar',
    component: NavbarComponent,
    canActivate:[AuthGuard],
    outlet: "navbar"
    // ,
    //     children: [{ 
    //     path: 'friends',
    //     outlet: "frlist",
    //     component: FriendComponent,
    //     resolve: {
    //         friends: FriendResolver
    //     }}]
},

    {path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {path: 'registration',
     component: UserComponent,
     children: [{ path: '', component: RegistrationComponent }]
    },

    {path: 'login', 
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
    },

    { path : '',
    redirectTo:'/login', 
    pathMatch : 'full'
    },

    // { path: 'wishlist', 
    // component: WishlistComponent,
    // canActivate:[AuthGuard]
    // },


    { path: 'wishlist/:id',
    component: WishlistComponent,
    resolve: {
        wishlist: WishlistResolver
    },
    children: [{ path: '', component: ListitemComponent}]
    },

    {
      path: 'listitem/:id',
      component: ListitemComponent
    }, 
    // {
    //   path: 'listitem',
    //   component: ListitemComponent,
    //   resolve: {
    //       listitem: ListitemResolver
    //   }
    // },   
    // { path: '', 
    // component: FriendComponent,canActivate:[AuthGuard],
    //  outlet: "frlist",
    // resolve: {
    //     friends: FriendResolver
    // }},

    { path: 'friends', 
    component: FriendComponent,canActivate:[AuthGuard],
    resolve: {
        friends: FriendResolver
    }},  

    { path: 'friendlist/:id',
    component: FriendListComponent,
    resolve: {
        friendlist: FriendListResolver
    },
    children: [{ path: '', component: ListitemComponent}]
    }
];
