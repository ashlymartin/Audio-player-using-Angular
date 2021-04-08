import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as moment from 'moment';
@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.css']
})
export class InternationalComponent implements OnInit {

  constructor() { }
audioObj;
audioEvents;
nfiles;
currentTime ;
duration;
 seek;

  
 ngOnInit() {

this.audioObj = new Audio();
 this.audioEvents = [
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
 this.nfiles=[{id:1, url: './assets/d.mpeg', name : 'luis fonsi despacito'},
          {id:2, url: './assets/j.mpeg', name : 'justin bieber sorry'},
          {id:3, url: './assets/k.mpeg', name : 'psy gangnam style'},
          {id:4, url: './assets/s.mpeg', name : 'wiz khalifa see you again'},
          {id:5, url: './assets/m.mpeg', name : 'mark ronson uptown funk'}

        ];
 
this.currentTime = '00:00:00';
this.duration ='00:00:00';
 this.seek=0;
 

 this.streamObserver(this.nfiles.url);

      }
      
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
  ngOnDestroy() {
    // destroy audio here
    if(this.audioObj) {
      this.audioObj.play();
      this.audioObj = null;
    }
    }

  }