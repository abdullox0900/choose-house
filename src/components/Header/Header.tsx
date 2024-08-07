'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import LocalSwitcher from './LocalSwitcher';
import Image from 'next/image';

import SiteLogo from '@/assets/svg/site-logo.svg'
import { useTranslations } from 'next-intl';
import HamburgerMenu from './HamburgerMenu';

const Header: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('header');

  return (
    <header className="fixed left-1/2 -translate-x-1/2 top-5 w-[95%] rounded-[10px] bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          <Image src={SiteLogo} alt='site-logo' />
        </Link>
        <nav className='flex items-center gap-[15px]'>
          <ul className={`${isMenuOpen ? '' : ''} flex space-x-4 max-tablet:hidden`}>
            <li>
              <Link href="/kategoriyalar" className="text-white hover:text-blue-200">
                {t('categories')}
              </Link>
            </li>
            <li>
              <Link href="/halol-nasiya" className="text-white hover:text-blue-200">
                {t('halal_installment')}
              </Link>
            </li>
            <li>
              <Link href="/chegirma" className="text-white hover:text-blue-200">
              {t('discount')}
              </Link>
            </li>
            <li>
              <Link href="/premium-house" className="text-white hover:text-blue-200">
                {t('premium_house')}
              </Link>
            </li>
            <li>
              <Link href="/shaxardan-tashqari" className="text-white hover:text-blue-200">
                {t('outside_city')}
              </Link>
            </li>
          </ul>
        <LocalSwitcher />
        <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        </nav>
      </div>
    </header>
  );
};

export default Header;