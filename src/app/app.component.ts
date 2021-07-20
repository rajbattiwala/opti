import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'opti-mix';

  scrHeight:any 
  scrWidth:any;

  orient = screen.orientation
  typetemp = screen.orientation.type
  typetemp1 = screen.orientation.angle

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
    console.log(this.typetemp);
    console.log(this.typetemp1);

    screen.orientation.addEventListener("change", function(e) {
      let typetemp = screen.orientation.type
      let typetemp1 = screen.orientation.angle

      if(typetemp === "landscape-primary" && typetemp1 === 90){
        let temp = document.getElementById('port') as HTMLElement
        temp.style.display = "none"
        let temp1 = document.getElementById('mobile-land') as HTMLElement
        temp1.style.display = "block"
      }
      else{
        let temp = document.getElementById('port') as HTMLElement
        temp.style.display = "block"
        let temp1 = document.getElementById('mobile-land') as HTMLElement
        temp1.style.display = "none"
      }
    }, false);

    /*if(this.scrWidth < 500){
      if(this.scrWidth >= this.scrHeight){
        let temp = document.getElementById('port') as HTMLElement
        temp.style.display = "none"
        let temp1 = document.getElementById('land') as HTMLElement
        temp1.style.display = "block"
      }
      else{
        let temp = document.getElementById('port') as HTMLElement
        temp.style.display = "block"
        let temp1 = document.getElementById('land') as HTMLElement
        temp1.style.display = "none"
      }
    }*/
  }
  constructor() {  }
  
}


