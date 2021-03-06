import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { temas } from '../model/temas';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token),
    }

    refreshToken(){
      this.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
    }


  getAllTema(): Observable<temas[]>{
    return this.http.get<temas[]>('https://informacaomudaomundo.herokuapp.com/Temas', this.token)
  }

  getByIdTema(id: number): Observable<temas>{
    return this.http.get<temas>(`https://informacaomudaomundo.herokuapp.com/Temas/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<temas[]>{
    return this.http.get<temas[]>(`https://informacaomudaomundo.herokuapp.com/Temas/Nome/${nome}`, this.token)
  }
  
   postTema(temas: temas): Observable<temas>{
    return this.http.post<temas>('https://informacaomudaomundo.herokuapp.com/Temas', temas, this.token)

  }

  putTema(temas: temas): Observable<temas>{
    return this.http.put<temas>('https://informacaomudaomundo.herokuapp.com/Temas', temas, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete<temas>(`https://informacaomudaomundo.herokuapp.com/Temas/${id}`, this.token)
  }


}
