import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-gallery',
  templateUrl: './about-gallery.component.html',
  styleUrls: ['./about-gallery.component.scss']
})
export class AboutGalleryComponent implements OnInit {

  slideIndex: number = 1;
  slideSize: number = 3;

  constructor() { }

  ngOnInit(): void {  }

  currentSlide(imageIndex: number): void {
    this.slideIndex = imageIndex;
  }

  prevSlide(): void {
    (this.slideIndex > this.slideSize) ? this.slideIndex-- : this.slideIndex = this.slideSize;
  }

  nextSlide(): void {
    (this.slideIndex < this.slideSize) ? this.slideIndex++ : this.slideIndex = 1;
  }
}

