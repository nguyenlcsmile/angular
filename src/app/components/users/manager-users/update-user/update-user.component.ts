import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from './user-information';

@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.scss'],
    providers: [NgbModalConfig, NgbModal],
})

export class UpdateUserComponent implements OnInit {
    previewImage = null;
    user: User = {
        username: '',
        email: '',
        gender: '',
        country: '',
        phone: '',
        image: ''
    };

    @ViewChild('template') template!: ElementRef;

    constructor(
        config: NgbModalConfig,
        private modalService: NgbModal,
        private sanitizer: DomSanitizer) { }

    ngOnInit(): void { }

    showModal() {
        return this.modalService.open(this.template, { size: 'xl', backdrop: 'static' });
    }

    resetUserUpdate() {
        this.user = {
            username: '',
            email: '',
            gender: '',
            country: '',
            phone: '',
            image: ''
        }
    }

    handleUploadImage(event) {
        if (event.target && event.target.files && event.target.files[0]) {
            this.previewImage = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(event.target.files[0]));
            console.log(this.previewImage, typeof this.previewImage);
            // this.previewImage = url.changingThisBreaksApplicationSecurity;
        }
    }

    handleUpdateUser() {
        console.log(this.user);
        this.resetUserUpdate();
    }

}
