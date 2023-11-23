import './Cont.scss'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {RiTwitterXLine} from 'react-icons/ri'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

function Cont(){
    return(
        <section className='home'>
            <div className="overlay"></div>
            <video src={"/MT.mp4"} muted autoPlay loop type="video/mp4"></video>

            <div className='homeContent container'>
                <div className='textDiv'>
                    <span className='smallText'>
                        Our Packages
                    </span>
                    <h1 className='homeTitle'>
                        Search your Holiday
                    </h1>
                </div>

                <div className='cardDiv grid'>
                    <div className='destinationInput'>
                        <label htmlFor='city'>Search your destination:</label>
                        <div className='input flex'>
                            <input type='text' placeholder='Enter city here...'/>
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className='dateInput'>
                        <label htmlFor='date'>Select your dates:</label>
                        <div className='input flex'>
                            <input type='date'/>
                        </div>
                    </div>

                    <div className='priceInput'>
                        <div className="label_total flex">
                            <label htmlFor='price'>Max price:</label>
                            <h3 className='total'>$5000</h3>
                        </div>
                        <div className='input flex'>
                            <input type="range" max="5000" min="1000"/>
                        </div>
                    </div>

                    <div className='searchOptions flex'>
                        <HiFilter className="icon"/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div className='homeFooterIcons flex'>
                    <div className='rightIcons'>
                        <FiFacebook className="icon"/>
                        <div className="icon">
                            <FiInstagram/>
                        </div>
                        <RiTwitterXLine className="icon"/>
                    </div>

                    <div className='leftIcons'>
                        <div className="icon">
                            <BsListTask/>
                        </div>
                        <div className="icon">
                        <TbApps/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Cont