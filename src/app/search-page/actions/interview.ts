import { Action } from '@ngrx/store';

export const GET_INTERVIEW_DATA  = '[Get] Interview data';
export const GET_INTERVIEW_DATA_SUCCESS  = '[Get] Interview data Success';
export const GET_INTERVIEW_DATA_FAILED  = '[Get] Interview data Failed';

export class GetInterviewData implements Action {
  readonly type = GET_INTERVIEW_DATA;

  constructor(public payload: any) {}
}

export class GetInterviewDataSuccess implements Action {
  readonly type = GET_INTERVIEW_DATA_SUCCESS;

  constructor(public payload: any) {}
}

export class GetInterviewDataFailed implements Action {
  readonly type = GET_INTERVIEW_DATA_FAILED;

  constructor(public payload: any) {}
}

export type Actions =
  | GetInterviewData
  | GetInterviewDataSuccess
  | GetInterviewDataFailed;
