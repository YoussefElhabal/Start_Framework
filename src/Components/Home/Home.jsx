import avatar from '../../assets/images/avatar.svg'
import Star from '../Star/Star'

export default function Home() {
    return (
        <>
        <div className="home min-vh-100 d-flex flex-column justify-content-center align-items-center mt-5">
            <img src={avatar} alt="" className='mb-3'/>
            <div className="content text-white text-center">
            <h1 className='text-uppercase pt-4 mb-3'>Start Framework</h1>
            <Star/>
            <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
        </>
    )
}
