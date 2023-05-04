import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContattiService } from './contatti.service';
import { Contatto } from 'src/app/models/contatto.model';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent implements OnInit {
  contatto: Contatto

  constructor(private route: ActivatedRoute, private router: Router, private serviceContatti: ContattiService) {

  }

  ngOnInit(): void {
    let idContatto = this.route.snapshot.params["id"]


    this.route.params.subscribe((params: Params) => {
      idContatto = +params["id"];
      console.log(idContatto)
      this.contatto = this.serviceContatti.getContattoById(idContatto)
    }
    )

  }
}
