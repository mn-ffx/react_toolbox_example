import React from 'react'

import CustomAppBar from '../CustomAppBar'
import CustomButton from '../CustomButton'
import CustomLink from '../CustomLink'
import CustomNavigation from '../CustomNavigation'
import Sidepart from '../Sidepart'

import logo from '../../images/logo.png'

class Header extends React.Component {
  render() {
    return (
      <CustomAppBar className='appbar'>
        <Sidepart>
          <img src={logo} alt='logo' />
        </Sidepart>
        <CustomNavigation type='horizontal' className='navigation'>
          <CustomLink href='/' label='PARTNER WITH US' className='pages' />
          <CustomLink href='/' label='ABOUT US' className='pages' />
          <CustomLink href='/' label='OUR NETWORK' className='pages' />
          <CustomLink href='/' label='NEWS' className='pages' />
          <CustomLink href='/' label='EVENTS' className='pages' />
          <CustomLink href='/' label='CAREERS' className='pages' />
        </CustomNavigation>
        <Sidepart>
          <CustomNavigation type='horizontal' className='navigation'>
            <CustomLink href='#' label='EN' className='pages' />
            <span>|</span>
            <CustomLink href='#' label='DE' className='pages' />
          </CustomNavigation>
          <CustomButton label='CONTACT US' className='navigateButton'/>
        </Sidepart>
      </CustomAppBar>
    )
  }
}

export default Header
