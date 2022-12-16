import { Component, OnInit, ViewChild, Input, ElementRef, } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class UpdateUserComponent implements OnInit {
  @ViewChild('template') template!: ElementRef;

  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void { }

  showModal() {
    return this.modalService.open(this.template, { size: 'xl', backdrop: 'static' });
  }

}
