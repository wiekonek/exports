import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportsService } from './exports.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ExportsService
  ]
})
export class CoreModule { }
