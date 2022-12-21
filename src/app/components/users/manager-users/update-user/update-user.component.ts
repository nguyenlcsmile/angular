import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/shared/rest-api.service';
import _ from 'lodash';

@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.scss'],
    providers: [NgbModalConfig, NgbModal],
})

export class UpdateUserComponent implements OnInit {
    previewImage = null;
    modalCurrent = null;
    userUpdate = {
        id: {
            S: ''
        },
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
        },
        imagebase64: {
            S: ''
        },
        urlImage: {
            S: ''
        }
    }

    @Output() messageEvent = new EventEmitter<any>();
    @ViewChild('template') template!: ElementRef;

    constructor(
        config: NgbModalConfig,
        private modalService: NgbModal,
        private sanitizer: DomSanitizer,
        public restApi: RestApiService
    ) { }

    ngOnInit(): void { }

    showModal(user) {
        this.userUpdate = _.cloneDeep(user);
        this.previewImage = `data:image/jpeg;base64,${this.userUpdate.imagebase64.S}`;
        this.modalCurrent = this.modalService.open(this.template, { size: 'xl', backdrop: 'static' });
    }

    resetUserUpdate() {
        this.previewImage = ''
        this.userUpdate = {
            id: {
                S: ''
            },
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
            },
            imagebase64: {
                S: ''
            },
            urlImage: {
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
                this.userUpdate.imagebase64.S = imageBase64;
            };
            reader.onerror = (error) => {
                console.log('Error: ', error);
            };
        }
    }

    async handleUpdateUser() {
        await this.restApi.updateItem('my-table', this.userUpdate).subscribe(res => {
            this.messageEvent.emit(res);
            this.resetUserUpdate();
            this.modalCurrent.close();
        });
    }

}
