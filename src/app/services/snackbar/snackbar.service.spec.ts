import { TestBed } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [SnackbarService],
    });
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve abrir com mensagem de sucesso', () => {
    const message = 'Sucesso!';

    spyOn(service['snackBar'], 'open');

    service.showSnackbarSuccess(message);

    expect(service['snackBar'].open).toHaveBeenCalledWith(
      message,
      'Close',
      jasmine.objectContaining({
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['snackbar-success'],
      })
    );
  });

  it('deve abrir com mensagem de erro', () => {
    const errorMessage = 'Error!';

    spyOn(service['snackBar'], 'open');

    service.showSnackbarError(errorMessage);

    expect(service['snackBar'].open).toHaveBeenCalledWith(
      errorMessage,
      'Close',
      jasmine.objectContaining({
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['snackbar-error'],
      })
    );
  });
});
