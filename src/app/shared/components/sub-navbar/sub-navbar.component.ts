import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent implements OnInit {

	@Input() routes: Array<string>;
	@Input() parentRoute: string;
	@Output() route = new EventEmitter();

  constructor(
  	private router: Router
	) { 
  	console.log(this.routes);
	}

  ngOnInit() {
  	console.log(this.routes);
  }

  nav(route) {
  	this.route.emit(route);
  }

  isActive(route) {
  	return this.router.url === `/${this.parentRoute}/${route}`;
  }

}
