import React, { useEffect, useState } from 'react';
import LogoDark from '../assets/images/logo-dark.svg';
import LogoLight from '../assets/images/logo-white.svg';
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs';
import GirlImage from '../assets/images/girl.png';
const Hero = () => {
  const [themes, setThemes] = useState('dark');


  // generate modes in the local host
  useEffect(() => {
    const html = document.querySelector('html');
    if (localStorage.getItem('themes') === 'dark') {
      html.classList.add('dark');
      setThemes('dark');
    }
    else {
      html.classList.remove('dark');
      setThemes('light');
    }
  }, [themes])


  // switch the modes
  const handleThemeSwitch = () => {
    if (localStorage.getItem('themes') === 'light') {
      setThemes('dark');
      localStorage.setItem("themes", "dark");
    }
    else {
      setThemes('light');
      localStorage.setItem("themes", "light");
    }

  }
  return (
    <section className='h-screen w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark'>
      <div className='container mx-auto px-4 lg-px-0 '>
        <header className='flex justify-between items-center py-8 '>
          {/* logo */ }
          <div>
            <a href='#'>
              { themes === 'light' ? <img src={ LogoDark } /> : <img src={ LogoLight } /> }
            </a>
          </div>

          <button className='p-4 bg-accent text-white rounded-full w-12 flex justify-center items-center ' onClick={ handleThemeSwitch }>
            { themes === 'light' ? <BsMoonFill /> : <BsFillSunFill /> }
          </button>

        </header>
        <div className=' flex items-center justify-between px-8 container'>
          <div>
            <h1 className='text-5xl text-primary font-bold mb-6 leading-[60px] dark:text-white '>Online Accounting <br /> <span className='text-accent'>fast & Uncomplicated </span></h1>
            <p className='font-light text-grey mb-12 max-w-[597px] dark:text-white'>
              We specialize in small businesses. Our goale is to eliminate
              bureaucracy, creating a modern relationship between your company
              and the accountant.
            </p>
            <div className='flex flex-col gap-y-6 mb-12'>
              {/* item */ }
              <div className='flex items-center gap-x-2'>
                {/* item icon */ }
                <div className='bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white'>
                  <BsCheck />
                </div>
                {/* item text */ }
                <p className='text-base font-light  dark:text-white'>
                  Have your accounting 100% online.
                </p>
              </div>
              {/* item */ }
              <div className='flex items-center gap-x-2'>
                {/* item icon */ }
                <div className='bg-accent/10 text-accent w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white'>
                  <BsCheck />
                </div>
                {/* item text */ }
                <p className='text-base font-light  dark:text-white'>
                  Save with plans starting at $10/month.
                </p>
              </div>
            </div>
            {/* button */ }
            <button className='btn dark:t'>Discover our plans</button>
          </div>
        <div className='hidden lg:flex'>
          <img src={ GirlImage } alt='girl img' />
        </div>
        </div>
      </div>
    </section >
  )
}

export default Hero