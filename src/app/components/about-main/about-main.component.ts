import { Component, OnInit } from '@angular/core';
import { AboutMain } from 'src/app/models/about-us/about-main.model';
import { AboutUsService } from 'src/app/services/api/about-us.service';

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.scss']
})
export class AboutMainComponent implements OnInit {

  aboutMainInfo= new AboutMain();

  constructor(private aboutUsService: AboutUsService) { }

  ngOnInit(): void {
    this.setAboutMainInfo();
  }

  setAboutMainInfo(): void {
    this.aboutUsService.aboutMain$.subscribe((aboutItens: AboutMain) => {
      this.aboutMainInfo = aboutItens;
    });
  }
}
