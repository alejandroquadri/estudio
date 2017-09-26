import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terrazzo',
  templateUrl: './terrazzo.component.html',
  styleUrls: ['./terrazzo.component.css']
})
export class TerrazzoComponent implements OnInit {

  constructor(
  	private router: Router
	) { }

  ngOnInit() {
  }

  navigate(route) {
  	this.router.navigate([`/terrazzo/${route}`]);
  }

}
