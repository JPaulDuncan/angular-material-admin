import { Component, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent {

    @Input() enableEdit: boolean = true;
    @Input() enableCopy: boolean = false;
    @Input() enableDelete: boolean = false;
    @Input() enablePrint: boolean = false;

    @Output() EditClicked: EventEmitter = new EventEmitter();
    @Output() CopyClicked: EventEmitter = new EventEmitter();
    @Output() DeleteClicked: EventEmitter = new EventEmitter();
    @Output() PrintClicked: EventEmitter = new EventEmitter();

    constructor() {

    }

    enabled() : boolean {
        return this.enableEdit || this.enableCopy || this.enableDelete || this.enablePrint;
    }

    onEditClicked(): void {
        if(this.EditClicked) {
            this.EditClicked.emit("");
        }
    }

    onCopyClicked(): void {
        if(this.CopyClicked) {
            this.CopyClicked.emit("");
        }
    }

    onDeleteClicked(): void {
        if (this.DeleteClicked)
        {
            this.DeleteClicked.emit("");
        }
    }

    onPrintClicked() : void {
        if (this.PrintClicked) {
            this.PrintClicked.emit("");
        }
    }
}