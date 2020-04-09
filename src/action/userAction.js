export const userAction=(dispatch)=>
{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(res=>dispatch({type:'USER',payload:res}))
}
