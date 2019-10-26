import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'barn2door';

  constructor(private svcData: DataService) {

  }

  ngOnInit() {
    this.svcData.getItems().subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
