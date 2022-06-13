import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuariosEditComponent } from './edit/usuarios-edit/usuarios-edit.component';
import { NoticiasDeleteComponent } from './delete/noticias-delete/noticias-delete.component';
import { NoticiasEditComponent } from './edit/noticias-edit/noticias-edit.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { TemasComponent } from './temas/temas.component';
import { MinhasPublicacoesComponent } from './minhas-publicacoes/minhas-publicacoes.component';

const routes: Routes = [
  
{path:'', redirectTo: 'home', pathMatch: 'full'},

{path: 'home', component: HomeComponent},
{path: 'entrar', component: CadastroLoginComponent},
{path: 'temas', component: TemasComponent},
{path: 'noticias', component: NoticiasComponent},
{path: 'minhasPublicacoes', component: MinhasPublicacoesComponent},

{path: 'noticias-edit/:id', component: NoticiasEditComponent},
{path: 'noticias-delete/:id', component: NoticiasDeleteComponent},

{path: 'tema-edit/:id', component: TemaEditComponent},
{path: 'tema-delete/:id', component: TemaDeleteComponent},
{path: 'usuarios-edit/:id', component: UsuariosEditComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
