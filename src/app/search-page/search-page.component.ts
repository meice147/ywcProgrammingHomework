import { getInterviewData } from './reducers/index';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import * as fromStore from './reducers';
import * as Action from './actions/interview';
import { Store } from '@ngrx/store';
import { Http } from '@angular/http';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})



export class SearchPageComponent implements OnInit {
  querySearch = '';
  dataShow = [];
  checkPositionActive = 'programming';
  getData$: Observable<any>;
  isLoading = true;
  displayedColumns = ['interviewRef', 'Name', 'major'];
  dataAllresult = [];
  datas = {
    programming: [],
    marketing: [],
    content: [],
    design: []
  };
  poisitionBranch = [
    {
      'title': 'web programming',
      'prefix': 'programming',
      'imgUrl': 'assets/images/webprogramming.png'
    },
    {
      'title': 'web content',
      'prefix': 'content',
      'imgUrl': 'assets/images/webcontent.png'
    },
    {
      'title': 'web marketing',
      'prefix': 'marketing',
      'imgUrl': 'assets/images/webmarketing.png'
    },
    {
      'title': 'web design',
      'prefix': 'design',
      'imgUrl': 'assets/images/webdesign.png'
    }
  ];

  constructor(
    private store: Store<fromStore.State>,
    private http: Http,
  ) {
    this.getData$ = store.select(fromStore.getInterviewData);
  }

  ngOnInit() {
    this.store.dispatch(new Action.GetInterviewData({}));
    this.getData$.subscribe((result: any) => {
      if (result.hasData) {
        this.isLoading = false;
        this.dataAllresult = result.data;
        for (const data of result.data) {
          this.datas[data.major].push(data);
        }
        this.dataShow = this.datas['programming'];
      }
    });
  }



  isActive(pos) {
    this.checkPositionActive = pos;
    this.dataShow = this.datas[pos];
    this.querySearch = '';
  }

}
