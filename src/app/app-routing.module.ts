import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SingleUserPageComponent } from './pages/single-user-page/single-user-page.component';

const routes: Routes = [
  { path: '', component: UsersPageComponent },
  { path: 'detail/:id', component: SingleUserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
