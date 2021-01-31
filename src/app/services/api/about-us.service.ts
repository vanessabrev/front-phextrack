import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AboutItensGalleryModel } from 'src/app/models/about-us/about-itens-gallery.model';
import { AboutItensInfoModel } from 'src/app/models/about-us/about-itens-info.model';
import { AboutMainModel } from 'src/app/models/about-us/about-main.model';
import { environment } from 'src/environments/environment';
import { ErroLogService } from '../erro-log.service';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  readonly api = environment.apiUrl;

  private aboutMainSubject = new Subject<AboutMainModel>();
  private aboutItensInfoSubject = new Subject<Array<AboutItensInfoModel>>();
  private aboutItensGallerySubject = new Subject<Array<AboutItensGalleryModel>>();

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
    this.httpClient.get<Array<AboutMainModel>>(`${this.api}/about-us`)
      .toPromise().then((aboutMain: Array<AboutMainModel>) => {
        this.aboutMainSubject.next(aboutMain[0]);
      }, err => this.errorLog.showError(err, 'AboutUsService'));
  }

  getAboutItensInfo(): void {
    this.httpClient.get<Array<AboutItensInfoModel>>(`${this.api}/about-itens`)
      .toPromise().then((aboutItens: Array<AboutItensInfoModel>) => {
        this.aboutItensInfoSubject.next(aboutItens);
      }, err => this.errorLog.showError(err, 'AboutUsService'));
  }

  getAboutGallery(): void {
    this.httpClient.get<Array<AboutItensGalleryModel>>(`${this.api}/about-gallery`)
      .toPromise().then((aboutItens: Array<AboutItensGalleryModel>) => {
        this.aboutItensGallerySubject.next(aboutItens);
      }, err => this.errorLog.showError(err, 'AboutUsService'));
  }
}
