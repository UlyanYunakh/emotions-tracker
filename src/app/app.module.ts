import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutosizeModule } from 'ngx-autosize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EmotionScaleComponent } from './emotion-scale/emotion-scale.component';
import { EmotionSelectorComponent } from './emotion-selector/emotion-selector.component';
import { DescriptionFieldComponent } from './description-field/description-field.component';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';


registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    EmotionScaleComponent,
    EmotionSelectorComponent,
    DescriptionFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutosizeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
