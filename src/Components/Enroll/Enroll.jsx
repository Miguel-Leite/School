import image from './img/enroll.svg'
import './Enroll.css'

export default function Enroll () {
    return(
        <div className="enroll">
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-md-6 mb-3 mt-1">
                        <h1 className="_title">How make enroll</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eligendi placeat beatae commodi unde ullam quasi ducimus 
                            dolores natus minus minima enim quidem ut vitae fugiat, 
                            nobis sapiente possimus saepe a.
                        </p>
                        <p>
                            dolor sit amet consectetur adipisicing elit. 
                            Eligendi placeat beatae commodi unde ullam quasi ducimus 
                            dolores natus minus minima enim quidem ut vitae fugiat, 
                            nobis sapiente possimus saepe a.
                        </p>

                        <a href="#" className="btn btn-enroll">Make enroll</a>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6 mb-3 mt-1">
                        <img src={ image } className="w-100" alt="Enroll" />
                    </div>
                </div>
            </div>
        </div>        
    )
}