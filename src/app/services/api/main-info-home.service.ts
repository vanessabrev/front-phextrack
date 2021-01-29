import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MainInfoHome } from 'src/app/models/main-info-home.model';
import { environment } from 'src/environments/environment';
import { ErroLogService } from '../erro-log.service';

@Injectable({
  providedIn: 'root'
})
export class MainInfoHomeService {
  readonly api = environment.apiUrl;

  private mainHomeSubject = new Subject<MainInfoHome>();
  mainHome$ = this.mainHomeSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private errorLog: ErroLogService
  ) {
    this.getMainHome();
  }

  getMainHome(): void {
    this.httpClient.get<MainInfoHome>(`${this.api}/main-info-home`)
      .toPromise().then((infos: MainInfoHome) => {
        this.mainHomeSubject.next(infos);
        // }, err => console.log('Erro: '+ (err.message)));
      }, err => this.errorLog.showError(err));
  }
}
