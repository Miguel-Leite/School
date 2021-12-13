import './style.css'
import Navbar from '../Navbar/Navbar'


export default function Header() {

    return (
        <div>
            <header>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Learning to Love,
                                Loving to Learn
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, 
                                accusamus cupiditate beatae tempora nemo optio exercitationem necessitatibus. 
                                Doloremque, commodi cum.
                            </p>
                            <a href="#" className="btn btn-start"> Get Started </a>
                            <a href="#" className="btn btn-view"> View Courses</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}