import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standard-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standard-button.component.html',
  styleUrls: ['./standard-button.component.css']
})
export class StandardButtonComponent {
  @Input() text = '';
  @Input() type = "button";
  @Input() disabled = false;
  @Input() id = "";
  @Output() clickEvent = new EventEmitter<boolean>();

  clickedButton() {
    this.clickEvent.emit();
  }
}
