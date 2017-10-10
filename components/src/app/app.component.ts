import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
 <img [src]="angularLogo">
  <h1>Hey guys!</h1>
  <div *ngIf="myArr; then tmpl1 else tmpl2"></div>

  <ng-template #tmpl1>I'm here</ng-template>
  <ng-template #tmpl2>I'm not here</ng-template>
<button [disabled]="buttonStatus">My Button</button>
<button (click)="myEvent($event)">My Button</button>
  `,
  
})
export class AppComponent {
    title = 'app';
    angularLogo = 'https://angular.io/resources/images/logos/angular2/angular.png';
    buttonStatus = true;
    myEvent(event) {
        console.log(event);
    }
}
