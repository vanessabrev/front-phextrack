import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/api/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  blog: any;
  listMenus: Array<MenuModel>;

  constructor(private infoService: MenuService, @Inject(DOCUMENT) document: Document) {
    this.blog = document.getElementById("blog")
    console.log('document', document)
    console.log('this.blog', this.blog)
  }

  ngAfterViewInit() {
    var test = (<HTMLInputElement>document.getElementById("blog"))
    console.log('test', test)
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

    console.log("aqui!", this.blog);
    window.scrollTo(0, 0);

  }

  sortMenuList(menuList: Array<MenuModel>): Array<MenuModel> {
    return menuList.sort((n1, n2) => n1.position - n2.position);
  }

}

