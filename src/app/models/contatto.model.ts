export class Contatto {
  id: number;
  nome: string;
  numTel: string;
  immagine: string;

  constructor(id: number, nome: string, numTel: string, immagine:string){
    this.id = id;
    this.nome = nome;
    this.numTel = numTel;
    this.immagine = immagine
  }
}
