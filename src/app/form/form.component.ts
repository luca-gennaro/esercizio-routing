import { Component } from '@angular/core';
import { ContattiService } from '../contatti/contatto/contatti.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nome: string;
  numTel: string;
  immagine: string;
  messaggio: string;

  constructor(private contattiService: ContattiService){

  }

  onAggiungiContatto(){
    this.contattiService.aggiungiContatto(this.nome, this.numTel, this.immagine)
    this.messaggio = this.contattiService.getMessaggio()
    setTimeout(()=> this.messaggio = "", 2000)
    this.nome = "";
    this.numTel = "";
    this.immagine = "";

  }


}
