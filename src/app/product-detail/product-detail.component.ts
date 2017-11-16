import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Media, ProductDetailService, BuyModalComponent } from '../shared';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

	ruta: any;
	image: any;
	detail: any;
  @ViewChild('imageCar') imageCar: ElementRef;
  @ViewChild('imagesDiv') imagesDiv: ElementRef;
  carouselEl: any

  public myForm: FormGroup;

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
    private detailService: ProductDetailService,
    private renderer: Renderer,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { 

  }

  ngOnInit() {
    this.buildForm();
  	this.route.params.forEach((params: any) => {
      this.ruta = params['id'];
    });
  	this.detail = this.detailService.detail;
  	this.image = this.detail.images[0].url;
  }

  ngAfterViewInit () {
    this.setHeight();
  }

  setHeight() {
    this.renderer.setElementStyle(this.imagesDiv.nativeElement, 'height', `${this.imageCar.nativeElement.offsetHeight}px`);
  }

  buildForm() {
    this.myForm = this.fb.group({
      quantity: new FormControl(1, Validators.required),
      color: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.myForm);
    let artBought = this.detail;
    artBought['bought'] = this.myForm.value;
    const modalRef = this.modalService.open(BuyModalComponent, {size: 'lg'});
    modalRef.componentInstance.data = JSON.stringify(artBought);
  }

}
