import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chil-parent-relation';
  data='X';
  updateData(item:any){
    console.warn(item)
    this.data=item;
  }
}
