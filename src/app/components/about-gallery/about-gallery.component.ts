import { Component, OnInit } from '@angular/core';
import { AboutItensGalleryModel } from 'src/app/models/about-us/about-itens-gallery.model';
import { AboutUsService } from 'src/app/services/api/about-us.service';

@Component({
  selector: 'app-about-gallery',
  templateUrl: './about-gallery.component.html',
  styleUrls: ['./about-gallery.component.scss']
})
export class AboutGalleryComponent implements OnInit {

  slideIndex: number = 1;
  slideSize: number = 3;

  aboutItensGallery = new Array<AboutItensGalleryModel>();

  constructor(private aboutusService: AboutUsService) { }

  ngOnInit(): void {
    this.setAboutItensInfo();
  }

  setAboutItensInfo(): void {
    this.aboutusService.aboutItensGallery$.subscribe((aboutItens: Array<AboutItensGalleryModel>) => {
      console.log('aboutItens', aboutItens)
      this.aboutItensGallery = aboutItens;
    });
  }

  currentSlide(imageIndex: number): void {
    this.slideIndex = imageIndex;
  }

  prevSlide(): void {
    (this.slideIndex > 1) ? this.slideIndex-- : this.slideIndex = this.slideSize;
  }

  nextSlide(): void {
    (this.slideIndex < this.slideSize) ? this.slideIndex++ : this.slideIndex = 1;
  }

  identify(index: number, item: AboutItensGalleryModel) {
    return item.id;
  }
}

