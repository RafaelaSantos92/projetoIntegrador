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
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: noticias = new noticias()
  
  temas: temas = new temas()
  listaTemas: temas[]
  idTemas: number

  user: user = new user()
  idUser = environment.id

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private noticiasService: NoticiasService,
    private temaService : TemaService,
    private auth: AuthService

  ) { }

  ngOnInit(){
    console.log(environment.token)
    window.scroll(0,0)

    if(environment.token == ''){
      // alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/entrar'])
    }

    this.auth.refreshToken()
    this.getAllTemas()
    
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: temas[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTemas(){
    this.temaService.getByIdTema(this.idTemas).subscribe((resp: temas) => {
   
    })
  }

  
  publicar(){
    this.temas.id = this.idTemas
    this.noticias.temas = this.temas

    this.user.id = this.idUser
    this.noticias.usuario = this.user

    this.noticiasService.postNoticias(this.noticias).subscribe((resp: noticias) => {
      this.noticias = resp
      alert('Noticia postada com sucesso!')
      this.noticias = new noticias()
      this.router.navigate(['/home'])

    })



  }}

