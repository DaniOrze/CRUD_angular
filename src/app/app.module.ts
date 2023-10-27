import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersPageComponent } from './pages/users-page/users-page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SingleUserPageComponent } from './pages/single-user-page/single-user-page.component';
import { MatIconModule } from '@angular/material/icon';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { DeleteUserPageComponent } from './pages/delete-user-page/delete-user-page.component';
import { FormsModule } from '@angular/forms';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatTableModule} from '@angular/material/table';

import { ExportAsModule } from 'ngx-export-as';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginatorIntlPortugues } from './classes/PaginatorIntlPortugues';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    UserCardComponent,
    SingleUserPageComponent,
    AddUserPageComponent,
    EditUserPageComponent,
    DeleteUserPageComponent,
    TableUsersComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
    ExportAsModule,
    MatToolbarModule,
    MatPaginatorModule,
  ],
  providers: [    {
    provide: MatPaginatorIntl,
    useClass: PaginatorIntlPortugues,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
