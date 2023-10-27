import { TableUsersComponent } from './../../components/table-users/table-users.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageComponent } from './users-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExportAsService } from 'ngx-export-as';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatPaginatorModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: ExportAsService, useValue: {} }
      ],
      declarations: [
        UsersPageComponent,
        TableUsersComponent]
    });
    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
