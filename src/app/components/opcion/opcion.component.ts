import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.component.html',
  styleUrls: ['./opcion.component.scss'],
})
export class OpcionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  openPage(valor: string) {
    console.log("valor: " + valor);
    this.router.navigate(['/' + valor]);
  }



}
