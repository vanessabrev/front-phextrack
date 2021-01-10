import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/models/menu.model';
import { InfoHomeService } from 'src/app/services/info-home.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  blog: any;
  listMenus: Array<MenuModel>;
  apiOn = false;

  constructor(private infoService: InfoHomeService, @Inject(DOCUMENT) document: Document) {
    this.blog = document.getElementById("blog")
    console.log('document', document)
    console.log('this.blog', this.blog)
  }

  ngAfterViewInit() {
    var test = (<HTMLInputElement>document.getElementById("blog"))
    console.log('test', test)
  }


  ngOnInit(): void {
    (this.apiOn) ? this.setListMenus() : this.setListMenusMock();

    // FIXME: Esse trecho comentado é para o toggle do menu
    // let mainNav = document.getElementById('js-menu');
    // let navBarToggle = document.getElementById('js-navbar-toggle');

    // navBarToggle.addEventListener('click', function () {
    //   mainNav.classList.toggle('active');
    // });
  }

  setListMenusMock(): void { //TODO: REMOVER ESSE METODO QUANDO TIVER API FUNCIONANDO
    let menus = new Array<MenuModel>();
    menus = [
      { name: 'Home', reference: '#home', position: 0 },
      { name: 'About', reference: '#about', position: 1 },
      { name: 'Services', reference: '#services', position: 3 },
      { name: 'Contacts', reference: '#contacts', position: 4 }
    ];

    this.listMenus = menus;;

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
    //  menuList.sort((a, b) => this.compareSort(a.filial, b.filial, true));

  }

}

