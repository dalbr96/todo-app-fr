import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { appRoutes } from './app-routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
