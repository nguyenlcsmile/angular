import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.scss'],
    providers: [NgbModalConfig, NgbModal],
})

export class UpdateUserComponent implements OnInit {
    previewImage = null;
    user: {};

    @ViewChild('template') template!: ElementRef;

    constructor(
        config: NgbModalConfig,
        private modalService: NgbModal,
        private sanitizer: DomSanitizer,
        public restApi: RestApiService
    ) { }

    ngOnInit(): void { }

    showModal(user) {
        this.user = user;
        this.previewImage = `data:image/jpeg;base64,${user.imagebase64.S}`;
        return this.modalService.open(this.template, { size: 'xl', backdrop: 'static' });
    }

    resetUserUpdate() {
        this.previewImage = ''
        this.user = {
            country: {
                S: ''
            },
            email: {
                S: ''
            },
            gender: {
                S: ''
            },
            phone: {
                S: ''
            },
            username: {
                S: ''
            }
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
                this.user['imagebase64'].S = imageBase64;
            };
            reader.onerror = (error) => {
                console.log('Error: ', error);
            };
        }
    }

    handleUpdateUser() {
        // console.log(this.user);
        this.resetUserUpdate();
    }

}
