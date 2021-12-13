import './style.css'
import img1 from './img/card-1.png'
import img2 from './img/card-2.png'
import img3 from './img/card-3.png'
import img4 from './img/card-4.png'


export default function CoursesItems(){
    return(
        <div>
            <div className="row">

                <div className="col-lg-3 col-sm-6 col-md-12">
                    <div class="card">
                        <img class="card-img-top w-100" src={ img1 } alt="" />
                        <div class="card-body">
                            <div className="line"></div>
                            <h6 class="card-title">Instrution Create an lice Cream Sticker</h6>
                            <p className="card-text">Duration: 4 year</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-12">
                    <div class="card">
                        <img class="card-img-top w-100" src={ img2 } alt="" />
                        <div class="card-body">
                            <div className="line"></div>
                            <h6 class="card-title">Instrution Create an lice Cream Sticker</h6>
                            <p className="card-text">Duration: 4 year</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-12">
                    <div class="card">
                        <img class="card-img-top" src={ img3 } alt="" />
                        <div class="card-body">
                            <div className="line"></div>
                            <h6 class="card-title">Instrution Create an lice Cream Sticker</h6>
                            <p className="card-text">Duration: 4 year</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-12">
                    <div class="card">
                        <img class="card-img-top" src={ img4 } alt="" />
                        <div class="card-body">
                            <div className="line"></div>
                            <h6 class="card-title">Instrution Create an lice Cream Sticker</h6>
                            <p className="card-text">Duration: 4 year</p>
                        </div>
                    </div>
                </div>

                </div>
        </div>
    )
}