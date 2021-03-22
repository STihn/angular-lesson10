import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Issues } from './issues.interface';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DialogContentExampleDialog } from './add-issues.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'mod4',
  templateUrl: './mod4.component.html',
  styleUrls: ['./mod4.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class Mod4Component implements OnInit {
  issues;

  form: FormGroup;
  expandedElement: Issues | null;
  dataSource: MatTableDataSource<any>;

  displayedColumns = [
    'state',
    'created',
    'title',
    'url',
    'link',
    'number'
  ];

  constructor(
    public service: AppServiceService,
    private formBilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.service.getIssues().subscribe((issues: Issues) => {
      this.form = this.formBilder.group({
        issues: this.formBilder.array([]),
      });

      issues.forEach((issue, index) =>

        (this.form.get('issues') as FormArray).insert(
          index,
          this.formBilder.group({
            number: this.formBilder.control(issue.number),
            state: this.formBilder.control(issue.state),
            created: this.formBilder.control(issue.created_at),
            title: this.formBilder.control(issue.title),
            url: this.formBilder.control(issue.url),
            link: this.formBilder.control(issue.user.url),
            body: this.formBilder.control(issue.body)
          })
        )
      );
      this.dataSource = new MatTableDataSource(
        (this.form.get('issues') as FormArray).controls
      );
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  replayDialog(issueIndex: any) {
    this.dialog.open(ReplayIssueDialog, {
      data: issueIndex,
    });
  }
}

@Component({
  selector: 'replay-issue.component',
  templateUrl: 'replay-issue.component.html',
})
export class ReplayIssueDialog {
  body: string;
  // service: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public num: number,
    public service: AppServiceService
  ) {}

  addComment() {
    console.log('Комент', this.body);
    this.service.addComent(this.num, this.body);
  }

  closeIssure() {
    this.service.closeIssure(this.num);
  }
}
