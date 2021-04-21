import { SubSink } from 'subsink';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models';
import { TodoService } from 'src/app/core/services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  public user: User;
  public userId: number;
  public spinnerActive: boolean = false;
  
  private subs = new SubSink();

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    this.getUserId();
  }

  getUserId() {
    this.spinnerActive = true;
    this.subs.sink = this.todoService.getUserId(this.userId).subscribe(user => {
      this.user = user;
      this.spinnerActive = false;
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
