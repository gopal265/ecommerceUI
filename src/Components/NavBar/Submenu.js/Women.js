import React,{Fragment} from 'react'
import {Indian_FusionWear, Western_Wear,Shop_Occassion,
    WFootwear,Sports_ActiveWear,Lingerie_Sleepwear,
    Beauty_Personal_Care,
  } from '../NavBarSub.js'
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom";

const Women = ({show, CMenu, parentCallback}) => {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
    
  })
  let H = window.innerHeight - 80
    
  return (
   <Fragment>
       <div className="Menu">
       { transitions((styles, item) => item && <animated.div style={styles}>
        <div className="CMenu"
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}
        >
          <div className="sub-items">

            <div className=" sub-menu-items">
              <h1 className="subitems">Indian&nbsp;&&nbsp;Fusion Wear</h1>
              {Indian_FusionWear.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

              <hr className='py-1' />
              <h1 className="subitems">Belts,&nbsp;Scarves&nbsp;&&nbsp;More</h1>
              <hr className='py-1' />
              <h1 className="subitems">Watches&nbsp;&&nbsp;Wearables</h1>
            </div>

            <div className=" sub-menu-items ">
              <h1 className="subitems">Western&nbsp;Wear</h1>
              {Western_Wear.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className=" sub-menu-items ">
              <h1 className="subitems">Shop&nbsp;By&nbsp;Occassion</h1>
              {Shop_Occassion.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Plus&nbsp;Size</h1>
              <hr className='py-1' />
              <h1 className="subitems">Maternity</h1>
              <hr className='py-1' />
              <h1 className='subitems'>Sunglasses&nbsp;&&nbsp;Frames</h1>
            </div>

            <div className="sub-menu-items ">
            <h1 className="subitems">Footwear</h1>
              {WFootwear.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Sports&nbsp;&&nbsp;Active&nbsp;Wear</h1>
              {Sports_ActiveWear.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}

            </div>

            <div className=" sub-menu-items">
            <h1 className="subitems">Lingerie&nbsp;&&nbsp;Sleepwear</h1>
              {Lingerie_Sleepwear.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
              <hr className='py-1' />
              <h1 className="subitems">Beauty&nbsp;&&nbsp;Personal&nbsp;Care</h1>
              {Beauty_Personal_Care.map((data) =>
                <Link to='/products'><li className="data"onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
              )}
            </div>

          </div>

        </div>
        </animated.div>
      )}
      </div>
   </Fragment>
  )
}

export default Women