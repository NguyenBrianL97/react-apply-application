

const studReducer=(state={},action)=>
{
    switch(action.type)
    {
        case 'STUDENT':
            return action.payload;
        default:
            return state;
    }

}

export default studReducer