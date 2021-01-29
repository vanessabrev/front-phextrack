import { Component, OnInit } from '@angular/core';
import { AboutUsService } from 'src/app/services/api/about-us.service';

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.scss']
})
export class AboutMainComponent implements OnInit {

  constructor(private aboutUsService: AboutUsService) { }

  ngOnInit(): void {  }

}
