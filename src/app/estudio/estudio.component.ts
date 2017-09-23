import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {

	image = '../../assets/images/escritorio.jpg';

  constructor() { }

  ngOnInit() {
  }

}
