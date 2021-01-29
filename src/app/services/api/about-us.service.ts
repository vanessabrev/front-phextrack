import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AboutItensGallery } from 'src/app/models/about-us/about-itens-gallery.model';
import { AboutItensInfo } from 'src/app/models/about-us/about-itens-info.model';
import { AboutMain } from 'src/app/models/about-us/about-main.model';
import { environment } from 'src/environments/environment';
import { ErroLogService } from '../erro-log.service';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  readonly api = environment.apiUrl;

  private aboutMainSubject = new Subject<AboutMain>();
  private aboutItensInfoSubject = new Subject<Array<AboutItensInfo>>();
  private aboutItensGallerySubject = new Subject<Array<AboutItensGallery>>();

  aboutMain$ = this.aboutMainSubject.asObservable();
  aboutItensInfo$ = this.aboutItensInfoSubject.asObservable();
  aboutItensGallery$ = this.aboutItensGallerySubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private errorLog: ErroLogService
  ) {
    this.getAboutMain();
    this.getAboutItensInfo();
    this.getAboutGallery();
  }

  getAboutMain(): void {
    this.httpClient.get<Array<AboutMain>>(`${this.api}/about-us`)
      .toPromise().then((aboutMain: Array<AboutMain>) => {
        this.aboutMainSubject.next(aboutMain[0]);
      }, err => this.errorLog.showError(err, 'AboutUsService'));
  }

  getAboutItensInfo(): void {
    this.httpClient.get<Array<AboutItensInfo>>(`${this.api}/about-itens`)
      .toPromise().then((aboutItens: Array<AboutItensInfo>) => {
        this.aboutItensInfoSubject.next(aboutItens);
      }, err => this.errorLog.showError(err, 'AboutUsService'));
  }

  getAboutGallery(): void {
    this.httpClient.get<Array<AboutItensGallery>>(`${this.api}/about-gallery`)
      .toPromise().then((aboutItens: Array<AboutItensGallery>) => {
        this.aboutItensGallerySubject.next(aboutItens);
      }, err => this.errorLog.showError(err, 'AboutUsService'));
  }
}
