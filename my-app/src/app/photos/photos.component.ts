import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {

  public arrPhotos:any;

  constructor(private photosService:RequestsService) {
    this.arrPhotos = [];
  }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe(data => this.arrPhotos = data);
  }

  public preventDefault(e:Event){
    e.preventDefault();
  }

  toggle(event:any) {
    // event.preventDefault();
    event.stopPropagation();
    // logic for accordion    
  }

}
