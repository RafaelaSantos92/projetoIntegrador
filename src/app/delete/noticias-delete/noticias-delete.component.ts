import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { noticias } from 'src/app/model/noticias';
import { AlertasService } from 'src/app/service/alertas.service';
import { NoticiasService } from 'src/app/service/noticias.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-noticias-delete',
  templateUrl: './noticias-delete.component.html',
  styleUrls: ['./noticias-delete.component.css']
})
export class NoticiasDeleteComponent implements OnInit {


  noticias: noticias = new noticias()
  idNoticia: number


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
    private alerta: AlertasService

  ) { }

  ngOnInit() {

    window.scroll(0,0)




    if(environment.token == ''){
      // alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/entrar'])
    }

    this.idNoticia = this.route.snapshot.params['id']
    this.findByIdNoticia(this.idNoticia)

  }


  findByIdNoticia(id: number){
    this.noticiasService.getByIdNoticias(id).subscribe((resp: noticias) => {
      this.noticias = resp
    })
  }



  apagar(){
    this.noticiasService.deleteNoticias(this.idNoticia).subscribe(() => {
      this.alerta.showAlertSuccess('Noticia apagada com sucesso!')
      this.router.navigate(['/home'])
    })
  }



}
