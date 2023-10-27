import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUsersComponent } from './table-users.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';
import { of } from 'rxjs';
import { IUsersApiModel, IUsersApiResponseModel } from 'src/app/interfaces/iusers-api-model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


describe('TableUsersComponent', () => {
  let component: TableUsersComponent;
  let fixture: ComponentFixture<TableUsersComponent>;
  let httpClientSpy: jasmine.SpyObj<ReqresApiService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        MatDialogModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        BrowserAnimationsModule],
      declarations: [TableUsersComponent]
    });
    fixture = TestBed.createComponent(TableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  httpClientSpy = jasmine.createSpyObj('ReqresApiService', ['getUsers']);

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load users from the API', () => {
  //   const mockUsersData: IUsersApiResponseModel = {
  //     page: 1,
  //     per_page: 2,
  //     total: 2,
  //     total_pages: 1,
  //     data: [
  //       { id: 1, email: 'user1@example.com', first_name: 'John', last_name: 'Doe', avatar: '' }
  //     ]
  //   };

  //   httpClientSpy.getUsers.and.returnValue(of(mockUsersData));

  //   component.ngOnInit();

  //   fixture.detectChanges();

  //   expect(component.listaDeUsuarios).toEqual(mockUsersData.data);
  //   expect(component.listaDeUsuariosCompleta).toEqual(mockUsersData.data);
  // });

});
