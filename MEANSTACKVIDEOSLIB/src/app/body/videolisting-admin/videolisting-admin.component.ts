import { Component, OnInit } from '@angular/core';
import { VideolistServiceService } from 'src/app/videolist-service.service';
import { Videos } from '../videolisting-users/videos.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videolisting-admin',
  templateUrl: './videolisting-admin.component.html',
  styleUrls: ['./videolisting-admin.component.css']
})
export class VideolistingAdminComponent implements OnInit {
  videos: Videos[];

  constructor(private videoService:VideolistServiceService, private router:Router) { }

  ngOnInit() {
    this.videoService.currentVideo.subscribe(vidArr=>this.videos=vidArr);


  }
  navigateCusts()
  {
this.router.navigate(['/customers']);
  }
  navigateVids()
  {
    this.router.navigate(['/videolist']);
    console.log("dfadfadsfadsfads")
  }

}
