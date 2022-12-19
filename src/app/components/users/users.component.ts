import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewUserComponent } from './manager-users/view-user/view-user.component';
import { UpdateUserComponent } from './manager-users/update-user/update-user.component';
// import { Observable } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { increment } from 'src/ngrx/counter.actions';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [NgbModalConfig, NgbModal],
})
export class UsersComponent implements OnInit {
    @ViewChild(ViewUserComponent) viewUser!: ViewUserComponent;
    @ViewChild(UpdateUserComponent) updateUser!: UpdateUserComponent;

    // count$: Observable<number>;
    collection = [];
    users = [
        {
            id: 1,
            username: 'NguyenVanA',
            email: 'vana@gmail.com',
            gender: 'Male',
            country: 'VietNam',
            phone: '123456'
        },
        {
            id: 2,
            username: 'NguyenVanA',
            email: 'vana@gmail.com',
            gender: 'Male',
            country: 'VietNam',
            phone: '123456'
        },
        {
            id: 3,
            username: 'NguyenVanA',
            email: 'vana@gmail.com',
            gender: 'Male',
            country: 'VietNam',
            phone: '123456'
        },
        {
            id: 4,
            username: 'NguyenVanA',
            email: 'vana@gmail.com',
            gender: 'Male',
            country: 'VietNam',
            phone: '123456'
        },
        {
            id: 5,
            username: 'NguyenVanA',
            email: 'vana@gmail.com',
            gender: 'Male',
            country: 'VietNam',
            phone: '123456'
        }
    ]
    currnetPage = 1;

    constructor(
        config: NgbModalConfig, 
        private modalService: NgbModal,
        // private store: Store<{ count: number }>
    ) {}

    ngOnInit(): void { }

    showModalView() {
        this.viewUser.showModal();
    }

    showModalUpdate() {
        this.updateUser.showModal();
    }

    handlePanginate(event) {
        this.currnetPage = event;
    }

    // increment() {
    //   this.store.dispatch(increment());
    // }
}

