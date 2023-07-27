import logokabmalang from "../assets/logokabmalang2.png"
import logommd from "../assets/logommd.png"
import logo239 from "../assets/logo239.png"
import logoub from "../assets/logoub.png"

const Footer = () => {
  return (
    <>
      <div className="bg-footerbg bg-cover text-center md:text-left gap-8 md:gap-0 flex p-8 flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-0 md:gap-16 md:w-1/4">
          <h4 className="font-semibold text-lg">Hubungi Kami</h4>
          <div className="flex flex-col gap-4">
            <h6>Jalan P. Diponegoro No.04, Ngambon, Girimoyo, Kec. Karang Ploso, Kabupaten Malang, Jawa Timur</h6>
            <h6>Kode Pos 65152</h6>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 h-[60px]">
          <img src={logo239} alt="logo kel 239" />
          <img src={logoub} alt="logo ub" />
          <img src={logokabmalang} alt="logo kab malang" />
          <img src={logommd} alt="logo mmd" />
        </div>
        <div className="flex flex-col gap-0 md:gap-16">
          <h4 className="font-semibold text-lg">Tautan Terkait</h4>
          <div className="flex flex-col">
            <a href="https://karangploso.malangkab.go.id/">Kecamatan Karangploso</a>
            <a href="https://www.malangkab.go.id/mlg/">Kabupaten Malang</a>
          </div>
        </div>
      </div>
      <div className="pattern-lines text-sm md:text-base font-semibold text-center py-4 px-8">
        <h1>2023. Program MMD 1000 Desa, Universitas Brawijaya. Kelompok 239
        </h1>
      </div>
    </>
  );
};

export default Footer;
