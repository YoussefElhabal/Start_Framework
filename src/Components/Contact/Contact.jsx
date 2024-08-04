import Star from './../Star/Star';

export default function Contact() {
    return (
        <>
        <div className="contact mt-5 pt-5">
            <div className="container text-center">
                <div className="heading pt-4">
                    <h1 className="text-uppercase mb-3">Contact Section</h1>
                    <Star/>
                </div>
                <div className="form d-flex flex-column justify-content-center align-items-center py-5 mt-5">
                    <div className="mb-4 w-50 input">
                        <input type="text" className="form-control p-3" id="exampleFormControlInput1" placeholder="Name"/>
                    </div>
                    <div className="mb-4 w-50 input">
                        <input type="text" className="form-control p-3" id="exampleFormControlInput2" placeholder="Age"/>
                    </div>
                    <div className="mb-4 w-50 input">
                        <input type="email" className="form-control p-3" id="exampleFormControlInput3" placeholder="Email"/>
                    </div>
                    <div className="mb-4 w-50 input">
                        <input type="password" className="form-control p-3" id="exampleFormControlInput4" placeholder="Password"/>
                    </div>
                    <button className='btn mt-4 text-white'>Send Message</button>
                </div>
            </div>
        </div>
        </>
    )
}
