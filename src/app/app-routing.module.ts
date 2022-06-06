import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';
import { HomeComponent } from './home/home.component';
import { TemasComponent } from './temas/temas.component';

const routes: Routes = [
  
{path:'', redirectTo: 'home', pathMatch: 'full'},

{path: 'home', component: HomeComponent},
{path: 'entrar', component: CadastroLoginComponent},
{path: 'temas', component: TemasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
