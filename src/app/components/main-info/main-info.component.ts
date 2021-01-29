import { Component, Input, OnInit } from '@angular/core';
import { MainInfoHome } from 'src/app/models/main-info-home.model';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  @Input()
  mainInfoHome: MainInfoHome;

  constructor() { }

  ngOnInit(): void { }

}
