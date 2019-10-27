import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { map } from 'rxjs/operators';
import { ObjectUtilities } from './utilities/object.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'barn2door';
  public allData;
  public searchTerm: string;
  public results;

  constructor(private svcData: DataService, private objUtil: ObjectUtilities) {}

  ngOnInit() {
    this.svcData.getItems().subscribe(data => {
      const modified = [];
      for (const item of data) {
        item['flattened'] = this.objUtil.flatten(item);
        modified.push(item);
      }

      this.allData = modified;
    });
  }

  public search() {
    const a = this.searchTerm.toString().toLowerCase();

    const res = [];
    for (const item of this.allData) {
        const flat = item['flattened'];
        const values = Object.keys(flat).map(key => flat[key]);

        for (const val of values) {
            if (
                val
                    .toString()
                    .toLowerCase()
                    .includes(a)
            ) {
                res.push(item);
                break;
            }
        }
    }
    this.results = res;
  }
}
