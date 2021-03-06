import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { NumericCompleteTemplateDrivenValidationDirectivesComponent } from './complete/numeric-complete.component';
import { NumericAcceptValueTemplateDrivenValidationDirectivesComponent } from './acceptValue/numeric-accept-value.component';
import { NumericAllowDecimalTemplateDrivenValidationDirectivesComponent } from './allowDecimal/numeric-allow-decimal.component';
import { NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/numeric-conditional-expression.component';
import { NumericMessageTemplateDrivenValidationDirectivesComponent } from './message/numeric-message.component';
import { NumericIsFormatTemplateDrivenValidationDirectivesComponent } from './isFormat/numeric-is-format.component';
import { NumericMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/numeric-message-key.component';
import { NumericAddTemplateDrivenValidationDirectivesComponent } from './add/numeric-add.component';

@NgModule({
  declarations: [
	NumericCompleteTemplateDrivenValidationDirectivesComponent,
	NumericAcceptValueTemplateDrivenValidationDirectivesComponent,
	NumericAllowDecimalTemplateDrivenValidationDirectivesComponent,
	NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	NumericMessageTemplateDrivenValidationDirectivesComponent,
	NumericIsFormatTemplateDrivenValidationDirectivesComponent,
	NumericMessageKeyTemplateDrivenValidationDirectivesComponent,
	NumericAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	NumericCompleteTemplateDrivenValidationDirectivesComponent,
	NumericAcceptValueTemplateDrivenValidationDirectivesComponent,
	NumericAllowDecimalTemplateDrivenValidationDirectivesComponent,
	NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	NumericMessageTemplateDrivenValidationDirectivesComponent,
	NumericIsFormatTemplateDrivenValidationDirectivesComponent,
	NumericMessageKeyTemplateDrivenValidationDirectivesComponent,
	NumericAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	NumericCompleteTemplateDrivenValidationDirectivesComponent,
	NumericAcceptValueTemplateDrivenValidationDirectivesComponent,
	NumericAllowDecimalTemplateDrivenValidationDirectivesComponent,
	NumericConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	NumericMessageTemplateDrivenValidationDirectivesComponent,
	NumericIsFormatTemplateDrivenValidationDirectivesComponent,
	NumericMessageKeyTemplateDrivenValidationDirectivesComponent,
	NumericAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  NumericTemplateDrivenValidationDirectivesExtendedModule { }
