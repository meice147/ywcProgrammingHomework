import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as Act from '../actions/interview';
import * as fromInterview from '../reducers';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InterviewEffect {

    constructor(
        private actions$: Actions,
        private http: HttpClient,
    ) { }

    @Effect() Interview$ = this.actions$
    .ofType(
    Act.GET_INTERVIEW_DATA
    )
    .mergeMap(actions => {
        return this.http
            .get('https://ywc15.ywc.in.th/api/interview')
            .map(data => ({ type: Act.GET_INTERVIEW_DATA_SUCCESS, payload: data }))
            .catch(() => of({ type: Act.GET_INTERVIEW_DATA_SUCCESS }));
    });

}
