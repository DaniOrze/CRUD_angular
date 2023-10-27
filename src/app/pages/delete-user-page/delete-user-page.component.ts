import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-delete-user-page',
  templateUrl: './delete-user-page.component.html',
  styleUrls: ['./delete-user-page.component.css'],
})
export class DeleteUserPageComponent {
  constructor(
    public usersApi: ReqresApiService,
    private snackbarService: SnackbarService,
    public dialogRef: MatDialogRef<DeleteUserPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data);
  }

  userID = this.data.id;

  public deleteUser(id: number): void {
    this.usersApi.deleteUser(id).subscribe({
      next: (response) => {
        if (response.status == 204) {
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
