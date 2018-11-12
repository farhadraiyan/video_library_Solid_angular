import { Component, OnInit } from '@angular/core';
import { Videos } from './videos.model';
import {VideolistServiceService} from '../../videolist-service.service';
@Component({
  selector: 'app-videolisting-users',
  templateUrl: './videolisting-users.component.html',
  styleUrls: ['./videolisting-users.component.css']
})
export class VideolistingUsersComponent implements OnInit {
  videos: Videos[];

  constructor( private videoService: VideolistServiceService) { }

  ngOnInit() {
    this.videoService.currentVideo.subscribe(vidArr=>this.videos=vidArr)
  }


}
