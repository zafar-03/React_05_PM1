let initialValue = {
    count : 0
};

const reducer = (state=initialValue,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,count : state.count+1
            };

        case "DECREMENT":
            return{
                ...state,count : state.count-1
            };

        case "SQUARE":
            return{
                ...state,count : Math.pow(state.count,2)
            };

        case "RESET" : 
            return {
                ...initialValue
            }
        default:
            return state;
    }
}

export default reducer;