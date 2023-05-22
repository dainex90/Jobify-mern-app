
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            {/* Info*/}
            <div className='info'>
              <h1>job <span>tracking</span> app
              </h1>
              <p>
                I'm baby master cleanse vape fixie bushwick iceland. 
                Ennui gochujang mlkshk microdosing seitan pitchfork literally 3 
                wolf moon glossier palo santo authentic hoodie art party bruh. 
                Polaroid live-edge yuccie, before they sold out mlkshk coloring 
                book taiyaki activated charcoal jianbing four loko tattooed. 
                Pork belly chillwave freegan flannel XOXO, grailed green juice 
                tbh. Tofu tousled squid mustache, poutine everyday carry retro 
                locavore pickled.
              </p>
              <Link to='/register' className='btn btn-hero'>
                Login/Register
              </Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' ></img>
        </div>
    </Wrapper>
  )
}


export default Landing
