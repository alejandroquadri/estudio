import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	facebook = "./assets/images/facebook.svg";
	instagram = "./assets/images/instagram.svg";

  constructor(
  	public router: Router
	) { }

  ngOnInit() {
  }

}
