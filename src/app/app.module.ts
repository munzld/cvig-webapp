import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { EventsModule } from './events/events.module';
import { LiteratureModule } from './literature/literature.module';
import { MeetingsModule } from './meetings/meetings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    ContactModule,
    EventsModule,
    LiteratureModule,
    MeetingsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
