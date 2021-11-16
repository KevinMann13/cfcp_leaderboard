import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-rowing-input',
  templateUrl: './rowing-input.component.html',
  styleUrls: ['./rowing-input.component.scss']
})
export class RowingInputComponent {
  rowingInputForm!:FormGroup

  constructor(
    public dialogRef: MatDialogRef<RowingInputComponent>,
    private crudService:CrudService
    ) {
      this.rowingInputForm = new FormGroup({
        date: new FormControl(new Date(), [Validators.required]),
        meters: new FormControl('', [Validators.required])
      })
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  rowingInputFormSubmit(): void {
    this.crudService.AddRow(this.rowingInputForm.value.date, this.rowingInputForm.value.meters).subscribe(
      (response) => {this.dialogRef.close()},
      (error) => {console.log("ERROR"); console.log(error)}
    )
  }

}
