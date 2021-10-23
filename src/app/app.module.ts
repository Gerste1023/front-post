import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
