import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourses} from "../redux/courses/couses.actions";
import {COURSE_FEATURE_KEY} from "../redux/courses/courses.reducer";
import Spinner from  './spinner/Spinner';
import img from '../img/utthu.png';


let CourseList=()=>{

    let dispatch = useDispatch();

    let courseInfo= useSelector((state)=>{
        return  state[COURSE_FEATURE_KEY];
    })

    let getData=()=>{
        dispatch(fetchCourses());
    };

    return(
        <React.Fragment>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col ">
                        <div className="card">
                            <div className="card-header">
                                <img src={img}  className="img-fluid rounded float-left max-width:100%" alt="Utthunga Image"/>
                                <p className='text-danger text-center font-weight-bold '>Learning and Certification</p>
                                <b className='float-right'>hr@utthunga.com</b>

                                <form >
                                   {/* <label htmlFor="course">Choose from home:</label>*/}

                                {/*    <select name="course" id="Course" >
                                        <option value="tt" >Tutor</option>
                                        <option value="crs"   >Course</option>
                                        <option value="cul">Certified User List</option>
                                        <option value="lo">Logout</option>
                                    </select>*/}


                                </form>


                            </div>
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary dropdown-toggle"
                                                        data-toggle="dropdown">
                                                    HOME
                                                    <span className="caret"></span>
                                                </button>

                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Tutor</a></li>
                                                    <li><a href="#" onClick={getData}>Course</a></li>
                                                    <li><a href="#">Certified user list</a></li>

                                                    <li className="divider"></li>
                                                    <li><a href="#">Logout</a></li>
                                                </ul>

                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <table className='table table-primary table-hover text-center table-striped'>
                                                <thead className='bg-primary text-white'>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Tutor</th>
                                                    <th>Gender</th>
                                                    <th>Attendee</th>

                                                </tr>

                                                </thead>
                                                <tbody>
                                                {/*

                                        {
                                            Object.keys( courseInfo.courses).length !== 0 ?
                                                <React.Fragment>
                                                    {
                                                        courseInfo.loading ? <Spinner/> :
                                                            <React.Fragment>
                                                                {
                                                                    courseInfo.courses.map((user)=>{
                                                                        return(
                                                                            <tr key={user.id}>
                                                                                <td>{user.id}</td>
                                                                                <td>{user.name}</td>
                                                                                <td>{user.tutor}</td>
                                                                                <td>{user.gender}</td>
                                                                                <td>{user.attendee} <a href='https://www.w3schools.com/'>  view</a></td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                            </React.Fragment>
                                                    }
                                                </React.Fragment> : null
                                        }
*/}
                                                {/*       <div className="col-8">*/}
                                                {
                                                    courseInfo.courses.length>0?<React.Fragment>
                                                        {
                                                            courseInfo.courses.map((user)=>{
                                                                return(
                                                                    <tr key={user.id}>
                                                                        <td>{user.id}</td>
                                                                        <td>{user.name}</td>
                                                                        <td>{user.tutor}</td>
                                                                        <td>{user.gender}</td>
                                                                        <td>{user.attendee} <a href='https://www.w3schools.com/'>  view</a></td>




                                                                    </tr>
                                                                )
                                                            })
                                                        }


                                                    </React.Fragment>:null
                                                }


                                                </tbody>

                                            </table>
                                            </div>
                                    </div>
                                </div>


                            </div>
                            <div className="card-footer text-secondary font-weight-bold text-center ">
                                <i className="fa fa-copyright"></i> Copyright rohit.s@utthunga.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default CourseList;