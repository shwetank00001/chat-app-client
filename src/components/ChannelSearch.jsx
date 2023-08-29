import React, { useEffect, useState } from 'react'
import {   useChatContext } from 'stream-chat-react'

import { SearchIcon } from '../assets'

const ChannelSearch = () => {

    const [ query, setQuery ] = useState('')
    const [ loading, setLoading ] = useState(false)

    async function getChannels(text){
        try {
            //* fetch channels
        } catch (error) {
            console.log(error)
            setQuery('')
        }
    }

    function onSearch(e){
        e.preventDefault()
        console.log("run")
        setLoading(true)
        setQuery(e.target.value);

        getChannels(e.target.value)
    }

  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
                <SearchIcon />
            </div>

            <input className='channel-search__input__text' 
                placeholder='search' 
                type='text' 
                value={query}
                onChange={onSearch} />

        </div>
    </div>
  )
}

export default ChannelSearch