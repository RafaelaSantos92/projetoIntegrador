import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';
import { NoticiasDeleteComponent } from './delete/noticias-delete/noticias-delete.component';
import { NoticiasEditComponent } from './edit/noticias-edit/noticias-edit.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { TemasComponent } from './temas/temas.component';

const routes: Routes = [
  
{path:'', redirectTo: 'home', pathMatch: 'full'},

{path: 'home', component: HomeComponent},
{path: 'entrar', component: CadastroLoginComponent},
{path: 'temas', component: TemasComponent},
{path: 'noticias', component: NoticiasComponent},


{path: 'noticias-edit/:id', component: NoticiasEditComponent},
{path: 'noticias-delete/:id', component: NoticiasDeleteComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
