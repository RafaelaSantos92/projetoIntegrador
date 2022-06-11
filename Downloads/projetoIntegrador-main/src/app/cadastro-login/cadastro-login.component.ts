import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { user } from '../model/user';
import { userLogin } from '../model/userLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro-login',
  templateUrl: './cadastro-login.component.html',
  styleUrls: ['./cadastro-login.component.css']
})
export class CadastroLoginComponent implements OnInit {

user: user = new user 
confirmarSenha: string
tipoUsuario:string
userLogin: userLogin = new userLogin()


  constructor(
    private authservice: AuthService,
    private router: Router
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    
  }
  
  confirmSenha(event:any) {
    this.confirmarSenha = event.target.value

  }
  tipoUser(event:any) {
    this.tipoUsuario = event.target.value

  }
  
  cadastrar() {
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão incorretas.')
    }
    else {
      this.authservice.cadastrar(this.user).subscribe((resp: user) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso, faça o login!')

      }
      )}
    }


    entrar(){
      this.authservice.entrar(this.userLogin).subscribe({
        next: (resp: userLogin) => {
          this.userLogin = resp
        environment.nome = this.userLogin.nome;
        environment.id = this.userLogin.id;
        environment.foto = this.userLogin.foto;
        environment.token = this.userLogin.token;
        this.router.navigate(['/home'])
        },
        error: erro=> {
          if(erro.status == 401) {
            alert('Usuário ou senha inválidos')
          }
        }
      })
    }
  
  }
