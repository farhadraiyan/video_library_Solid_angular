import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Videos } from './body/videolisting-users/videos.model';
@Injectable({
  providedIn: 'root'
})
export class VideolistServiceService {

  constructor() { }
  private videoSrc=new BehaviorSubject<Videos[]>([
    new Videos("Toy story","120 minutes", "animation", "4 stars","spielburg","available","toystory.jpeg"),
  new Videos("The godfather","175 minutes", "crime thriller", "4 stars","francise ford copollo","unavailable","3d1.png"),
  ]);
  currentVideo=this.videoSrc.asObservable();

  changeVideo(videosArray)
  {
    this.videoSrc.next(videosArray);
  }
}
