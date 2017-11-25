
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as Interview from './interview';
import * as fromRoot from '../reducers';

export interface InterviewState {
  interview: Interview.State;
}

export interface State  {
  interview: InterviewState;
}

export const reducers = {
  interview: Interview.reducer
};

export const getInterviewState = createFeatureSelector<InterviewState>('interview');

export const getInterviewData = createSelector(
  getInterviewState,
  (state: InterviewState) => {
    return state.interview;
  }
);


