import { HttpClientModule } from '@angular/common/http'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { WebcomponentsAngularModule } from '@govbr-ds/webcomponents-angular'
import { defineCustomElements } from '@govbr-ds/webcomponents-stencil/loader'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcomponentsAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
