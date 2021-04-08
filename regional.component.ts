import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as moment from 'moment';
@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.css']
})
export class RegionalComponent implements OnInit {

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
    url: './assets/muqabla.mpeg',
    name : 'Muqabla-StreetDancer',
  
    },
  ];
  files1=[
    {
    url: './assets/sai.mpeg',
    name : 'Shaitan Ka Saala',
  
    },
  ];
  files2=[
    {
    url: './assets/yad.mpeg',
    name : 'Yaad Piya Ki Aane Lagi',
  
    },
  ];
  files3=[
    {
    url: './assets/aki.mpeg',
    name : 'Ankhiyon Se Goli Mare',
  
    },
  ];
  files4=[
      {
      url: './assets/saki.mpeg',
      name : 'O Saki Saki',
    
      },
  ];
  files5=[
        {
        url: './assets/dhe.mpeg',
        name : 'Dheeme Dheeme',
      
        },
      ];
  files6=[
          {
          url: './assets/nora.mpeg',
          name : 'Nach Meri Rani',
        
          },
  ];
  files7=[
    {
    url: './assets/coca.aac',
    name : 'Coca Cola',
  
    },
];
files8=[
  {
  url: './assets/bu.mpeg',
  name : 'Butta Bomma',

  },
];
files9=[
  {
  url: './assets/sara.mpeg',
  name : 'Sara Sari',

  },
];
files10=[
  {
  url: './assets/sam.mpeg',
  name : 'Samajavaragamana',

  },
];
files11=[
  {
  url: './assets/ninne.mpeg',
  name : 'Ninne Ninne',

  },
];
files12=[
  {
  url: './assets/ram.mpeg',
  name : 'Ramulo Ramula',

  },
];
files13=[
  {
  url: './assets/par.mpeg',
  name : 'Parayuvan',

  },
];
files14=[
  {
  url: './assets/nee.aac',
  name : 'Nee Mukhilo',

  },
];
files15=[
  {
  url: './assets/ner.mpeg',
  name : 'Neeyila Neram',

  },
];
files16=[
  {
  url: './assets/uyi.mpeg',
  name : 'Uyiril Thodum',

  },
];
files17=[
  {
  url: './assets/ara.mpeg',
  name : 'Aaradhike',

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

