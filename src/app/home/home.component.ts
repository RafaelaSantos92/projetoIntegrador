import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { noticias } from '../model/noticias';
import { temas } from '../model/temas';
import { AuthService } from '../service/auth.service';
import { NoticiasService } from '../service/noticias.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias: noticias = new noticias()
  listaTemas: temas[]

  constructor(
    private router: Router,
    private noticiasService: NoticiasService,
    private temaService: TemaService,
    private authService: AuthService


  ) { }

  ngOnInit(){
    this.getAllTemas()
   }


   getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: temas[])=>{
      this.listaTemas = resp 
    })
   }


   publicar(){

   }

}
