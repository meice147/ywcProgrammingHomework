import * as Act from '../actions/interview';

export interface State {
  isLoading: boolean;
  hasData: boolean;
  data: any;
}

export const initialState: State = {
  isLoading: false,
  hasData: false,
  data: {}
};

export function reducer(state = initialState, action: Act.Actions): State {
  switch (action.type) {

    case Act.GET_INTERVIEW_DATA: {
      return {
        ...state,
        isLoading: true,
        hasData: false
      };
    }

    case Act.GET_INTERVIEW_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasData: true,
        data: action.payload
      };
    }

    case Act.GET_INTERVIEW_DATA_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasData: false
      };
    }

    default: {
      return state;
    }
  }
}
