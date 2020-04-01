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
