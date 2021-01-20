import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SocialMedia } from 'src/app/models/social-media.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialMediasService {

  readonly api = environment.apiUrl;

  private socialMediasSubject = new Subject<SocialMedia>();
  socialMedia$ = this.socialMediasSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getSocialMedias();
  }

  getSocialMedias(): void {
    this.httpClient.get<Array<SocialMedia>>(`${this.api}/social-medias`)
      .toPromise().then((socialMedias: Array<SocialMedia>) => {
        this.socialMediasSubject.next(socialMedias[0]);
      });
  }

}
