import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUsersApiModel } from 'src/app/interfaces/iusers-api-model';
import { DeleteUserPageComponent } from 'src/app/pages/delete-user-page/delete-user-page.component';
import { EditUserPageComponent } from 'src/app/pages/edit-user-page/edit-user-page.component';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})

export class UserCardComponent {
  @Input() user: IUsersApiModel | undefined;

  constructor(
    public usersApi: ReqresApiService,
    public dialog: MatDialog,
  ) {}

  openDialogEdit(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ): void {
    this.dialog.open(EditUserPageComponent, {
      data: { id: this.user?.id, first_name: this.user?.first_name, last_name: this.user?.last_name, email: this.user?.email, avatar: this.user?.avatar },
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogDelete(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ): void {
    this.dialog.open(DeleteUserPageComponent, {
      data: { id: this.user?.id, first_name: this.user?.first_name, last_name: this.user?.last_name, email: this.user?.email, avatar: this.user?.avatar },
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
