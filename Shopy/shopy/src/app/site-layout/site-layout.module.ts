import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SectionComponent
  ]
})
export class SiteLayoutModule { }
