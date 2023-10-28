import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUsersApiModel } from 'src/app/interfaces/iusers-api-model';
import { ReqresApiService } from 'src/app/services/reqres-api/reqres-api.service';

@Component({
  selector: 'app-single-user-page',
  templateUrl: './single-user-page.component.html',
  styleUrls: ['./single-user-page.component.css'],
})
export class SingleUserPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;

  user: IUsersApiModel | undefined;
  snackbarService: any;

  constructor(
    private route: ActivatedRoute,
    private userService: ReqresApiService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.getUser(id);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getUser(id: number) {
    this.userService.getById(id).subscribe({
      next: (response) => {
        if (response.status == 200) {
          this.user = response.body?.data!;
          return;
        }
      },
      error: (error) => {
      },
    });
  }
}
