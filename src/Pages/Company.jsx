import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCompany } from '../Redux/action'

export const Company = () => {
    const company = useSelector((store)=> store.companyData.company)
    const [text, setText]= useState("");
   
    const dispatch = useDispatch();

    useEffect(()=>{
      if(company?.length ===0){
        // let params= {

        // }
        dispatch(fetchCompany());
      }
    },[dispatch,company?.length ])

    const handleCompanyAdd=(e)=>{
    setText(e.target.value)
    console.log(text)
    }
    console.log(company)

  return (
    <div>
        <h2>Company</h2>
        <div>
            {company.map((item)=>(
                <div style={{border:"1px solid gray", height:"2rem"} } key= {item.id}>{item.id} {" "}{item.company_name}</div>
            ))}
        </div>
        <div>
            <input type="text"
            placeholder='Add a New Company'
            value={text}
            onChange={handleCompanyAdd}
            />
            <button>ADD</button>
        </div>
    </div>
  )
}
