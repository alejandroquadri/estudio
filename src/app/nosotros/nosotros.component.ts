import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

	imageGrano = 'https://firebasestorage.googleapis.com/v0/b/designweb-249da.appspot.com/o/otros%2FtrituradoMarmol.jpeg?alt=media&token=7110942f-e9c3-458b-86db-ab90d070141a';
	imageGrano1 = 'https://firebasestorage.googleapis.com/v0/b/designweb-249da.appspot.com/o/otros%2FtrituradoMarmolOscuro.jpeg?alt=media&token=60534f9d-4d0f-46e7-a931-7cc475a886b0';
	imageGrano2 = 'https://firebasestorage.googleapis.com/v0/b/designweb-249da.appspot.com/o/otros%2FtrituradoMarmolOscuro2.jpeg?alt=media&token=a2f9252d-bab5-4edf-8d8b-543543757e60';

  constructor() {
  }

  ngOnInit() {
  }

}
