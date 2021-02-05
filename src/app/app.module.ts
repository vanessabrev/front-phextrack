import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutGalleryComponent } from './components/about/about-gallery/about-gallery.component';
import { AboutItensInfoComponent } from './components/about/about-itens-info/about-itens-info.component';
import { AboutMainComponent } from './components/about/about-main/about-main.component';
import { CarouselPartnersComponent } from './components/carousel-partners/carousel-partners.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InfoContactsComponent } from './components/contacts/info-contacts/info-contacts.component';
import { SendEmailComponent } from './components/contacts/send-email/send-email.component';
import { ConvertBase64Component } from './components/convert-base64/convert-base64.component';
import { ButtonRoundedComponent } from './components/general/button-rounded/button-rounded.component';
import { ButtonComponent } from './components/general/button/button.component';
import { CardComponent } from './components/general/card/card.component';
import { AreatextComponent } from './components/general/form/areatext/areatext.component';
import { InputTextComponent } from './components/general/form/input-text/input-text.component';
import { ImageUploadComponent } from './components/general/image-upload/image-upload.component';
import { TitleComponent } from './components/general/title/title.component';
import { InfoHomeComponent } from './components/home/info-home/info-home.component';
import { MainInfoComponent } from './components/home/main-info/main-info.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { CardProductsComponent } from './components/products/card-products/card-products.component';
import { SocialMediasComponent } from './components/social-medias/social-medias.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InfoContactsPipe } from './pipes/info-contacts.pipe';
import { PostalCodePipe } from './pipes/postal-code.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    InfoHomeComponent,
    MainInfoComponent,
    AboutMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
