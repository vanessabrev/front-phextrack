import { Component, Input, OnInit } from '@angular/core';
import { AboutItensInfo } from 'src/app/models/about-us/about-itens-info.model';
import { AboutUsService } from 'src/app/services/api/about-us.service';

@Component({
  selector: 'app-about-itens-info',
  templateUrl: './about-itens-info.component.html',
  styleUrls: ['./about-itens-info.component.scss']
})
export class AboutItensInfoComponent implements OnInit {

  @Input()
  aboutItensInfo = new Array<AboutItensInfo>();

  constructor(private aboutusService: AboutUsService) { }

  ngOnInit(): void {
    this.setAboutItensInfo();
  }

  setAboutItensInfo(): void {
    this.aboutusService.aboutItensInfo$.subscribe((aboutItens: Array<AboutItensInfo>) => {
      this.aboutItensInfo = aboutItens;
    });
  }


}
