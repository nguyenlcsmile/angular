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
        private sanitizer: DomSanitizer,) { }

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

    getBase64(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        return reader;
    }

    handleUploadImage(event) {
        if (event.target && event.target.files && event.target.files[0]) {
            this.previewImage = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(event.target.files[0]));
            let imageFile = event.target.files[0];
            let reader = this.getBase64(imageFile);
            reader.onload = () => {
                let imageBase64 = String(reader.result).replace(/^data:image\/[a-z]+;base64,/, "");
                this.user.image = imageBase64;
            };
            reader.onerror = (error) => {
                console.log('Error: ', error);
            };
        }
    }

    handleUpdateUser() {
        console.log(this.user);
        this.resetUserUpdate();
    }

}
