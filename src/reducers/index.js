import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ADD_ERROR} from './../actions/index';


export const initialState = {

    smurfs: [
        {
            name: '',
            position: '',
            nickname: '',
            description: '',
            id: ''
        }
    ],
    isFetching: false,
    error: 'An Error Occurred'
}

const reducer = (state = initialState, action)=>{

    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                isFetching: true
        });

        case(FETCH_SUCCESS): 
            return({
                ...state, 
                isFetching: false,
                smurfs: action.payload
            })

        case(FETCH_FAIL): 
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })

        case(ADD_SMURF):
            return({
                ...state,
                isFetching: true,
                smurfs: [...state.smurfs, { name: action.payload, position: action.payload, nickname: action.payload, description: action.payload, id: action.payload }]
            })

        case(ADD_ERROR):
            return({
                ...state,
                isFetching: false,
                error: 'There was an error'
            })

        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.