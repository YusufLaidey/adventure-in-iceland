import React from 'react'
import styled from 'styled-components'

import Vector from './Vector.svg'
import aurora from './aurora.svg'
import arrow from './arrow.svg'

const Header = () => {
  return (
    <Wrapper>
      <div className='div'>
        <div className='div1'>
          <div className='flex'>
            <p className='usd'>USD</p>
            <img classname='vector' src={Vector}  alt=' vector'/>
          </div>
          <div className='flex'>
            <p className='usdd'>ENGLISH</p>
            <img classname='vector' src={Vector}  alt=' vector'/>
          </div>
          <div className='flex'>
            <p className='cart'>CART</p>
            <img classname='vector' src={Vector}  alt=' vector'/>
           {/* <p className='background'>2</p> */}
          </div>
          </div>
          <div className='div1'>
            <p className='book'>Book your trip</p>
            <p className='rent'>Rent a car</p>
            <p className='wifi'>Wifi rental</p>
          </div> 
     </div>
      <div className='div2'>
      <div>
      <p className='your'>Your adventure <p className='in'>in Iceland</p></p>
     </div>
     <div className='div1'>
      <div className='tour'>
        <p className='tours'>Tours</p>
      </div>
      <div className='tourr'>
        <p className='tourss'>Rent car</p>
      </div>
      <div className='tourr'>
        <p className='toursss'>Wifi rental</p>
      </div>
      <div className='aura'>
      <img classname='aurora' src={aurora}  alt=' vector'/>
      <p className='we'>we recommend</p>
      <div className='div1'>
        <p className='six'>6 day winter circle</p>
        <div className='div1'>
          <p className='view'>view tour</p>
          <img src={arrow} alt='arrow' className='arrow' />
        </div>
      </div>
      </div>
      </div>
      <div className='width'></div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.button`
.div {
  height: 160px;
  width: 1440px;
  background: #C4C4C4;
}

.div1 {
  display: flex;
}

.div2 {
  background: #F0F4FA;
}

.flex {
  display: flex;
  margin-top: 31px;
}

.usd {
  height: 13px;
  width: 22px;
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #535968;
  margin-left: 1072px;
  margin-right: 10px;
}

.usdd {
  height: 13px;
  width: 22px;
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #535968;
  margin-left: 28.87px;
  margin-right: 36px;
}

.cart {
  height: 13px;
  width: 22px;
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #535968;
  margin-left: 28.87px;
  margin-right: 16px;
}

.vector {
  height: 5px;
  width: 10px;
  margin-top: 31px;
  margin-left: 10px;
}

.background {
  height: 21px;
  width: 21px;
  border-radius: 20px;
  background: #5AB9FC;
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
  margin-top: 31px;
}

.book {
  height: 19px;
  width: 102px;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #535968;
  margin-left: 954px;
  margin-top: 29px;
}

.rent {
  height: 19px;
  width: 76px;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #535968;
  margin-left: 44px;
  margin-top: 29px;
}

.wifi {
  height: 19px;
  width: 75px;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #535968;
  margin-left: 40px;
  margin-top: 29px;
}

.your {
  height: 100px;
  width: 280px;
  font-family: Gilroy;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
  color: #252525;
  margin-top: 0px;
  margin-left: 153px;
}

.in {
  font-family: Gilroy;
  font-size: 40px;
  font-weight: 500;
  line-height: 49px;
  letter-spacing: 0em;
  text-align: left;
  color: #097882;
  margin-top: 10px;
}

.tour {
  height: 55px;
  width: 190px; 
  background: #FFFFFF;
  margin-left: 151px;
  margin-top: 41px;
}

.tourr {
  height: 55px;
  width: 190px; 
  background: #FFFFFF;
  margin-top: 41px;
}

.tours {
  height: 13px;
  width: 35px;
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;
  color: #096676;
  margin-left: 71px;
  margin-top: 21px;
}

.tourss {
  height: 13px;
  width: 51px;
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;
  color: #096676;
  margin-left: 71px;
  margin-top: 21px;
}

.toursss {
  height: 13px;
  width: 63px;
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;
  color: #096676;
  margin-left: 71px;
  margin-top: 21px;
}

.width {
  height: 475px;
  width: 721px;
  background: linear-gradient(66.7deg, #099292 -66.11%, #085E71 100%);
  margin-top: -328px;
}

.aura {
  margin-top: -102px;
}

.aurora {
  height: 561px;
  width: 860px;
}

.we {
  height: 13px;
  width: 98px;
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;
  text-transform: uppercase;
  margin-top: -140px;
  margin-left: 59px;
  
}

.six {
  height: 37px;
  width: 252px;
  font-family: Gilroy;
  font-size: 30px;
  font-weight: 600;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;
  margin-top: 12px;
  margin-left: 59px;
}

.view {
  height: 13px;
  width: 66px;
  font-family: Gilroy;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;
  text-transform: uppercase;
  margin-left: 175px;
}

.arrow {
  height: 9.044464111328125px;
  width: 18.0000057220459px;
  color: #FFFFFF;
  margin-left: 8px;
  margin-top: 12px;
}
`

export default Header