import React from 'react'

import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import HospitalItem from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className='channel-list__sidebar'>

      <div className='channel-list__sidebar__icon1'>
        <div className='icon1__inner'>
          <img src={HospitalItem} alt='hospital' width="30" />
        </div>
      </div>

      <div className='channel-list__sidebar__icon2'>
        <div className='icon2__inner'>
          <img src={LogoutIcon} alt='logout' width="30" />
        </div>
      </div>

    </div>
  )


const CompanyHeader = () => (
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>Shwetank's Messenger app</p>

  </div>
)

const ChannelListContainer = () => {
  return (
    <div>
      <SideBar />
      <div className='channel-list__list__wrapper'>
        <CompanyHeader />
        <ChannelSearch />
        
        <ChannelList 
          filters={{}}
          channelRenderFilterFn={ () => {}}
          List={ (listProps) => (
            <TeamChannelList {...listProps} type="team" />
          )}
          Preview={ (prevProp) => {
            <TeamChannelPreview {...prevProp} type="team" />
          }}
          />

        <ChannelList 
          filters={{}}
          channelRenderFilterFn={ () => {}}
          List={ (listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={ (prevProp) => {
            <TeamChannelPreview {...prevProp} type="messaging" />
          }}
          />

      </div>
    </div>
  )
}

export default ChannelListContainer