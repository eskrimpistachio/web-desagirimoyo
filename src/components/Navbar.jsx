import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import NavbarMobile from './NavbarMobile';
import logo from './../assets/logo kab malang.png'

const Navbar = () => {
  const location = useLocation().pathname;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-secondary text-white flex flex-row justify-between font-poppins px-8 py-4">
        <a href="/">
          <div className='flex flex-row gap-4'>
            <img src={logo} alt="missing img" />
            <div className='flex flex-col mt-2'>
              <h2 className='text-base md:text-lg font-bold'>Desa Girimoyo</h2>
              <h4 className='text-[12px] md:text-base'>Kecamatan Karangploso, Kabupaten Malang</h4>
            </div>
          </div>
        </a>
        <div className="flex-row mt-4 gap-16 font-medium hidden md:flex">
          <Link
            to="/"
            className={` flex w-full mb-10 ${
              location === '/'
                ? 'underline underline-offset-8 decoration-2'
                : ''
            }`}
          >
            Beranda
          </Link>
          <Link
            to="/struktur"
            className={`flex w-full mb-10 ${
              location.includes('/struktur')
                ? 'underline underline-offset-8 decoration-2'
                : ''
            }`}
          >
            Struktur
          </Link>
          <Link
            to="/lembaga"
            className={`flex w-full mb-10 ${
              location === '/lembaga'
                ? 'underline underline-offset-8 decoration-2'
                : ''
            }`}
          >
            Lembaga
          </Link>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-3xl cursor-pointer md:hidden text-custgreen mt-4"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
      </div>
      <NavbarMobile open={open} />
    </>
  );
};

export default Navbar;
