import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { noticias } from 'src/app/model/noticias';
import { temas } from 'src/app/model/temas';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  temas: temas = new temas()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)

  }
  
  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: temas)=>{
      this.temas = resp
    })
}

atualizar(){
  this.temas.noticias = []
  this.temaService.putTema(this.temas).subscribe((resp: temas) => {
    this.temas = resp
    this.alerta.showAlertSuccess('Tema atualizado com sucesso!')
    this.router.navigate(['/temas'])

  })

}
}
