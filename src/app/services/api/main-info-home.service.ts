import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MainInfoHomeModel } from 'src/app/models/home/main-info-home.model';
import { environment } from 'src/environments/environment';
import { ErroLogService } from '../erro-log.service';

@Injectable({
  providedIn: 'root'
})
export class MainInfoHomeService {
  readonly api = environment.apiUrl;

  private mainHomeSubject = new Subject<MainInfoHomeModel>();
  mainHome$ = this.mainHomeSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private errorLog: ErroLogService
  ) {
    this.getMainHome();
  }

  getMainHome(): void {
    this.httpClient.get<MainInfoHomeModel>(`${this.api}/info-main`)
      .toPromise().then((infos: MainInfoHomeModel) => {
        this.mainHomeSubject.next(infos);
      }, err => this.errorLog.showError(err, 'MainInfoHomeService'));
  }
}
