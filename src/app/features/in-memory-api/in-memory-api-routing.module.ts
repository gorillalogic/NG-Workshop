import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListingComponent } from './pages/user-listing/user-listing.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: UserListingComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InMemoryAPIRoutingModule {}
