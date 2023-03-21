import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import{ HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, 
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
