import { Component, OnInit } from '@angular/core';
import { SocialMedia } from 'src/app/models/social-media.model';
import { SocialMediasService } from 'src/app/services/api/social-medias.service';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss']
})
export class SocialMediasComponent implements OnInit {

  constructor(private socialMediaService: SocialMediasService) { }

  listSocialMedias = new SocialMedia();

  ngOnInit(): void {
    this.setSocialMedias();
  }

  setSocialMedias(): void {
    this.socialMediaService.socialMedia$.subscribe((socialMedias: SocialMedia) => {
      this.listSocialMedias = socialMedias;
    });
  }


}
