import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUsersComponent } from './table-users.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { EditUserPageComponent } from 'src/app/pages/edit-user-page/edit-user-page.component';
import { mockedGetUmUsuario } from 'src/mocks/usuario.mocks';
import { DeleteUserPageComponent } from 'src/app/pages/delete-user-page/delete-user-page.component';

describe('TableUsersComponent', () => {
  let component: TableUsersComponent;
  let fixture: ComponentFixture<TableUsersComponent>;
  let httpClientSpy: jasmine.SpyObj<ReqresApiService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatSnackBarModule
      ],
      declarations: [TableUsersComponent],
      providers: [MatDialog],
    });
    fixture = TestBed.createComponent(TableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  httpClientSpy = jasmine.createSpyObj('ReqresApiService', ['getUsers']);

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve atualizar a pagina quando o onPageChange é chamado', () => {
    const event = { pageIndex: 2, pageSize: 20 };

    spyOn(component, 'loadUsers');

    component.onPageChange(event);

    expect(component.page).toBe(3);
    expect(component.porPagina).toBe(20);
    expect(component.loadUsers).toHaveBeenCalled();
  });

  it('deve abrir o motal de edit com os dados corretos', () => {
    const user = mockedGetUmUsuario;
    const enterAnimationDuration = '300ms';
    const exitAnimationDuration = '200ms';

    const dialog = TestBed.inject(MatDialog);
    spyOn(dialog, 'open');

    component.openDialogEdit(
      enterAnimationDuration,
      exitAnimationDuration,
      user
    );

    expect(dialog.open).toHaveBeenCalledWith(EditUserPageComponent, {
      data: mockedGetUmUsuario,
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  });

  it('deve abrir o modal de delete com os dados corretos', () => {
    const user = {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      avatar: 'avatar-url',
    };
    const enterAnimationDuration = '300ms';
    const exitAnimationDuration = '200ms';

    const dialog = TestBed.inject(MatDialog);
    spyOn(dialog, 'open');

    component.openDialogDelete(
      enterAnimationDuration,
      exitAnimationDuration,
      user
    );

    expect(dialog.open).toHaveBeenCalledWith(DeleteUserPageComponent, {
      data: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        avatar: user.avatar,
      },
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  });

  it('deve filtrar de acordo com o nome', () => {
    const users = [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        avatar: 'avatar-url',
      },
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@example.com',
        avatar: 'avatar-url',
      },
      {
        id: 3,
        first_name: 'Alice',
        last_name: 'Johnson',
        email: 'alice.johnson@example.com',
        avatar: 'avatar-url',
      },
    ];

    component.listaDeUsuariosCompleta = users;

    component.filterResults('John');
    expect(component.listaDeUsuarios.length).toBe(2);

    component.filterResults('Alice');
    expect(component.listaDeUsuarios.length).toBe(1);

    component.filterResults('Nonexistent');
    expect(component.listaDeUsuarios.length).toBe(0);
  });

  it('deve resetar a lista quando não tem pesquisa', () => {
    const users = [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        avatar: 'avatar-url',
      },
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@example.com',
        avatar: 'avatar-url',
      },
      {
        id: 3,
        first_name: 'Alice',
        last_name: 'Johnson',
        email: 'alice.johnson@example.com',
        avatar: 'avatar-url',
      },
    ];

    component.listaDeUsuariosCompleta = users;

    component.filterResults('John');
    expect(component.listaDeUsuarios.length).toBe(2);

    component.filterResults('');
    expect(component.listaDeUsuarios).toEqual(users);
  });
});
