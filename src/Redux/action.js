import * as types from "./actionTypes";
import Axios from "axios"
import { Company } from "../Pages/Company";

const fetchCompanyRequest =(payload)=>{
    return{
        type: types.FETCH_COMPANY_REQUEST,
        payload
    }
}
const fetchCompanySuccess =(payload)=>{
    return{
        type: types.FETCH_COMPANY_SUCCESS,
        payload
    }
}
const fetchCompanyFailure =(payload)=>{
    return{
        type: types.FETCH_COMPANY_FAILURE,
        payload
    }
}

export const fetchCompany =(payload)=>{
     return (dispatch) =>{
        dispatch(fetchCompanyRequest());
        Axios.get("http://localhost:3000/company", {
            params:{
                ...payload
            }
        })
        .then((res)=> dispatch(fetchCompanySuccess(res.data)))
        .catch((e)=> dispatch(fetchCompanyFailure(e.data)))
     }
}

const addCompanyRequest =(payload)=>{
    return{
        type: types.ADD_COMPANY_REQUEST,
        payload
    }
}
const addCompanySuccess =(payload)=>{
    return{
        type: types.ADD_COMPANY_SUCCESS,
        payload
    }
}
const addCompanyFailure =(payload)=>{
    return{
        type: types.ADD_COMPANY_FAILURE,
        payload
    }
}

export const addCompany =(company)=>(dispatch)=>{
     dispatch(addCompanyRequest());
     Axios.post("/company",company)
     .then(r=> dispatch(addCompanySuccess(r.data)))
     .catch(e=> dispatch(addCompanyFailure(e.data)))
}

const fetchEmployeeRequest =(payload)=>{
    return{
        type: types.FETCH_EMPLOYEE_REQUEST,
        payload
    }
}
const fetchEmployeeSuccess =(payload)=>{
    return{
        type: types.FETCH_EMPLOYEE_SUCCESS,
        payload
    }
}
const fetchEmployeeFailure =(payload)=>{
    return{
        type: types.FETCH_EMPLOYEE_FAILURE,
        payload
    }
}

export const fetchEmployee =(payload)=>{
    return (dispatch) =>{
       dispatch(fetchEmployeeRequest());
       Axios.get(" http://localhost:3000/employee", {
           params:{
               ...payload
           }
       })
       .then((res)=> dispatch(fetchEmployeeSuccess(res.data)))
       .catch((e)=> dispatch(fetchEmployeeFailure(e.data)))
    }
}



