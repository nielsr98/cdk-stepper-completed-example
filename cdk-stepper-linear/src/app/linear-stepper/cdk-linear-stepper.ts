  import {Component} from '@angular/core';
  import {CdkStepper} from '@angular/cdk/stepper';

  /** @title A custom CDK linear stepper */
  @Component({
    selector: 'cdk-linear-stepper',
    templateUrl: './cdk-linear-stepper.html',
    styleUrls: ['./cdk-linear-stepper.css']
  })
  export class CdkLinearStepper {}

  /** Custom CDK linear stepper component */
  @Component({
    selector: 'example-custom-linear-stepper',
    templateUrl: './example-custom-linear-stepper.html',
    styleUrls: ['./example-custom-linear-stepper.css'],
    providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper}]
  })
  export class CustomLinearStepper extends CdkStepper {

  }




