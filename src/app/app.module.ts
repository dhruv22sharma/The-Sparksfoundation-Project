import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { TransationSuccessComponent } from './transation-success/transation-success.component';
import { TransctionListComponent } from './transction-list/transction-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewUserSucessfulComponent } from './new-user-sucessful/new-user-sucessful.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProfileComponent,
    TransationSuccessComponent,
    TransctionListComponent,
    NewUserComponent,
    UserListComponent,
    NewUserSucessfulComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
