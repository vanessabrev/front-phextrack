import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuModel } from '../../models/home/menu.model';
import { ErroLogService } from '../erro-log.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  readonly api = environment.apiUrl;

  private menusSubject = new Subject<Array<MenuModel>>();
  menu$ = this.menusSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private errorLog: ErroLogService
  ) {
    this.getMenus();
  }

  getMenus(): void {
    this.httpClient.get<Array<MenuModel>>(`${this.api}/menus`)
      .toPromise().then((menus: Array<MenuModel>) => {
        this.menusSubject.next(menus);
      }, err => this.errorLog.showError(err, 'MenuService'));
  }
}
