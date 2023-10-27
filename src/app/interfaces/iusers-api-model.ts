export interface IUsersApiModel {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUsersApiResponseModel {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: [IUsersApiModel];
}

export interface IUsersApiResponseIdModel {
  data: IUsersApiModel;
}

export interface IUsersApiResponsePostModel {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
