const initialState = {
    data: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_DATA': {
            return {...state,
            data: [...state.data, action.value]}
        }
        break;
        
    }
}