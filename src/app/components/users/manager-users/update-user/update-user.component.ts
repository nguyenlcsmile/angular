import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { UsersComponent } from '../../users.component';
import * as _ from 'lodash';

@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.scss'],
    providers: [NgbModalConfig, NgbModal],
})

export class UpdateUserComponent implements OnInit {
    @ViewChild('template') template!: ElementRef;
    @ViewChild(UsersComponent) userComponent!: UsersComponent;
    @Output() messageEvent = new EventEmitter<any>();

    previewImage = null;
    modalReference = null;
    image = '';
    user = {
        id: {
            S: ""
        },
        country: {
            S: ""
        },
        email: {
            S: ""
        },
        gender: {
            S: ""
        },
        phone: {
            S: ""
        },
        username: {
            S: ""
        },
        imagebase64: {
            S: ""
        },
        urlImage: {
            S: ""
        }
    }

    constructor(
        config: NgbModalConfig,
        private modalService: NgbModal,
        private sanitizer: DomSanitizer,
        public restApi: RestApiService,
    ) {}

    ngOnInit(): void { }
    
    ngAfterViewInit() {
        console.log(this.userComponent);
    }

    showModal(user) {
        this.user = {...user};
        this.previewImage = `data:image/jpeg;base64,${this.user.imagebase64.S}`;
        this.modalReference = this.modalService.open(this.template, { size: 'xl', backdrop: 'static' });
    }

    resetUserUpdate() {
        this.previewImage = '';
        this.user = {
            id: {
                S: ""
            },
            country: {
                S: ""
            },
            email: {
                S: ""
            },
            gender: {
                S: ""
            },
            phone: {
                S: ""
            },
            username: {
                S: ""
            },
            imagebase64: {
                S: ""
            },
            urlImage: {
                S: ""
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
                // this.user.imagebase64.S = String(reader.result).replace(/^data:image\/[a-z]+;base64,/, "");
                this.user.imagebase64.S = String(reader.result).replace(/^data:image\/[a-z]+;base64,/, "");
            };  
            reader.onerror = (error) => {
                console.log('Error: ', error);
            };
        }
    }

    async handleUpdateUser() {
        await this.restApi.updateItem('my-table', this.user).subscribe(res => {
            this.messageEvent.emit(res);
            this.resetUserUpdate();
            this.modalReference.close();
        });
    }

}
