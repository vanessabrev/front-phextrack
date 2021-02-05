import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/models/info-home/menu.model';
import { InfoHomeService } from 'src/app/services/api/info-home.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  blog: any;
  listMenus: Array<MenuModel>;
  mobileMenuOpen = true;

  constructor(private infoService: InfoHomeService) {
    this.setListMenus();
  }

  ngOnInit(): void { }

  setListMenus(): void {
    this.infoService.menu$.subscribe((menus: Array<MenuModel>) => {
      this.listMenus = this.sortMenuList(menus);
    });
  }

  ativeToggle(): any {
    this.mobileMenuOpen = !this.mobileMenuOpen;

  }

  sortMenuList(menuList: Array<MenuModel>): Array<MenuModel> {
    return menuList.sort((n1, n2) => n1.position - n2.position);
  }
}
