import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './features/components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './features/components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: 'pokemon/:id', component: PokemonDetailsComponent },
  { path: '', component: PokemonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
