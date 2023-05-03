import { Component } from '@angular/core';

@Component({
  selector: 'shared-toggle-button',
  templateUrl: './toggle-button.component.html',
  styles: [],
})
export class ToggleButtonComponent {
  public checked = false;

  changeTheme() {
    this.checked = !this.checked;
  }
}
