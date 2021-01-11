import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './components/container/container.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ButtonComponent } from './components/button/button.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { CarouselPartnersComponent } from './components/carousel-partners/carousel-partners.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerComponent,
    PageNotFoundComponent,
    MenuComponent,
    CardComponent,
    ButtonComponent,
    CardProductsComponent,
    CarouselPartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  get getRequestUrl(): string {
    return "http://127.0.0.1:8000/api";
  }

}
