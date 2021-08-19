import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  url: string = 'http://ciceroinfo.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';

  getValor() {
    return 1;
  }

  getCurtir() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
