import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { noticias } from 'src/app/model/noticias';
import { temas } from 'src/app/model/temas';
import { AlertasService } from 'src/app/service/alertas.service';
import { NoticiasService } from 'src/app/service/noticias.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-noticias-edit',
  templateUrl: './noticias-edit.component.html',
  styleUrls: ['./noticias-edit.component.css']
})
export class NoticiasEditComponent implements OnInit {

  noticias: noticias = new noticias()

  temas: temas = new temas
  listaTema: temas[]
  idTema: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
    private temaService: TemaService,
    private alerta: AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0)




    if(environment.token == ''){
      // alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdNoticias(id)
    this.findAllTema()

  }


  findByIdNoticias(id: number){
    this.noticiasService.getByIdNoticias(id).subscribe((resp: noticias) => {
      this.noticias = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: temas) => {
      this.temas = resp
    })
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: temas[]) => {
      this.listaTema = resp
    })
  }

  atualizar(){
    this.temas.id = this.idTema
    this.noticias.temas = this.temas

    this.noticiasService.putNoticias(this.noticias).subscribe((resp: noticias) => {
      this.noticias = resp
      this.alerta.showAlertSuccess('Postagem atualizada com sucesso!')
      this.router.navigate(['/home'])
    })
  }

}
