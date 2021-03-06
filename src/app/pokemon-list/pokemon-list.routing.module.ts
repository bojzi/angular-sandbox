import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';

export const routes: Routes = [
    {
        path: '',
        component: PokemonListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonListRoutingModule {}
