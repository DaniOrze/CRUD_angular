import { UserCardComponent } from './../../components/user-card/user-card.component';
import { AppRoutingModule } from './../../app-routing.module';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserPageComponent } from './single-user-page.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

describe('SingleUserPageComponent', () => {
  let component: SingleUserPageComponent;
  let fixture: ComponentFixture<SingleUserPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      declarations: [SingleUserPageComponent, UserCardComponent],
    });
    fixture = TestBed.createComponent(SingleUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
