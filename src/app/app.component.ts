import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap/modal";
import {ModalContentComponent} from "./modal-content/modal-content.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  openModal() {
    const lastOpenStr = localStorage.getItem('modalLastOpen');
    if (lastOpenStr) {
      if (this.calculateDiff(new Date(lastOpenStr.toString())) <= 24) {
        console.log(`24 hours are not passed yet`);
      } else {
        this.openModalWithComponent();
      }
    } else {
      this.openModalWithComponent();
    }
  }

  calculateDiff(lastOpen: Date) {
    let currentDate = new Date();

    const diffInMs = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()) - Date.UTC(lastOpen.getFullYear(), lastOpen.getMonth(), lastOpen.getDate(), lastOpen.getHours(), lastOpen.getMinutes(), lastOpen.getSeconds());

    return Math.floor((diffInMs / 1000 / 60 / 60)); // difference in hours
  }

  removeFlag() {
    localStorage.removeItem('modalLastOpen');
    this.openModalWithComponent();
  }

  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';

    this.bsModalRef.onHide?.subscribe(response => {
      if (response) {
        localStorage.setItem('modalLastOpen', (new Date()).toString());
      }
    });
  }
}
