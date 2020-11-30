import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewUserSucessfulComponent } from './new-user-sucessful/new-user-sucessful.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ProfileComponent } from './profile/profile.component';
import { TransationSuccessComponent } from './transation-success/transation-success.component';
import { TransctionListComponent } from './transction-list/transction-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'Profile', component: ProfileComponent },
  { path: 'Users', component: UserListComponent },
  { path: 'Transction-list', component: TransctionListComponent },
  { path: 'Trsanction-details', component: TransationSuccessComponent },
  { path: 'New-user', component: NewUserComponent },
  { path: '', component: MainComponent },
  { path: 'Home', component: MainComponent },
  { path: 'Sucessfully-created', component: NewUserSucessfulComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
