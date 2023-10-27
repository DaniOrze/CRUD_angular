import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css'],
})
export class EditUserPageComponent implements OnInit {
  constructor(
    public usersApi: ReqresApiService,
    public dialogRef: MatDialogRef<EditUserPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    console.log('Dados recebidos:', this.data);
    this.createPutUserForm();
  }

  userID = this.data.id;

  public putUserForm!: FormGroup;

  createPutUserForm(): void {
    this.putUserForm = this.formBuilder.group({
      email: [this.data.email, Validators.required],
      first_name: [this.data.first_name, Validators.required],
      last_name: [this.data.last_name, Validators.required],
      avatar: [this.data.avatar, Validators.required],
      id: this.userID,
    });
  }

  public submitForm(): void {
    if (!this.putUserForm.valid) {
      this.snackbarService.showSnackbarError(
        'Necessário preencher todos os campos'
      );
      return;
    }
    const formData = this.putUserForm.value;
    console.log('Dados do formulário para edição:', formData);
    this.usersApi.putUser(formData).subscribe({
      next: (response) => {
        if (response.status == 200) {
          this.snackbarService.showSnackbarSuccess('Sucesso!');
          return;
        }
        this.snackbarService.showSnackbarError('Erro!');
      },
      error: (error) => {
        this.snackbarService.showSnackbarError('Erro!');
      },
    });
  }
}
