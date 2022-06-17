import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { temas } from '../model/temas';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  temas: temas = new temas()
  listaTemas: temas[]

  constructor(
    private roouter: Router,
    private temaService: TemaService,
    public auth: AuthService
  ) { }

  ngOnInit(){
    this.temaService.refreshToken()
    this.findAllTemas()
      }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: temas[]) => {
      this.listaTemas = resp
    })
  }


  cadastrar(){
    this.temaService.postTema(this.temas).subscribe((resp: temas)=>{
      this.temas = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.temas = new temas()
    })
  }

}
