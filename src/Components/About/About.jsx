import Star from "../Star/Star";

export default function About() {
    return (
        <>
        <div className="about min-vh-100 text-white d-flex justify-content-center align-items-center mt-5">
            <div className="container">
                <h1 className="text-uppercase text-center mb-3">About Component</h1>
                <Star/>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-5">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
