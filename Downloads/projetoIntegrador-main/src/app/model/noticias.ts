import { temas } from "./temas"
import { user } from "./user"

export class noticias{
 public id: number
 public titulo: string
 public texto: string
 public data: Date
 public foto: string    
 public fonte: string
 public curtidas: number
 public usuario: user   
 public temas: temas
}