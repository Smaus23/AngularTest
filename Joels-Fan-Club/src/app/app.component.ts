import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    h1, p {
        text-decoration:underline;
        font-weight: bold;
        color: white;
    }
`]
})
export class AppComponent {
    title = 'Welcome to the Lionel Richie Fan Club';
}
