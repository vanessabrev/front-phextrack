import { Component, OnInit } from '@angular/core';
import { MainInfoHomeModel } from 'src/app/models/info-home/main-info-home.model';
import { InfoHomeService } from 'src/app/services/api/info-home.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  mainInfoHome: MainInfoHomeModel;
  constructor(private mainInfoHomeService: InfoHomeService) { }

  ngOnInit(): void {
    this.setMainInfoHome();
  }

  setMainInfoHome(): void {
    this.mainInfoHome = { title: 'test title', subtitle: 'sub teste', image: 'image' };
    // this.mainInfoHomeService.mainHome$.subscribe((mainInfo: MainInfoHome) => {
    //   this.mainInfoHome = mainInfo;
    // });
  }

}
