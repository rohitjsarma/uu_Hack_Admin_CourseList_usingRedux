
import React,{Fragment} from 'react';
class CourseList extends React.Component{
  constructor(props) {
        super(props);
        this.state={
            
        }

    }
 render() {
        return (
            <Fragment>



                                 <table className="table float-right table-bordered table-striped table-responsive-sm ">
                                     <thead className='thead-dark'>
                                     <tr>
                                         <th scope="col ">Sno</th>
                                         <th scope="col">Technology</th>
                                         <th scope="col">Tutor</th>
                                         <th scope="col">Attendees</th>
                                     </tr>
                                     </thead>
                                     <tbody>
                                     <tr>
                                         <th scope="row">1</th>
                                         <td>HTML</td>
                                         <td>Abel</td>
                                         <td>3 <a href="https://en.wikipedia.org/wiki/HTML" target='_blank' className="link-success">View</a></td>
                                     </tr>
                                     <tr>
                                         <th scope="row">2</th>
                                         <td>React</td>
                                         <td>user 1</td>
                                         <td>5 <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target='_blank' className="link-success">View</a></td>
                                     </tr>
                                     <tr>
                                         <th scope="row">2</th>
                                         <td>Modbus</td>
                                         <td>User 2</td>
                                         <td>2 <a href="https://en.wikipedia.org/wiki/Modbus" target='_blank' className="link-success">View</a></td>
                                     </tr>
                                     </tbody>
                                 </table>

            </Fragment>
        );
    }

}
export default CourseList;