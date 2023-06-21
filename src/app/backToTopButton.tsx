'use client'

import { useEffect, useState } from "react"
import { FiChevronUp } from 'react-icons/fi'

export const BackToTopButton = () => { 
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 300) {
      setIsVisible(true)
    } else { 
      setIsVisible(false)
    }
  }

  const scrollToTop = () => { 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  useEffect(() => { 
    window.onscroll = handleScroll
    return () => {
      window.onscroll = null
    }
    
  }, [])
  
  return ( 
    <button 
      className={`fixed right-4 bottom-4 p-2 bg-violet-800 text-white rounded-full transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
    > 
      <FiChevronUp size={24} />
    </button>
  )
}

