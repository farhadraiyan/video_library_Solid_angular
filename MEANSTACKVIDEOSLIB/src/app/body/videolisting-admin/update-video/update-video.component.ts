import { Component, OnInit, ViewChild } from '@angular/core';
import {Videos} from '../../videolisting-users/videos.model';
import { VideolistServiceService } from '../../../videolist-service.service';
import { NgForm } from '@angular/forms';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { generate } from 'rxjs';
@Component({
  selector: 'app-update-video',
  templateUrl: './update-video.component.html',
  styleUrls: ['./update-video.component.css']
})
export class UpdateVideoComponent implements OnInit {
  selctedFile: File = null;
  indexparm=this.route.snapshot.params['index'];
  videos: Videos[];
  componUrl="../../../../assets/";
  fileName = "default.png";
  defImgPath="";
  //alltemplate variable for two way binding
  title="";
  runtime="";
  director="";
  gen="";
  star="";
  stat="";
  @ViewChild('localstarsgen') genre;
  @ViewChild('localstars') stars;
  @ViewChild('status') status;
  constructor(private videoservice: VideolistServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    //subscribing to the current vid array
    this.videoservice.currentVideo.subscribe(vidArr=>this.videos=vidArr);
    //populate the field with index get through param
    
    this.defImgPath=this.componUrl+this.videos[this.indexparm].imgPath;
    // console.log("gen"+  this.gen2.nativeElement.options.selectedIndex.value);

    //fetching params with observable
    this.title=this.videos[this.indexparm].title
    this.gen=this.videos[this.indexparm].genre;
    this.director=this.videos[this.indexparm].director;
    this.star=this.videos[this.indexparm].rating;
    this.runtime=this.videos[this.indexparm].runtime;
    this.stat=this.videos[this.indexparm].status;



    //  console.log(this.genre.nativeElement.options.selectedIndex)
    //  console.log(this.genre.nativeElement.options[this.genre.nativeElement.options.selectedIndex].value)

    
  }
  updateVideo(form:NgForm,gen,star,stat)
  {
    this.defImgPath=this.fileName;
    let updatedVid=new Videos(form.value.title, form.value.runtime,
      gen.value,
      star.value,
      form.value.director,
      stat.value,
      this.defImgPath);
    this.videos[this.indexparm]=updatedVid;
      //finally update the videos throuh obs
      this.videoservice.changeVideo(this.videos);

  }



}
