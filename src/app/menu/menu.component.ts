import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = this.authService.nome
  foto = this.authService.foto
  id = this.authService.id

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0

  }
}


