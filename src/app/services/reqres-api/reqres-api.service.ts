import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  IUsersApiModel,
  IUsersApiResponseIdModel,
  IUsersApiResponseModel,
  IUsersApiResponsePostModel,
} from 'src/app/interfaces/iusers-api-model';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReqresApiService {
  constructor(private http: HttpClient) {}

  public getUsers(
    page: number,
    quantidade: number
  ): Observable<HttpResponse<IUsersApiResponseModel>> {
    return this.http.get<IUsersApiResponseModel>(
      `${environment.apiUrl}/users?page=${page}&per_page=${quantidade}`,
      { observe: 'response' }
    );
  }

  getById(id: number): Observable<HttpResponse<IUsersApiResponseIdModel>> {
    return this.http.get<IUsersApiResponseIdModel>(
      `${environment.apiUrl}/users/${id}`,
      { observe: 'response' }
    );
  }

  postUser(
    postUser: IUsersApiResponsePostModel
  ): Observable<HttpResponse<IUsersApiResponsePostModel>> {
    return this.http.post<IUsersApiResponsePostModel>(
      `${environment.apiUrl}/users`,
      postUser,
      { observe: 'response' }
    );
  }

  putUser(putUser: IUsersApiModel): Observable<HttpResponse<IUsersApiModel>> {
    return this.http.put<IUsersApiModel>(
      `${environment.apiUrl}/users/${putUser.id}`,
      putUser,
      { observe: 'response' }
    );
  }

  deleteUser(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${environment.apiUrl}/users/${id}`, {
      observe: 'response',
    });
  }
}
