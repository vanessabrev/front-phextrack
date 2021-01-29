import { Component, OnInit } from '@angular/core';
import { MainInfoHome } from 'src/app/models/main-info-home.model';
import { MainInfoHomeService } from 'src/app/services/api/main-info-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mainInfoHome: MainInfoHome;

  constructor(private mainInfoHomeService: MainInfoHomeService) { }

  ngOnInit(): void {
    this.setMainInfoHome();
  }

  setMainInfoHome(): void {
    this.mainInfoHomeService.mainHome$.subscribe((mainInfo: MainInfoHome) => {
      this.mainInfoHome = mainInfo;
    });
  }
}
