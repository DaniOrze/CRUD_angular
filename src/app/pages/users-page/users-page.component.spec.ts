import { TableUsersComponent } from './../../components/table-users/table-users.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageComponent } from './users-page.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { AddUserPageComponent } from '../add-user-page/add-user-page.component';
import { of } from 'rxjs';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;
  let exportAsService: ExportAsService;
  const saveSpy = jasmine.createSpy();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: ExportAsService, useValue: {} },
      ],
      declarations: [UsersPageComponent, TableUsersComponent],
    });
    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    exportAsService = TestBed.inject(ExportAsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve abrir o modal de criação de usuário', () => {
    const enterAnimationDuration = '300ms';
    const exitAnimationDuration = '200ms';

    const dialog = TestBed.inject(MatDialog);
    spyOn(dialog, 'open');

    component.openDialogCreateUser(
      enterAnimationDuration,
      exitAnimationDuration
    );

    expect(dialog.open).toHaveBeenCalledWith(AddUserPageComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  });

  it('deve chamar exportAsFile com "csv" quando exportCSV é chamado', () => {
    spyOn(component, 'exportAsFile');
    component.exportCSV();
    expect(component.exportAsFile).toHaveBeenCalledWith('csv');
  });

  it('deve chamar exportAsFile com "pdf" quando exportPDF é chamado', () => {
    spyOn(component, 'exportAsFile');
    component.exportPDF();
    expect(component.exportAsFile).toHaveBeenCalledWith('pdf');
  });

  it('deve chamar exportAsFile com "xlsx" quando exportXLSX é chamado', () => {
    spyOn(component, 'exportAsFile');
    component.exportXLSX();
    expect(component.exportAsFile).toHaveBeenCalledWith('xlsx');
  });
});
