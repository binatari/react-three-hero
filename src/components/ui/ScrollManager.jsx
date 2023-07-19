import { useScroll } from '@react-three/drei'
import React, { useRef } from 'react'

const ScrollManager = (props) => {
    const {section, onSectionChange} = props
    const data = useScroll()
    const lastScroll = useRef(0)
    const isAnimating = useRef(false)

    useRef(()=>{
      if(isAnimating.current) {
        lastScroll.current = data.scroll.current
        return;
      } 

      const curSection = Math.floor(data.scroll.current * data.pages);
      if(data.scroll.current > lastScroll.current && curSection === 0){
        
      }
    })
  return null
}

export default ScrollManager