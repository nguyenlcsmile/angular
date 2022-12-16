import { Component, Output, OnInit, ViewChild, Input, ElementRef, EventEmitter  } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})

export class ViewUserComponent implements OnInit {
  @ViewChild('template') template!: ElementRef;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {}

  ngOnInit(): void {}
  
  ngAfterViewInit() {}

  showModal() {
    return this.modalService.open(this.template, { size: 'lg' });
  }


}
