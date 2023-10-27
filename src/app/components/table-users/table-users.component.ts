import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUsersApiModel } from 'src/app/interfaces/iusers-api-model';
import { DeleteUserPageComponent } from 'src/app/pages/delete-user-page/delete-user-page.component';
import { EditUserPageComponent } from 'src/app/pages/edit-user-page/edit-user-page.component';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
})
export class TableUsersComponent implements OnInit {
  @Input() user: IUsersApiModel | undefined;
  porPagina = 10;
  private page = 1;

  listaDeUsuarios: IUsersApiModel[] = [];
  listaDeUsuariosCompleta: IUsersApiModel[] = [];
  snackbarService: any;

  constructor(public usersApi: ReqresApiService, public dialog: MatDialog) {}

  onPageChange(event: any): void {
    this.page = event.pageIndex + 1; // pageIndex começa em 0
    this.porPagina = event.pageSize;
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersApi.getUsers(this.page, this.porPagina).subscribe({
      next: (response) => {
        if (response.status == 200) {
          this.listaDeUsuarios = response.body?.data!;
          this.listaDeUsuariosCompleta = response.body?.data!;
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

  ngOnInit(): void {
    this.loadUsers();
  }

  displayedColumns: string[] = [
    'id',
    'email',
    'first_name',
    'last_name',
    'action',
  ];

  openDialogEdit(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    user: any
  ): void {
    this.dialog.open(EditUserPageComponent, {
      data: {
        id: user?.id,
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        avatar: user?.avatar,
      },
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogDelete(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    user: any
  ): void {
    this.dialog.open(DeleteUserPageComponent, {
      data: {
        id: user?.id,
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        avatar: user?.avatar,
      },
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.listaDeUsuarios = this.listaDeUsuariosCompleta;
    }
    this.listaDeUsuarios = this.listaDeUsuariosCompleta.filter(
      (user) =>
        user?.first_name?.toLowerCase().includes(text.toLowerCase()) ||
        user?.last_name?.toLowerCase().includes(text.toLowerCase())
    );
  }
}
