import portfolio1 from '../../assets/images/portfolio1.png'
import portfolio2 from '../../assets/images/portfolio2.png'
import portfolio3 from '../../assets/images/portfolio3.png'
import Star from './../Star/Star';

export default function Portfolio() {
    return (
        <>
        <div className="portfolio mb-4 mt-5 pt-5">
            <div className="container text-center">
                <div className="heading pt-4">
                <h1 className="text-uppercase mb-3">Portfolio Component</h1>
                <Star/>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4">
                        <div className='card position-relative'>
                            <img src={portfolio1} alt="" className='w-100 rounded-3'/>
                            <div className="overlay position-absolute rounded-3">
                                <a href="" data-bs-toggle="modal" data-bs-target=".exampleModal1">
                                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className='card position-relative'>
                            <img src={portfolio2} alt="" className='w-100 rounded-3'/>
                            <div className="overlay position-absolute rounded-3">
                                <a href="" data-bs-toggle="modal" data-bs-target=".exampleModal2">
                                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className='card position-relative'>
                            <img src={portfolio3} alt="" className='w-100 rounded-3'/>
                            <div className="overlay position-absolute rounded-3">
                                <a href="" data-bs-toggle="modal" data-bs-target=".exampleModal3">
                                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className='card position-relative'>
                            <img src={portfolio1} alt="" className='w-100 rounded-3'/>
                            <div className="overlay position-absolute rounded-3">
                                <a href="" data-bs-toggle="modal" data-bs-target=".exampleModal1">
                                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className='card position-relative'>
                            <img src={portfolio2} alt="" className='w-100 rounded-3'/>
                            <div className="overlay position-absolute rounded-3">
                                <a href="" data-bs-toggle="modal" data-bs-target=".exampleModal2">
                                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className='card position-relative'>
                            <img src={portfolio3} alt="" className='w-100 rounded-3'/>
                            <div className="overlay position-absolute rounded-3">
                                <a href="" data-bs-toggle="modal" data-bs-target=".exampleModal3">
                                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Modal */}
        <div className="modal fade exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <img src={portfolio1} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
            </div>
        <div className="modal fade exampleModal2" aria-labelledby="exampleModalLabe2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <img src={portfolio2} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
            </div>
        <div className="modal fade exampleModal3" aria-labelledby="exampleModalLabe3" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <img src={portfolio3} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
