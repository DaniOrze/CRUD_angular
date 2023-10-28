import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.css'],
})
export class AddUserPageComponent implements OnInit {
  constructor(
    public usersApi: ReqresApiService,
    public dialogRef: MatDialogRef<AddUserPageComponent>,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.createPostUserForm();
  }

  public postUserForm!: FormGroup;

  createPostUserForm(): void {
    this.postUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      avatar: ['', [Validators.required, Validators.pattern(/^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/)]],
    });
  }

  public submitForm(): void {
    if (!this.postUserForm.valid) {
      this.snackbarService.showSnackbarError(
        'Necessário preencher todos os campos'
      );
      return;
    }
    const formData = this.postUserForm.value;
    console.log('Dados do formulário:', formData);
    this.usersApi.postUser(formData).subscribe({
      next: (response) => {
        if (response.status == 201) {
          this.snackbarService.showSnackbarSuccess('Usuário adicionado com sucesso!');
          this.dialogRef.close();
          return;
        }
        this.snackbarService.showSnackbarError('Não foi possível adicionar usuário!');
      },
      error: (error) => {
        this.snackbarService.showSnackbarError('Erro!');
      },
    });
  }
}
