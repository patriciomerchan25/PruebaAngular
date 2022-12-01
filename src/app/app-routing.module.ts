import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPersonaComponent } from './pages/personas/listar-persona/listar-persona.component';

const routes: Routes = [
  { path: '', component:ListarPersonaComponent},
  {path: "persona/list", component: ListarPersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
