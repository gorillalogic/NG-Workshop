import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleGuard } from './guards/example.guard';
import { DevDashboardComponent } from './features/dev-dashboard/dev-dashboard.component';
import { DeniedComponent } from './features/denied/denied.component';
import { HomeComponent } from './features/home/home.component';
import { DevResolver } from './resolvers/dev-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dev-dashboard',
    component: DevDashboardComponent,
    canActivate: [ExampleGuard],
    resolve: {
      res: DevResolver
    }
  },
  {
    path: 'denied',
    component: DeniedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
