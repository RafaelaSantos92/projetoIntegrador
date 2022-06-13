import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { user } from '../model/user';
import { userLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  nome: string
  foto: string
  id: number = environment.id
  

  constructor(private http: HttpClient) 
  { }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }
  


  entrar(userLogin: userLogin ): Observable <userLogin> {
    return this.http.post<userLogin>('https://informacaomudaomundo.herokuapp.com/Usuario/logar', userLogin)

   }

   cadastrar(user: user): Observable<user> {
    return this.http.post<user>('https://informacaomudaomundo.herokuapp.com/Usuario/cadastrar', user, this.token)
  }

  getByIdUser(id: number): Observable<user>{
    return this.http.get<user>(`https://informacaomudaomundo.herokuapp.com/Usuario/${id}`, this.token)
  }

  atualizar(user: user){
    return this.http.put<user>('https://informacaomudaomundo.herokuapp.com/Usuario/atualizar', user, this.token)
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

}