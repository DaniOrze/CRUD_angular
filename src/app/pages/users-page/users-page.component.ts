import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUsersApiModel } from 'src/app/interfaces/iusers-api-model';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';
import { AddUserPageComponent } from '../add-user-page/add-user-page.component';
import {
  ExportAsConfig,
  ExportAsService,
  SupportedExtensions,
} from 'ngx-export-as';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {

  user: IUsersApiModel | undefined;

  listaDeUsuarios: IUsersApiModel[] = [];
  filtroNome: string = '';

  constructor(
    public usersApi: ReqresApiService,
    public dialog: MatDialog,
    private exportAsService: ExportAsService
  ) {}

  ngOnInit(): void {  }

  openDialogCreateUser(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AddUserPageComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  exportAsConfig: ExportAsConfig = {
    type: 'xlsx',
    elementIdOrContent: 'table',
  };

  exportCSV() {
    this.exportAsFile('csv');
  }

  exportPDF() {
    this.exportAsFile('pdf');
  }

  exportXLSX() {
    this.exportAsFile('xlsx');
  }

  exportAsFile(format: SupportedExtensions) {
    this.exportAsConfig.type = format;
    this.exportAsService.save(this.exportAsConfig, 'users').subscribe(() => {
      console.log('users exported');
    });
  }
}
