import { Component } from '@angular/core';
import { ContattiService } from './contatto/contatti.service';
import { Contatto } from '../models/contatto.model';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

  listaContatti: Contatto[] = []

  constructor(private servizioContatti: ContattiService){
    this.listaContatti = this.servizioContatti.getListaContatti()
  }
}
