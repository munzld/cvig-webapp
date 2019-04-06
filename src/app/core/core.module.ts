import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [NavComponent, HeaderComponent]
})
export class CoreModule { }
