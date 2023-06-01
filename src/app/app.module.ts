import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { ItemComponent } from './component/item/item.component';
import { HeaderComponent } from './template/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; // já está aqui
import { MatRadioModule } from '@angular/material/radio'; // já está aqui
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table'; // já está aqui
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ItemComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule, // já está aqui
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule, // já está aqui
    MatRadioModule, // já está aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
