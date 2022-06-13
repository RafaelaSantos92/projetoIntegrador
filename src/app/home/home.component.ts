import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { noticias } from '../model/noticias';
import { temas } from '../model/temas';
import { user } from '../model/user';
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
  listaNoticias: noticias[]

  temas: temas =  new temas()
  listaTemas: temas[]
  idTema: number

  user: user = new user()
  idUser = environment.id

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private noticiasService: NoticiasService,
    private temaService: TemaService,
    private authService: AuthService


  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.authService.refreshToken()
    this.getAllTemas()
    this.getAllNoticias()

   }


   getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: temas[])=>{
      this.listaTemas = resp 
    })
   }

   getAllNoticias(){
    this.noticiasService.getAllNoticias().subscribe((resp: noticias[]) => {
      this.listaNoticias = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: user) => {
      this.user = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: temas) => {
      this.temas = resp
    })
  }



}
