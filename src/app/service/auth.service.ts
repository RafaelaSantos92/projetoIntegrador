import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { user } from '../model/user';
import { userLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
    return this.http.post<user>('https://informacaomudaomundo.herokuapp.com/Usuario/cadastrar', user)
  }

  getByIdUser(id: number): Observable<user>{
    return this.http.get<user>(`https://informacaomudaomundo.herokuapp.com/Usuario/${id}`, this.token)
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

}