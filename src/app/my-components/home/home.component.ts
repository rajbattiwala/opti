import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hamburger = document.querySelector(".hamburger");
  navMenu = document.querySelector(".nav-menu");
  navLink = document.querySelectorAll(".nav-link");

  open:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  mobileMenu() {
    this.open = ! this.open
  }

  closeMenu() {
    this.open = false
  }

}
