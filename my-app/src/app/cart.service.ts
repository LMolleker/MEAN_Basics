import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private arrBeers:Array<any>;

  constructor(private requestService:RequestsService) {
    this.arrBeers = [];
  }

  addBeer(beer:any){
    let size:number = this.arrBeers.length;
    let index:number = 0;
    while(index<size){
      if(beer.name===this.arrBeers[index].item.name){
        this.arrBeers[index].quantity += 1;
        this.arrBeers[index].totalPrice = beer.price*this.arrBeers[index].quantity;
        beer.stock -= 1;
        return;
      }
      index++;
    }
    beer.stock -= 1;
    this.arrBeers.push({item : beer, quantity : 1, totalPrice : beer.price});
  }

  getBeers():Array<any>{
    return this.arrBeers;
  }

  removeBeer(beer:any){
    let size:number = this.arrBeers.length;
    let index:number = 0;
    while(index<size){
      if(beer.name===this.arrBeers[index].item.name){
        if(this.arrBeers[index].quantity>1){
          this.arrBeers[index].quantity -= 1;
          this.arrBeers[index].totalPrice -= beer.price;
        }else{
          this.arrBeers.splice(index, 1);
        }
        beer.stock += 1;
        return;
      }
      index++;
    }
  }

  addSale(name:string, address:string){
    let data:any = {
      name : name,
      address : address,
      totalPrice : 0,
      items : []
    }
    let stringData:string = "";

    this.arrBeers.forEach(element => {
      let beer:any = {
        name: element.item.name,
        quantity : element.quantity,
        totalPrice : element.totalPrice
      }
      data.totalPrice+=element.totalPrice;
      data.items.push(beer);
      // stringData += JSON.stringify(beer);
    });
    // data.items = JSON.parse(stringData);
    this.requestService.addSale(data);
  }
}
