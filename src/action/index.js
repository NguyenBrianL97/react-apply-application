export const empAction=()=>
{
    return{
        type:'EMPLOYEE',
        payload:{empid:'E002',empname:'James',contact:221245,dept:'SALES'}
    }
}

export const studAction=()=>
{
  return{
    type:'STUDENT',
    payload:{stuid:'S002',stuname:'Lee',rollno:5}
  }
}

export const petAction=()=>
{
  return{
    type:'PET',
    payload:{petid:'P002',petname:'Max',race:'Dog'}
  }
}

export const userAction=(dispatch)=>
{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(res=>dispatch({type:'USER',payload:res}))
}
