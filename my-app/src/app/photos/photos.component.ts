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

  constructor(private photosService:RequestsService) { }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe(data => console.log(data));
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
