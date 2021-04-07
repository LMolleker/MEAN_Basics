import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.css']
})
export class ListBeersComponent implements OnInit {

  public arrBeers:Array<any>;

  constructor(private requestService:RequestsService, private cartService:CartService) {
    this.arrBeers = [];
   }

  ngOnInit(): void {
    this.getBeers();
  }

  private getBeers():void{
    this.requestService.getBeers().subscribe(data => {
      this.arrBeers = data;
    })
  }

  public addBeer(beer:any):void{
    if(beer.stock>0){
      this.cartService.addBeer(beer);
    }
  }

  public removeBeer(beer:any):void{
    this.cartService.removeBeer(beer);
  }

}
