import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {
  CdkLinearStepper,
  CustomLinearStepper
} from "./linear-stepper/cdk-linear-stepper";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from "@angular/common";

export {
  CdkLinearStepper,
  CustomLinearStepper
};

const EXAMPLES = [
  CdkLinearStepper,
  CustomLinearStepper
];

@NgModule({
  declarations: [
    AppComponent,
    EXAMPLES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkStepperModule,
    CommonModule
  ],
  exports: EXAMPLES,
  entryComponents: EXAMPLES,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
