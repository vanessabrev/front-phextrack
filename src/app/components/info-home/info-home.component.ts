import { Component, OnInit } from '@angular/core';
import { InfoHomeModel } from 'src/app/models/home/info-home.model';
import { InfoHomeService } from 'src/app/services/api/info-home.service';

@Component({
  selector: 'app-info-home',
  templateUrl: './info-home.component.html',
  styleUrls: ['./info-home.component.scss']
})
export class InfoHomeComponent implements OnInit {

  constructor(private infoHomeService: InfoHomeService) { }

  mainInfoHome = new InfoHomeModel();
  listItensInfoHome = new Array<InfoHomeModel>();

  private ID_MAIN_INFO = 1;

  ngOnInit(): void {
    this.setInfoHomes();
  }

  setInfoHomes(): void {
    this.infoHomeService.infoHome$.subscribe((infos: Array<InfoHomeModel>) => {
      this.organizeInfoHomes(infos);
    });
  }

  organizeInfoHomes(infos: Array<InfoHomeModel>): void {
    this.mainInfoHome = infos.filter(infoHome => infoHome.id === this.ID_MAIN_INFO)[0];
    this.listItensInfoHome = infos.filter(infoHome => infoHome.id !== this.ID_MAIN_INFO);
  }

}
