import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // let mainNav = document.getElementById('js-menu');
    // let navBarToggle = document.getElementById('js-navbar-toggle');

    // navBarToggle.addEventListener('click', function () {
    //   mainNav.classList.toggle('active');
    // });
  }

  ativeToggle(event): any {
    console.log('event', event)
    event.classList.toggle('active');
  }

}
