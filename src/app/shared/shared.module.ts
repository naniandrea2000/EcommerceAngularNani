import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RemovewhitespacesPipe } from 'src/app/core/pipes/removewhitespaces.pipe';
@NgModule({
  declarations: [RemovewhitespacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RemovewhitespacesPipe
  ]
})
export class SharedModule { }