import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavbarComponent, FooterComponent, MaterialModule],
})
export class SharedModule {}
