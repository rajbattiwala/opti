import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hamburger = document.querySelector(".hamburger");
  navMenu = document.querySelector(".nav-menu");
  navLink = document.querySelectorAll(".nav-link");
  darkenBg = document.querySelector(".darken-bg");

  open:boolean = false

  constructor(private elRef: ElementRef, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {   }

  mobileMenu() {
    if(this.open == true){
      this.closeMenu()
    }
    else{
      this.open = true
      let parent = this.renderer.parentNode(this.el.nativeElement);
      let sibling = parent.querySelector('#stat');
      sibling.style.pointerEvents = "none";
      sibling.style.position = "fixed";
      sibling.style.width = "100%";
    }
  }

  closeMenu() {
    this.open = false
    let parent = this.renderer.parentNode(this.el.nativeElement);
    let sibling = parent.querySelector('#stat');
    sibling.style.pointerEvents = "auto";
    sibling.style.position = "static";
  }

}
