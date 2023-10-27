import {
  IUsersApiModel,
  IUsersApiResponseModel,
  IUsersApiResponsePostModel,
} from 'src/app/interfaces/iusers-api-model';

  export const mockedGetUmUsuario: IUsersApiModel =
  {
    id: 7,
    first_name: 'Michael',
    last_name: 'Lawson',
    email: 'michael.lawson@reqres.in',
    avatar: 'https://reqres.in/img/faces/7-image.jpg'
  };

export const mockedPostRequest: IUsersApiResponsePostModel = {
  email: 'mateus@gmail.com',
  first_name: 'Mateus',
  last_name: 'Ciclano',
  avatar: 'avatar',
};
