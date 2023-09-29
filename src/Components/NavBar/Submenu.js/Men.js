import React,{Fragment} from 'react'
import {
    Topwear, indian_festive, bottomwear,
    Innerwear_Sleepwear, Footwear,
    Sports_Active_Wear, Gadgets, Fashion_Accessories,
  } from '../NavBarSub.js'
  import { useTransition, animated } from 'react-spring'
  import { Link } from "react-router-dom";

const Men = ({show, CMenu, parentCallback}) => {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
    
  })
  let H = window.screen.height 
    
  return (
   <Fragment>
       <div className="Menu">
       { transitions((styles, item) => item && <animated.div style={styles}>
        <div className="CMenu"
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className="sub-items">

            <div className=" sub-menu-items">
              <h1 className="subitems">Topwear</h1>
              {Topwear.map((data) =>
                <Link to="/products"><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />
              <h1 className="subitems">Indian&nbsp;&&nbsp;Festive&nbsp;Wear</h1>
              {indian_festive.map((data) =>
                <Link to="/products"><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>
            <div className=" sub-menu-items ">
              <h1 className="subitems">Bottomwear</h1>
              {bottomwear.map((data) =>
                <Link to="/products"><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />

              <h1 className="subitems">Innerwear&nbsp;&&nbsp;Sleepwear</h1>
              {Innerwear_Sleepwear.map((data) =>
                <Link to="/products"><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Plus&nbsp;Size</h1>

            </div>

            <div className=" sub-menu-items ">
              <h1 className="subitems">Footwear</h1>
              {Footwear.map((data) =>
                <Link to="/products"><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Personal&nbsp;Care&nbsp;&&nbsp;Grooming</h1>
              <hr className='py-1' />
              <h1 className="subitems">Sunglasses&nbsp;&&nbsp;Frames</h1>
              <hr className='py-1' />
              <h1 className="subitems">Watches</h1>
            </div>
            <div className=" sub-menu-items ">
            <h1 className="subitems">Sports&nbsp;&&nbsp;Active&nbsp;Wear</h1>
              {Sports_Active_Wear.map((data) =>
                <Link to="/products"><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Gadgets</h1>
              {Gadgets.map((data) =>
                <Link to="/products"><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>
            <div className=" sub-menu-items">
            <h1 className="subitems">Fashion&nbsp;Accessories</h1>
              {Fashion_Accessories.map((data) =>
                <Link to="/products"><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Bags&nbsp;&&nbsp;Backpacks</h1>
              <hr className='py-1' />
              <h1 className="subitems">Luggages&nbsp;&&nbsp;Trolleys</h1>
            </div>

          </div>

        </div>
        </animated.div>
      )}
      </div>
   </Fragment>
  )
}

export default Men