import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
