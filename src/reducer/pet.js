

const petReducer=(state={},action)=>
{
    switch(action.type)
    {
        case 'PET':
            return action.payload;
        default:
            return state;
    }

}

export default petReducer;