
// Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialCustomModule } from '../core/modules/index';
import { ButtonBackComponent } from './button-back/button-back.component';

// Utils

// Components


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ButtonBackComponent
  ],
  exports: [
    ButtonBackComponent,
    MaterialCustomModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  imports: [
    MaterialCustomModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
})
export class SharedModule {}
