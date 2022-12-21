import { Component, Output, OnInit, ViewChild, Input, ElementRef, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
    selector: 'app-view-user',
    templateUrl: './view-user.component.html',
    styleUrls: ['./view-user.component.scss'],
    providers: [NgbModalConfig, NgbModal],
})

export class ViewUserComponent implements OnInit {
    @ViewChild('template') template!: ElementRef;

    userView = [];
    image = '';
    constructor(
        config: NgbModalConfig, 
        private modalService: NgbModal,
        public restApi: RestApiService
    ) {}

    ngOnInit(): void { }

    ngAfterViewInit() { }
    
    showModal(user) {
        this.userView = user;
        this.image = `data:image/jpeg;base64,${user.imagebase64.S}`;
        return this.modalService.open(this.template, { size: 'xl', backdrop: 'static' });
    }
}
