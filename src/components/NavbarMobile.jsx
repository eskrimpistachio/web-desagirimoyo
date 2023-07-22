import { Link, useLocation } from 'react-router-dom';

const NavbarMobile = ({ open }) => {
  const location = useLocation().pathname;

  return (
    <div>
      {open ? (
        <div className="text-center ease-in text-white bg-secondary font-semibold font-poppins flex flex-col gap-8 py-8 absolute h-[40vh] w-full z-10">
          <div className="mx-6">
            <ul
              className={`lg:hidden flex flex-col text-lg justify-evenly gap-8 z-[-1]`}
            >
              <Link
                to="/"
                className={`flex w-full mb-5 ${
                  location === '/'
                    ? 'underline underline-offset-8 decoration-2'
                    : ''
                }`}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Beranda
              </Link>
              <Link
                to="/struktur"
                className={`flex w-full mb-5 ${
                  location.includes('/struktur')
                    ? 'underline underline-offset-8 decoration-2'
                    : ''
                }`}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Struktur
              </Link>
              <Link
                to="/lembaga"
                className={`flex w-full mb-5 ${
                  location === '/lembaga'
                    ? 'underline underline-offset-8 decoration-2'
                    : ''
                }`}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Lembaga
              </Link>
            </ul>
          </div>
        </div>
      ) : ''}
    </div>
  );
};

export default NavbarMobile;
