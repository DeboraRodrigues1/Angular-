import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TituloComponent } from './titulo/titulo.component';
import { UserListComponent } from './user-list/user-list.component';
import { BuscaComponent } from './busca/busca.component';


const routes: Routes = [
  {path: '', redirectTo : '/titulo', pathMatch: 'full'},
  {path: 'user-list',component: UserListComponent},
  {path: 'titulo', component: TituloComponent},
  {path: 'busca', component: BuscaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
