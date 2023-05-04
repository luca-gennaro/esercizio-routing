import { Injectable } from '@angular/core';
import { Contatto } from 'src/app/models/contatto.model';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  private messaggio: string = ""
  private listaContatti : Contatto[] = [
    {
      id: 0,
      nome: "Dario Mennillo",
      numTel: "1234567",
      immagine: "https://media.licdn.com/dms/image/C5603AQG4SbmFX4umvw/profile-displayphoto-shrink_800_800/0/1575068777147?e=2147483647&v=beta&t=KftV1GAmlj3tOuYpzuQb4CP5_VZ0FdDFgPgfYlwPb0w"
    },
    {
      id: 1,
      nome: "Davide Ghione",
      numTel: "98765432",
      immagine: "https://media.licdn.com/dms/image/C4E03AQGeaHUIvFU1fQ/profile-displayphoto-shrink_800_800/0/1554040358981?e=2147483647&v=beta&t=Ws4CulrcdwM4F43bSnZq9kKEEC8zulbcO7mk2BCSC3w"
    }
  ]

  constructor() { }

  getListaContatti(): Contatto[]{
    return this.listaContatti;
  }

  getContattoById(id: number){
    const contatto = this.listaContatti.find(cont => cont.id === id)
    return contatto
  }

  aggiungiContatto(nome: string, numTel: string, immagine: string){
    let lastId: number = this.listaContatti.length;
    let nuovoContatto: Contatto = new Contatto(lastId++, nome, numTel, immagine)
    if(nome && numTel && immagine){
      this.listaContatti.push(nuovoContatto)
      console.log(this.listaContatti);
      this.messaggio = "Contatto aggiunto con successo!"
    }else{
      this.messaggio = "Attenzione, compila correttamente tutti i campi!"
    }
  }

  getMessaggio(): string {
    return this.messaggio
  }
}
