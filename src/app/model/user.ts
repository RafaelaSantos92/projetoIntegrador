import { noticias } from "./noticias"

export class user{
    public id: number
    public nome: string
    public tipo: string
    public email: string
    public senha: string
    public foto: string 
    public noticias: noticias[]
}
