import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './modules/layout/layout.module';
import { AuthorizationService } from './http/services/authorization/authorization.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule
  ],
  providers: [AuthorizationService]
})
export class CoreModule { }
