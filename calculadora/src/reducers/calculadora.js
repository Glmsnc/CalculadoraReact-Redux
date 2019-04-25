


export default function calcula(state=[], action){
    
    if(action.type === 'AddNumber'){
        if(action.id !== '='){
        state.push(action.id)
        console.log(state)}
        else{
            console.log(eval(state.join('')))
            state = [];
        }

        return state;
    }
   
}