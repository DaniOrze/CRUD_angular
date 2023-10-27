import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPageComponent } from './add-user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { of, throwError } from 'rxjs';
import { mockedPostRequest } from 'src/mocks/usuario.mocks';

describe('AddUserPageComponent', () => {
  let component: AddUserPageComponent;
  let fixture: ComponentFixture<AddUserPageComponent>;
  let reqresApiService: ReqresApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      declarations: [AddUserPageComponent]
    });
    fixture = TestBed.createComponent(AddUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('deve mandar o formulário positivo', () => {
  //   // Crie um esboço da função postUser no serviço de API
  //   const mockUserData = mockedPostRequest;
  //   const userService = TestBed.inject(ReqresApiService);
  //   const snackbarService = TestBed.inject(SnackbarService);
  //   spyOn(userService, 'postUser').and.returnValue(of(mockUserData));
  //   spyOn(snackbarService, 'showSnackbarSuccess');

  //   component.postUserForm.setValue(mockUserData);

  //   component.submitForm();

  //   expect(userService.postUser).toHaveBeenCalledWith(mockUserData);
  //   expect(snackbarService.showSnackbarSuccess).toHaveBeenCalledWith('Sucesso!');
  // });

  // it('deve mandar o formulário negativo', () => {
  //   // Crie um esboço da função postUser no serviço de API para simular um erro
  //   const mockError = new Error('Erro ao fazer a solicitação:');
  //   const userService = TestBed.inject(ReqresApiService);
  //   const snackbarService = TestBed.inject(SnackbarService);

  //   const consoleErrorSpy = spyOn(console, 'error');

  //   spyOn(userService, 'postUser').and.returnValue(throwError(mockError));
  //   spyOn(snackbarService, 'showSnackbarError');

  //   const mockUserData = mockedPostRequest;
  //   component.postUserForm.setValue(mockUserData);

  //   component.submitForm();

  //   expect(userService.postUser).toHaveBeenCalledWith(mockUserData);
  //   expect(snackbarService.showSnackbarError).toHaveBeenCalledWith('Erro!');
  //   expect(consoleErrorSpy).toHaveBeenCalledWith('Erro ao fazer a solicitação:', mockError);
  //   consoleErrorSpy.and.callThrough();
  // });

});
