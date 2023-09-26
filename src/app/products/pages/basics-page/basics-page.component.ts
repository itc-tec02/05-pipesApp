import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {




  public nameLower: string = 'edson';
  public nameUpper: string = 'EDSON';
  public fullName: string = 'eDsON';
  public customDate: Date = new Date();

}
