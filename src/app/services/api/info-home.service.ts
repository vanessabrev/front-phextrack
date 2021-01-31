import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InfoHomeModel } from 'src/app/models/home/info-home.model';
import { environment } from 'src/environments/environment';
import { ErroLogService } from '../erro-log.service';

@Injectable({
  providedIn: 'root'
})
export class InfoHomeService {

  readonly api = environment.apiUrl;

  private infoHomesSubject = new Subject<Array<InfoHomeModel>>();
  infoHome$ = this.infoHomesSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private errorLog: ErroLogService
  ) {
    this.getInfoHomes();
  }

  getInfoHomes(): void {
    this.httpClient.get<Array<InfoHomeModel>>(`${this.api}/info-homes`)
      .toPromise().then((infos: Array<InfoHomeModel>) => {
        this.infoHomesSubject.next(infos);
      }, err => this.errorLog.showError(err, 'InfoHomeService'));
  }
}
