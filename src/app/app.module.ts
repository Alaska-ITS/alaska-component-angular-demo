import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartInfoComponent } from './start-info/start-info.component';
import { InputsDemoComponent } from './inputs-demo/inputs-demo.component';
import { LayoutDemoComponent } from './layout-demo/layout-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    StartInfoComponent,
    InputsDemoComponent,
    LayoutDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] // add this line
})
export class AppModule { }
