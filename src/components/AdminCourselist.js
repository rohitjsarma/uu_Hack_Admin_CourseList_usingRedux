
import React,{Fragment} from 'react';
import img from '../img/utt.png';
import CourseList from "./CourseList";
class AdminCourselist extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }

    }
    render() {
        return (
            <Fragment>



                <div>
                    <div className="card">
                       <span className="border border-dark">
                           <div className="card-header">
                           <img src={img} className="img-fluid rounded float-left" alt="Utthunga Image"/>
                          Learning and Certification
                               <b className='float-right'>hr@utthunga.com</b>
                           </div>

                       </span>



                        <div className="card-body">
                            <div className="row">

                                <div className="col-4">
                               <div className="container">
                                   <div className="row">
                                       <div className="col mt-4">
                                           <div className="dropdown pull-left o">
                                               <button className="btn btn-primary active btn-lg dropdown-toggle " type="button"
                                                       id="dropdownMenuButton" data-toggle="dropdown"
                                                       aria-haspopup="true" >Home
                                               </button>
                                               <div className="dropdown-menu pre-scrollable"
                                                    aria-labelledby="dropdownMenuButton">
                                                   <a className="dropdown-item" href="#">Tutor List</a>
                                                   <a className="dropdown-item" href="#">Course List</a>
                                                   <a className="dropdown-item" href="#">Certified User List</a>
                                                   <a className="dropdown-item" href="#">Logout</a>

                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               </div>
                                <div className="col-8"><CourseList/></div>

                            </div>





                        </div>
                    </div>

                </div>



            </Fragment>
        );
    }

}
export default AdminCourselist;