import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as moment from 'moment';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  audioObj = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  files=[
    {
    url: './assets/new/ht.mpeg',
    name : 'husn hai suhana',
  
    },
  ];
  files1=[
    {
    url: './assets/new/vt.mpeg',
    name : 'Vaathi Coming',
  
    },
  ];
  files2=[
    {
    url: './assets/new/kt.mpeg',
    name : 'khairiyat',
  
    },
  ];
  files3=[
    {
    url: './assets/nora.mpeg',
    name : 'Nach Meri Rani',
  
    },
  ];
  
  currentTime = '00:00:00';
  duration ='00:00:00';
  seek=0;
  streamObserver(url:any){
    return new Observable(observer => {
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();
  
     
      const handler = (event : Event) => {
        console.log(event);
        this.seek=this.audioObj.currentTime;
        this.duration = this.timeFormat(this.audioObj.duration);
        this.currentTime= this.timeFormat(this.audioObj.currentTime);
        
        
      }
      this.addEvent(this.audioObj,this.audioEvents,handler);
  
      return () => {
        this.audioObj.pause();
        this.audioObj.currentTime=0;
        this.removeEvent(this.audioObj,this.audioEvents,handler);
      }
    });
  }
  addEvent(obj:any, events:any, handler:any){
    events.forEach(event => {
       obj.addEventListener(event,handler);
      
    });
  
  }
  removeEvent(obj:any, events:any, handler:any){
    events.forEach(event => {
      obj.removeEventListener(event,handler);
  });
  }
  setSeekTo(eve:any){
    this.audioObj.currentTime= eve.target.value;
  
  }
  setVolume(eve:any){
    this.audioObj.volume= eve.target.value;
    console.log(eve.target.value);
    
  }
  openFile(url:any){
     this.streamObserver(url).subscribe(event => {});
     
  }
  play(){
    this.audioObj.play();
    console.log('Clicked play button');
    
  }
  pause(){
    this.audioObj.pause();
    console.log('Clicked pause button');
  }
  stop(){
    this.audioObj.pause();
    this.audioObj.currentTime=0;
    console.log('Clicked stop button');
  }
  timeFormat(time:any, format="HH:mm:ss"){
        const momentTime = time * 1000;
        return moment.utc(momentTime).format(format);
  }
  }

