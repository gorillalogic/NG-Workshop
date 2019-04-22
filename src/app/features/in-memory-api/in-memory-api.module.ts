import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListingComponent } from './pages/user-listing/user-listing.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { InMemoryAPIRoutingModule } from './in-memory-api-routing.module';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

@NgModule({
  declarations: [
    UserListingComponent,
    UserListComponent,
    UserDetailComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    InMemoryAPIRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
  ]
})
export class InMemoryAPIModule { }
