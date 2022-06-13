import * as types from "./actionTypes";

const init ={
 loading:false,
 company:[],
 error: false,
 

}


export const companyReducer =(state=init, action)=>{
  const {type, payload} = action
  switch(type){
    case types.FETCH_COMPANY_REQUEST :
        return{
            ...state,
            loading:true,
            error:false
        }
  
  case types.FETCH_COMPANY_SUCCESS :
    return{
        ...state,
        company: payload,
        loading:false,
        error:false
    }

case types.FETCH_COMPANY_FAILURE :
    return{
        ...state,
        loading:true,
        error:true,
    }
//     case types.FETCH_EMPLOYEE_REQUEST :
//         return{
//             ...state,
//             loading:true,
//             error:false
//         }
  
//   case types.FETCH_EMPLOYEE_SUCCESS:
//     return{
//         ...state,
//         employee: payload,
//         loading:false,
//         error:false
//     }

// case types.FETCH_EMPLOYEE_FAILURE :
//     return{
//         ...state,
//         loading:true,
//         error:true,
//     }
    default:
        return state

}
}
const initstate= {
    loading:false,
    employee:[],
    error: false,
}

export const employeeReducer =(state=initstate, action)=>{
    const {type, payload} = action;
    switch(type){
    case types.FETCH_EMPLOYEE_REQUEST :
        return{
            ...state,
            loading:true,
            error:false
        }
  
  case types.FETCH_EMPLOYEE_SUCCESS:
    return{
        ...state,
        employee: payload,
        loading:false,
        error:false
    }

case types.FETCH_EMPLOYEE_FAILURE :
    return{
        ...state,
        loading:true,
        error:true,
    }
    default:
        return state
    }

}