import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { DialogContentExampleDialog } from './add-issues.component';
import { Mod4Component, ReplayIssueDialog } from './mod4.component';

@NgModule({
  declarations: [Mod4Component, ReplayIssueDialog, DialogContentExampleDialog],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  exports: [Mod4Component, ReplayIssueDialog, DialogContentExampleDialog],
})
export class Mod4Module {}
