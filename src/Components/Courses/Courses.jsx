import './Courses.css'
import CoursesItems from '../Courses-items/CoursesItems'

export default function Courses() {
    return(
        <div className="courses">
            <div className="container">
                <h1 className="_title">Our Courses</h1>
                <p>
                     sit amet consectetur adipisicing elit. 
                    Ducimus cumque saepe suscipit accusamus sint harum maiores exercitationem dolorum ut unde?
                     ipsum dolor sit amet consectetur adipisicing elit. Voluptas, necessitatibus?
                </p>
                <CoursesItems />
                <br /><br />
                <center><a href="#" className="btn btn-enroll"> View All Courses</a></center>
            </div>
        </div>
    )
}