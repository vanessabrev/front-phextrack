import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  blog: any;
  constructor(@Inject(DOCUMENT) document: Document) {
    this.blog = document.getElementById("blog")
    console.log('document', document)
    console.log('this.blog', this.blog)
    

  }
  ngAfterViewInit() {
    var test = (<HTMLInputElement>document.getElementById("blog"))
    console.log('test', test)

  }


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

  moveScrollTransition(element): void {

    // var $doc = $('html, body');
    // $('.scrollSuave').click(function () {
    //   $doc.animate({
    //     scrollTop: $($.attr(this, 'href')).offset().top
    //   }, 100);
    //   return false;
    // });


    console.log("aqui!", this.blog);
    window.scrollTo(0, 0);




  }

}

