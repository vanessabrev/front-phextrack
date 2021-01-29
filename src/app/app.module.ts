import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutGalleryComponent } from './components/about-gallery/about-gallery.component';
import { AboutItensInfoComponent } from './components/about-itens-info/about-itens-info.component';
import { ButtonRoundedComponent } from './components/button-rounded/button-rounded.component';
import { ButtonComponent } from './components/button/button.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { CardComponent } from './components/card/card.component';
import { CarouselPartnersComponent } from './components/carousel-partners/carousel-partners.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InfoContactsComponent } from './components/contacts/info-contacts/info-contacts.component';
import { SendEmailComponent } from './components/contacts/send-email/send-email.component';
import { ContainerComponent } from './components/container/container.component';
import { ConvertBase64Component } from './components/convert-base64/convert-base64.component';
import { AreatextComponent } from './components/form/areatext/areatext.component';
import { InputTextComponent } from './components/form/input-text/input-text.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { InfoHomeComponent } from './components/info-home/info-home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SocialMediasComponent } from './components/social-medias/social-medias.component';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InfoContactsPipe } from './pipes/info-contacts.pipe';
import { PostalCodePipe } from './pipes/postal-code.pipe';


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
    CarouselPartnersComponent,
    ConvertBase64Component,
    ContactsComponent,
    SendEmailComponent,
    InfoContactsComponent,
    PostalCodePipe,
    InfoContactsPipe,
    InputTextComponent,
    AreatextComponent,
    ImageUploadComponent,
    SocialMediasComponent,
    TitleComponent,
    ButtonRoundedComponent,
    AboutGalleryComponent,
    AboutItensInfoComponent,
    InfoHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
