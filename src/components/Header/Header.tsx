'use client'

import SiteLogo from '@/assets/svg/site-logo.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import HamburgerMenu from './common/HamburgerMenu'
import LocalSwitcher from './common/LocalSwitcher'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('header')

  const menuAnimation = useSpring({
    height: isMenuOpen ? (menuRef.current?.scrollHeight || 0) : 0,
    marginTop: isMenuOpen ? 20 : 0,
    opacity: isMenuOpen ? 1 : 0,
    config: {
      tension: 400,
      friction: 26,
      clamp: true  // Bu animatsiyani to'xtatadi agar maqsadga yetsa
    }
  })

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.height = isMenuOpen
        ? `${headerRef.current.offsetHeight + (menuRef.current?.scrollHeight || 0)}px`
        : 'auto'
    }
  }, [isMenuOpen])

  return (
    <header ref={headerRef} className="fixed left-1/2 -translate-x-1/2 top-5 w-[95%] rounded-[10px] bg-blue-500 p-4 overflow-hidden transition-all duration-300 ease-in-out">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            <Image className='max-mobile-m:w-[110px]' src={SiteLogo} alt='site-logo' />
          </Link>
          <div className='flex items-center gap-[15px] max-mobile-m:gap-[8px]'>
            <nav className='max-tablet:hidden'>
              <ul className="flex items-center gap-[30px]">
                {['categories', 'halal_installment', 'discount', 'premium_house', 'outside_city'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`} className="text-white hover:text-blue-200">
                      {t(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <LocalSwitcher />
            <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          </div>
        </div>
        <animated.div style={menuAnimation} className="tablet:hidden">
          <nav ref={menuRef}>
            <ul className="flex flex-col space-y-2 h-[180px]">
              {['categories', 'halal_installment', 'discount', 'premium_house', 'outside_city'].map((item) => (
                <li key={item}>
                  <Link href={`/${item}`} className="text-white hover:text-blue-200">
                    {t(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </animated.div>
      </div>
    </header>
  )
}

export default Header