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
  @Input() dark: boolean = false;
  title = 'ui-component-demo';
  buttonText = 'Click me';
  buttonType = 'primary';
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
      this.buttonText = "I've been change Sideebar Navigation";
      this.buttonType = 'secondary';
      this.persistentHeader = false;
      this.mode = 'vertical';
      if (window.innerWidth <= 768) {
        this.sticky = false;
      } else {
        this.sticky = true;
      }
    } else {
      this.buttonText = "I've been change Horizontal Navigation";
      this.buttonType = 'primary';
      this.persistentHeader = true;
      this.mode = 'horizontal';
      this.sticky = true;
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
