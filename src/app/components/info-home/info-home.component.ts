import { Component, OnInit } from '@angular/core';
import { InfoHome } from 'src/app/models/info-home.model';
import { InfoHomeService } from 'src/app/services/api/info-home.service';

@Component({
  selector: 'app-info-home',
  templateUrl: './info-home.component.html',
  styleUrls: ['./info-home.component.scss']
})
export class InfoHomeComponent implements OnInit {

  constructor(private infoHomeService: InfoHomeService) { }

  mainInfoHome: InfoHome;
  listItensInfoHome: Array<InfoHome>;

  private ID_MAIN_INFO = 1;

  ngOnInit(): void {
    this.setInfoHomes();
  }

  setInfoHomes(): void {
    this.infoHomeService.infoHome$.subscribe((infos: Array<InfoHome>) => {
      this.organizeInfoHomes(infos);
    });
  }

  organizeInfoHomes(infos: Array<InfoHome>): void {
    this.mainInfoHome = infos.filter(infoHome => infoHome.id === this.ID_MAIN_INFO)[0];
    this.listItensInfoHome = infos.filter(infoHome => infoHome.id !== this.ID_MAIN_INFO);
  }

}
