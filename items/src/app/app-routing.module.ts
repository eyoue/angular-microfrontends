import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoComponent} from "./info/info.component";
import {APP_BASE_HREF} from "@angular/common";


const routes: Routes = [
    {path: '**', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
    providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
