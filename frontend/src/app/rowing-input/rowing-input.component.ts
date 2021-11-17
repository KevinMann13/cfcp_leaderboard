import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";
import { CrudService } from '../service/crud.service';


import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rowing-input',
  templateUrl: './rowing-input.component.html',
  styleUrls: ['./rowing-input.component.scss']
})
export class RowingInputComponent {
  rowingInputForm!: FormGroup

  selectedFile!: File;
  selectedFileName!: string;
  progressInfo: any;
  preview!: string;

  errorMessage!: string;

  constructor(
    public dialogRef: MatDialogRef<RowingInputComponent>,
    private crudService: CrudService
  ) {
    this.rowingInputForm = new FormGroup({
      date: new FormControl(new Date(), [Validators.required]),
      meters: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openInput(event: any) {
    event.stopPropagation();
    var finput = document.getElementById("fileInput")
    if (finput) {
      finput.click();
    }
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.preview = e.target.result;
      };

      reader.readAsDataURL(this.selectedFile);

      this.selectedFileName = this.selectedFile.name;
    }
  }


  // upload(idx: number, file: File): void {
  //   this.progressInfos[idx] = { value: 0, fileName: file.name };

  //   if (file) {
  //     this.uploadService.upload(file).subscribe(
  //       (event: any) => {
  //         if (event.type === HttpEventType.UploadProgress) {
  //           this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
  //         } else if (event instanceof HttpResponse) {
  //           const msg = 'Uploaded the file successfully: ' + file.name;
  //           this.message.push(msg);
  //           this.imageInfos = this.uploadService.getFiles();
  //         }
  //       },
  //       (err: any) => {
  //         this.progressInfos[idx].value = 0;
  //         const msg = 'Could not upload the file: ' + file.name;
  //         this.message.push(msg);
  //       });
  //   }
  // }



  rowingInputFormSubmit(): void {
    this.crudService.AddRow(this.rowingInputForm.value.date, this.rowingInputForm.value.meters, this.selectedFile).subscribe(
      (response) => {
        console.log(response);
        this.dialogRef.close()
      },
      (error) => {
        console.log("ERROR");
        console.log(error);
        this.errorMessage = error.error
      }
    )
  }

}
