import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewUserComponent } from './manager-users/view-user/view-user.component';
import { UpdateUserComponent } from './manager-users/update-user/update-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class UsersComponent implements OnInit {
  @ViewChild(ViewUserComponent) viewUser!: ViewUserComponent;
  @ViewChild(UpdateUserComponent) updateUser!: UpdateUserComponent;

  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void { }

  showModalView() {
    this.viewUser.showModal();
  }

  showModalUpdate() {
    this.updateUser.showModal();
  }

}
