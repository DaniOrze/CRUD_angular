import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserPageComponent } from './delete-user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { of, throwError } from 'rxjs';

describe('DeleteUserPageComponent', () => {
  let component: DeleteUserPageComponent;
  let fixture: ComponentFixture<DeleteUserPageComponent>;
  let reqresApiService: ReqresApiService;
  let snackbarService: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule, MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      declarations: [DeleteUserPageComponent],
    });
    fixture = TestBed.createComponent(DeleteUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    reqresApiService = TestBed.inject(ReqresApiService);
    snackbarService = TestBed.inject(SnackbarService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('deve chamar deleteUser e mensagem de sucesso no snackbar', () => {
  //   const userId = 7;
  //   const response = {
  //     /* */
  //   };

  //   spyOn(reqresApiService, 'deleteUser').and.returnValue(of(response));
  //   spyOn(snackbarService, 'showSnackbarSuccess');

  //   component.deleteUser(userId);

  //   expect(reqresApiService.deleteUser).toHaveBeenCalledWith(userId);
  //   expect(snackbarService.showSnackbarSuccess).toHaveBeenCalledWith(
  //     'Sucesso!'
  //   );
  // });

  it('deve chamar deleteUser e mensagem de erro no snackbar', () => {
    const userId = 7;
    const error = new Error('Erro!');

    spyOn(reqresApiService, 'deleteUser').and.returnValue(throwError(error));
    spyOn(snackbarService, 'showSnackbarError');

    component.deleteUser(userId);

    expect(reqresApiService.deleteUser).toHaveBeenCalledWith(userId);
    expect(snackbarService.showSnackbarError).toHaveBeenCalledWith('Erro!');
  });

});
