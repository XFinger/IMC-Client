import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule }  from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user/user.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/navbar.service';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistService } from './wishlist/wishlist.service';
import { WishlistResolver } from './wishlist/wishlist.resolver';
import { ListitemComponent } from './listitem/listitem.component';
import { ListitemResolver } from './listitem/listitem.resolver';
import { ListitemService } from './listitem/listitem.service';
import { FixUrlPipe } from './pipe/fixUrl.pipe';
import { FriendComponent } from './friend/friend.component';
import { FriendService } from './friend/friend.service';
import { FriendResolver } from './friend/friend.resolver';
import { AuthService } from './auth/auth.service';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendListResolver } from './friend-list/friend-list.resolver';
import { FriendListService } from './friend-list/friend-list.service';
import { AddListitemDialogComponent } from './listitem/forms/add-listitem-dialog.component'
import { patternValidator } from './shared/pattern-validator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
    UserComponent,
    SignInComponent,
    WishlistComponent,
    ListitemComponent,
    FixUrlPipe,
    FriendComponent,
    FriendListComponent,
    AddListitemDialogComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    
   ],
  
  

  providers:[ UserService, 
              AuthGuard, 
              AuthService, 
              FriendListService, 
              FriendListResolver,
              WishlistService,
              WishlistResolver,
              FriendService,
              FriendResolver,
              NavbarService,
              ListitemResolver,
              ListitemService,

    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent],
  entryComponents: [SignInComponent, AddListitemDialogComponent],
})
export class AppModule { }
