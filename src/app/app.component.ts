import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('navigation') navigation!: ElementRef;
  @Input() action!: string;
  @Input() sticky: boolean = true;
  @Input() slidebar!: boolean;
  @Input() persistentHeader: boolean = true;
  @Input() mode!: string;
  @Input() withIcon: boolean = true;
  @Input() max: string = '{"medium":3, "large":4}';
  @Input() contentClass!: string;
  @Input() ondark: boolean = false;
  title = 'ui-component-demo';
  buttonText = 'Vertical';
  buttonType = 'primary';
  buttonTextTheme = 'Dark';
  buttonDisabled = false;
  @Input() selected!: boolean;
  activeUrl = '';
  event: any;

  constructor(private router: Router, private _location: Location) { }

  ngOnInit() {}

  goToPage(pathUrl: any) {
    this.router.navigate([pathUrl]);
    event?.preventDefault();
  }

  handleClick() {
    this.slidebar = !this.slidebar;
    if (this.slidebar) {
      this.buttonText = "Horizontal";
      this.buttonType = 'secondary';
      this.persistentHeader = false;
      this.mode = 'vertical';
      this.sticky = true;
    } else {
      this.buttonText = "Vertical";
      this.buttonType = 'primary';
      this.persistentHeader = true;
      this.mode = 'horizontal';
      this.sticky = true;
    }
  }

  handleThemeClick() {
    this.ondark = !this.ondark;
    if (this.ondark) {
      this.buttonTextTheme = "Light";
      this.buttonType = 'secondary';
      this.ondark = true;
    } else {
      this.buttonTextTheme = "Dark";
      this.buttonType = 'primary';
      this.ondark = false;
    }
  }

  ngAfterViewChecked(): void {
    const leftMenu =
      this.navigation.nativeElement.querySelector('[slot="left-menu"]');
    const sidebar =
      this.navigation.nativeElement.querySelector('[slot="sidebar"]');

    leftMenu?.addEventListener('selectItem', (event: any) => {
      if (event.detail >= 0) {
        if (event.target.id !== 'moreBtn') {
          sidebar?.setAttribute('activeIndex', event.detail);
          leftMenu?.setAttribute('activeIndex', event.detail);
        } else {
          const lastIndex = sidebar?.getAttribute('activeIndex');
          leftMenu?.setAttribute('activeIndex', lastIndex);
        }
      }
    });

    sidebar?.addEventListener('selectItem', (event: any) => {
      if (event.detail >= 0) {
        leftMenu?.setAttribute('activeIndex', event.detail);
        sidebar?.setAttribute('activeIndex', event.detail);
      }
    });

    const moreBtn = leftMenu?.querySelector('#moreBtn');

    if (moreBtn !== null) {
      if (!this.withIcon) {
        moreBtn.setAttribute('noIcon', '');
      }
    }
  }
}
