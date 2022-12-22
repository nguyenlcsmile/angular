import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewUserComponent } from './manager-users/view-user/view-user.component';
import { UpdateUserComponent } from './manager-users/update-user/update-user.component';
import { Store, State  } from '@ngrx/store';
import { getUser } from 'src/app/ngrx/user.actions';
import { Observable } from 'rxjs';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [NgbModalConfig, NgbModal],
})

export class UsersComponent implements OnInit {
    @ViewChild(ViewUserComponent) viewUser!: ViewUserComponent;
    @ViewChild(UpdateUserComponent) updateUser!: UpdateUserComponent;

    count$: Observable<number>;
    users = [];
    currnetPage = 1;

    constructor(
        config: NgbModalConfig, 
        private modalService: NgbModal,
        private store: Store<{ user: any }>,
        private state: State<{}>,
        public restApi: RestApiService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {}
    
    ngAfterViewInit() {
        this.getAllUsers();
    }

    async getAllUsers() {
        await this.restApi.getAllItems('my-table').subscribe(res => {
            this.users = res['data'];
        });
    }

    showModalView(user) {
        this.viewUser.showModal(user);
    }

    showModalUpdate(user) {
        // this.router.navigate(['users', user.id.S]);
        this.updateUser.showModal(_.cloneDeep(user));
    }

    resetListUsers($event) {
        let message = $event;
        if (message.statusCode === 200) {
            this.getAllUsers();
        }
    }

    handlePanginate(event) {
        this.currnetPage = event;
    }

    getUserLogin() {
        this.store.dispatch(getUser());
        return this.state.value;
    }
}

