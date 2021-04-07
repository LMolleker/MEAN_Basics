import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  public arrSales:Array<any>;

  constructor(private salesService:RequestsService) {
    this.arrSales = [];
  }

  ngOnInit(): void {
    this.salesService.getSales().subscribe(data => this.arrSales = data);
  }

}
