import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUsersApiModel } from 'src/app/interfaces/iusers-api-model';
import { DeleteUserPageComponent } from 'src/app/pages/delete-user-page/delete-user-page.component';
import { EditUserPageComponent } from 'src/app/pages/edit-user-page/edit-user-page.component';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css'],
})
export class TableUsersComponent implements OnInit {
  @Input() user: IUsersApiModel | undefined;
  porPagina = 10;
  page = 1;

  @ViewChild('filter', { static: true }) filterInput!: ElementRef;

  listaDeUsuarios: IUsersApiModel[] = [];
  listaDeUsuariosCompleta: IUsersApiModel[] = [];
  totalElementos = this.porPagina * this.page;
  totalCompleto = this.totalElementos;

  constructor(
    public usersApi: ReqresApiService,
    public dialog: MatDialog,
    private snackbarService: SnackbarService
  ) {}

  onPageChange(event: any): void {
    this.page = event.pageIndex + 1;
    this.porPagina = event.pageSize;
    this.loadUsers();
    this.filterInput.nativeElement.value = '';
  }

  loadUsers(): void {
    this.usersApi.getUsers(this.page, this.porPagina).subscribe({
      next: (response) => {
        if (response.status == 200) {
          this.listaDeUsuarios = response.body?.data!;
          this.listaDeUsuariosCompleta = response.body?.data!;
          this.totalElementos = response.body?.total!;
          this.totalCompleto = response.body?.total!;
          return;
        }
        this.snackbarService.showSnackbarError('Erro ao carregar usuários!');
      },
      error: (error) => {
        this.snackbarService.showSnackbarError('Erro ao carregar usuários!');
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
      this.totalElementos = this.totalCompleto;
      return;
    }
    this.listaDeUsuarios = this.listaDeUsuariosCompleta.filter(
      (user) =>
        user?.first_name?.toLowerCase().includes(text.toLowerCase()) ||
        user?.last_name?.toLowerCase().includes(text.toLowerCase())
    );
    this.totalElementos = this.listaDeUsuarios.length;
  }
}
