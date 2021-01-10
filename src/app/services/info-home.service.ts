import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppModule } from '../app.module';
import { MenuModel } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class InfoHomeService {

  private menusSubject = new Subject<Array<MenuModel>>();
  menu$ = this.menusSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private appModule: AppModule
  ) {
    this.initEventListener();
  }

  initEventListener() { // Metodo para organizar as chamadas do métodos na inicialização do serviço
      this.getMenus();
    // this.getContatos(); // TODO: criar requisição na api para buscar as informações de contatos
    // this.getProdutos();  // TODO: criar requisição na api para buscar as informações dos produtos
  }

  getMenus(): void {
    this.httpClient.get<Array<MenuModel>>(`${this.appModule.getRequestUrl}/menu`)
      .toPromise().then((menus: Array<MenuModel>) => {
        this.menusSubject.next(menus);
      });
  }

  getProdutos(): void { }
  getContatos(): void { }
}
