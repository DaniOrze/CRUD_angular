import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { EditUserPageComponent } from 'src/app/pages/edit-user-page/edit-user-page.component';
import { IUsersApiModel } from 'src/app/interfaces/iusers-api-model';
import { DeleteUserPageComponent } from 'src/app/pages/delete-user-page/delete-user-page.component';
import { mockedGetUmUsuario } from 'src/mocks/usuario.mocks';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule,
        MatCardModule,
        MatIconModule,
        HttpClientModule,
        MatDialogModule
      ],
      declarations: [UserCardComponent]
    });
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve abrir o EditUserPageComponent modal com os dados corretos e configuracoes', () => {
    const userData = mockedGetUmUsuario;

    const openDialogSpy = spyOn(component.dialog, 'open');

    component.user = userData;
    component.openDialogEdit('enterDuration', 'exitDuration');

    expect(openDialogSpy).toHaveBeenCalledWith(EditUserPageComponent, {
      data: userData, // No 'avatar' property
      width: '400px',
      enterAnimationDuration: 'enterDuration',
      exitAnimationDuration: 'exitDuration',
    });
  });

  it('deve abrir o DeleteUserPageComponent modal com os dados corretos e configuracoes', () => {
    const userData = mockedGetUmUsuario;

    const openDialogSpy = spyOn(component.dialog, 'open');

    component.user = userData;
    component.openDialogDelete('enterDuration', 'exitDuration');

    expect(openDialogSpy).toHaveBeenCalledWith(DeleteUserPageComponent, {
      data: userData,
      width: '350px',
      enterAnimationDuration: 'enterDuration',
      exitAnimationDuration: 'exitDuration',
    });
  });
});
