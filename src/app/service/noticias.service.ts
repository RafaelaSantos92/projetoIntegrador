import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { noticias } from '../model/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('authorization', environment.token)
}

  getAllNoticias(): Observable<noticias[]>{
    return this.http.get<noticias[]>('https://informacaomudaomundo.herokuapp.com/Noticias', this.token)
    }
    
  postNoticias(noticias: noticias): Observable<noticias>{
    return this.http.post<noticias>('https://informacaomudaomundo.herokuapp.com/Noticias', noticias, this.token)

  }

  getByIdNoticias(id: number): Observable<noticias>{
    return this.http.get<noticias>(`https://informacaomudaomundo.herokuapp.com/Noticias/${id}`, this.token)
  }


  putNoticias(noticias: noticias): Observable<noticias>{
    return this.http.put<noticias>('https://informacaomudaomundo.herokuapp.com/Noticias', noticias, this.token)
  }

  deleteNoticias(id: number){
    return this.http.delete(`https://informacaomudaomundo.herokuapp.com/Noticias/${id}`, this.token)
  }




  }




