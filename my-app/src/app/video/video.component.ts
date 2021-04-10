import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private videoService:RequestsService) { }

  ngOnInit(): void {
    this.videoService.getVideo().subscribe(data => console.log(data))
  }

}
