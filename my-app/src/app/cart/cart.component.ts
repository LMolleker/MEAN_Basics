import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public arrBeers:Array<any>;

  constructor(private cartService:CartService) { 
    this.arrBeers = [];
  }

  ngOnInit(): void {
    this.arrBeers = this.cartService.getBeers();
  }

  public addSale(name:HTMLInputElement, address:HTMLInputElement):void{
    this.cartService.addSale(name.value, address.value);
  }

}
