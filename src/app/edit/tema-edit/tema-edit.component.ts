import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { temas } from 'src/app/model/temas';
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
    private route: ActivatedRoute
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
  this.temaService.putTema(this.temas).subscribe((resp: temas) => {
    this.temas = resp
    alert('Tema atualizado com sucesso!')
    this.router.navigate(['/temas'])
  })

}
}
