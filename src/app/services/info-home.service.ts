import { Injectable } from '@angular/core';
import { MenuModel } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class InfoHomeService {

  constructor() { }

  getMenus(): Array<MenuModel> {
    return [
      { name: "home" },
      { name: "about" },
      { name: "contacts" },
      { name: "products" }
    ]

  }
}
