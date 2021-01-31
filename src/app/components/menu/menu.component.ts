import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/models/info-home/menu.model';
import { InfoHomeService } from 'src/app/services/api/info-home.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  blog: any;
  listMenus: Array<MenuModel>;

  constructor(
    private infoService: InfoHomeService,
    @Inject(DOCUMENT) document: Document
  ) {
    this.blog = document.getElementById("blog")
  }

  ngAfterViewInit() {
    var test = (<HTMLInputElement>document.getElementById("blog"))
  }


  ngOnInit(): void {
    this.initEventsListeners();
  }

  initEventsListeners(): void {
    this.setListMenus();
  }

  setListMenus(): void {
    this.infoService.menu$.subscribe((menus: Array<MenuModel>) => {
      this.listMenus = this.sortMenuList(menus);
    });
  }


  ativeToggle(event): any {
    console.log('event', event)
    event.classList.toggle('active');
  }

  moveScrollTransition(element): void {

    // var $doc = $('html, body');
    // $('.scrollSuave').click(function () {
    //   $doc.animate({
    //     scrollTop: $($.attr(this, 'href')).offset().top
    //   }, 100);
    //   return false;
    // });

    window.scrollTo(0, 0);

  }

  sortMenuList(menuList: Array<MenuModel>): Array<MenuModel> {
    return menuList.sort((n1, n2) => n1.position - n2.position);
  }

}

