import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './core/modules/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpService } from './core/http/services/http/http.service';
import { AuthorizationService } from './core/http/services/authorization/authorization.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationInterceptor } from './core/http/interceptors/authorization.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, AuthorizationService, { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
