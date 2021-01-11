import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuModel } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class InfoHomeService {

  readonly api = environment.apiUrl;

  private menusSubject = new Subject<Array<MenuModel>>();
  menu$ = this.menusSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
  ) {
    this.initEventListener();
  }

  initEventListener() { // Metodo para organizar as chamadas do métodos na inicialização do serviço
      this.getMenus();
    // this.getContatos(); // TODO: criar requisição na api para buscar as informações de contatos
    // this.getProdutos();  // TODO: criar requisição na api para buscar as informações dos produtos
  }

  getMenus(): void {
    this.httpClient.get<Array<MenuModel>>(`${this.api}/menus`)
      .toPromise().then((menus: Array<MenuModel>) => {
        this.menusSubject.next(menus);
      });
  }

  getProdutos(): void { }
  getContatos(): void { }
}
