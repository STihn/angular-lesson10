import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'add-issues',
  templateUrl: './add-issues.component.html',
})
export class DialogContentExampleDialog {
  issueSendForm: FormGroup;

  panelOpenState = false;

  constructor(fb: FormBuilder, public issuesService: AppServiceService) {
    this.issueSendForm = fb.group({
      title: fb.control(''),
      body: fb.control(''),
    });
  }

  send(): void {
    if (!this.issueSendForm.value.title) {
      this.issueSendForm.get('title').setValue(this.issueSendForm.value.body);
    }

    this.issuesService.postIssues(this.issueSendForm.value);
  }

  resetForm() {
    this.issueSendForm.reset();
  }
}
