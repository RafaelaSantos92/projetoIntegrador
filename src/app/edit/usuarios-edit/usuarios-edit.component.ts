import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit {

  user: user = new user()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
    

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == '') {

          // this.router.navigate(['/home'])
    }
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event:any) {
    this.confirmarSenha = event.target.value

  }
  tipoUser(event:any) {
    this.tipoUser = event.target.value

  }

  atualizar() {
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão incorretas.')
    }
    else {
      this.authService.atualizar(this.user).subscribe((resp: user) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário atualizado com sucesso, faça login novamente!')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        this.router.navigate(['/entrar'])
      }
      )}
    }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: user) =>{
      this.user = resp
    }) }

}
