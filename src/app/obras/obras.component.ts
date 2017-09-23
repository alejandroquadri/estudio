import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss']
})
export class ObrasComponent implements OnInit {

	cascada = '../../assets/images/cascada.jpg';
	gehry  = '../../assets/images/gehry.jpg';
	jobs = '../../assets/images/steve-jobs.jpg';

  constructor() { }

  ngOnInit() {
  }

}
