import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';
import { TemasComponent } from './temas/temas.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';

import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { UsuariosEditComponent } from './edit/usuarios-edit/usuarios-edit.component';

import { NoticiasEditComponent } from './edit/noticias-edit/noticias-edit.component';
import { NoticiasDeleteComponent } from './delete/noticias-delete/noticias-delete.component';
import { MinhasPublicacoesComponent } from './minhas-publicacoes/minhas-publicacoes.component';
import { SobreComponent } from './sobre/sobre.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastroLoginComponent,
    TemasComponent,
    HomeComponent,
    NoticiasComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    UsuariosEditComponent,
    NoticiasEditComponent,
    NoticiasDeleteComponent,
    MinhasPublicacoesComponent,
    SobreComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
