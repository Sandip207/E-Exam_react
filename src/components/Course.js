import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Course = () => {
    const [courseName, setcourseName] = useState("")
    const [status, setstatus] = useState('')
    const [discription, setdiscription] = useState('')

    var navigate = useNavigate()

    const addcourseHandler  = (e) => {
        e.preventDefault()

    var data={
        courseName:courseName,
        isActive:status,
        discription:discription
    }

    axios.post("http://localhost:3000/courses", data).then((res) => {
     alert("data add sucssesfully");
   console.log(res.data.data);
   navigate('/Examlist')
 });
}
  return (
    <div>
          <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add course</p>
                <form className="mx-1 mx-md-4" onSubmit={addcourseHandler}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" onChange={(e) => setcourseName(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example1c">Course Name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" className="form-control" onChange={(e) => setdiscription(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example3c">Discription</label>
                    </div>
                  </div>
                  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                   
                   <div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="isActive" value='1'   onChange={(e) => setstatus(e.target.value)} />
                       <label className="form-check-label" htmlFor="isActive">Active</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="isActive"  value='0'  onChange={(e) => setstatus(e.target.value)} />
                       <label className="form-check-label" htmlFor="isActive">In Active</label>
                     </div>
                    </div>
                    

                   </div>
                 </div>
                 
                
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Add</button>
                  </div>
                </form>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
