import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { matMenuAnimations, MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './_components/table/table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './_components/card/card.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { StructComponent } from './_components/struct/struct.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { QuantityInputComponent } from './_components/quantity-input/quantity-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    CardComponent,
    ProfileComponent,
    StructComponent,
    NavbarComponent,
    FooterComponent,
    QuantityInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIcon,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
