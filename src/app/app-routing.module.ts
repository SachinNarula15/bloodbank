import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepositoryComponent } from './repository/repository.component';
import { RegistrationComponent } from './registration/registration.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'repo', component: RepositoryComponent},
  { path: 'reg', component: RegistrationComponent},
  { path: 'bloodbank', component: BloodbankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
