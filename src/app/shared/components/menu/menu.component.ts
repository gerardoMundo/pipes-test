import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: [],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Angular pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
          },
          {
            label: 'Incomunes',
            icon: 'pi pi-globe',
          },
        ],
      },
      {
        label: 'Pipes custom',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'otro elemtn',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'otro elemento',
                icon: 'pi pi-globe',
              },
            ],
          },
        ],
      },
    ];
  }
}
