import React from 'react'
import NavBar from './NavBar'

const DeleteStudent = () => {
    return (
        <div>
            <br />
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row g-3">
                        <div className="row col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Adm no</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 com-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-danger">Delete</button>

                        </div></div>                </div>
            </div>
        </div>
    )
}

export default DeleteStudent

