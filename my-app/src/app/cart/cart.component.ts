import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public arrBeers:Array<any>;

  constructor(private cartService:CartService, private renderer:Renderer2) { 
    this.arrBeers = [];
  }

  ngOnInit(): void {
    this.arrBeers = this.cartService.getBeers();
  }

  public addSale(name:HTMLInputElement, address:HTMLInputElement, pname:HTMLElement, paddress:HTMLElement):void{
    if(name.value!="" && address.value!=""){
      this.cartService.addSale(name.value, address.value);
      this.arrBeers = [];
      pname.innerHTML = ""
      paddress.innerHTML = ""
    }else{
      if(name.value==""){
        pname.innerHTML = "Please insert your name";
      }
      if(address.value==""){
        paddress.innerHTML = "Please insert your address";
      }
    }
  }

}
