import sample from '../assets/sample.png';
import people from '../assets/people.png';

const Home = () => {
  return (
    <>
      <div className="bg-landingbg h-[90vh] bg-cover">
        <div className="flex flex-col md:w-1/2 px-8 gap-16 md:gap-12 py-10">
          <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
            Selamat datang di Desa Girimoyo!
          </h1>
          <p className="text-sm text-justify 2xl:text-lg">
            Desa Girimoyo adalah desa yang terletak di Kecamatan Karangploso,
            Kabupaten Malang. Tempat di mana keindahan abadi dan kebersamaan
            komunitas bersatu. Temukan inti pesona pedesaan dan merasakan dunia
            yang memuliakan tradisi, keindahan alam, dan kehangatan silaturahmi
            yang tulus.
          </p>
          <div className="flex flex-col font-bold text-base lg:text-lg gap-2">
            <h4>Desa : Girimoyo</h4>
            <h4>Kecamatan : Karangploso</h4>
            <h4>Kabupaten : Kab. Malang</h4>
            <h4>Provinsi : Jawa Timur</h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row text-black mt-16 md:mt-32 px-8 gap-4 md:gap-16 lg:gap-36">
        <div className="border-2 border-secondary rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22356.139300237865!2d112.58380388155341!3d-7.890421349037165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881c828457503%3A0xe82aa086661abc8e!2sGirimoyo%2C%20Karang%20Ploso%2C%20Malang%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1689657367046!5m2!1sen!2sid"
            // width="600"
            // height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl w-full h-[80vh] md:w-[40vw] md:h-[70vh]"
          ></iframe>
        </div>
        <div className="flex flex-col gap-10 md:w-[40%]">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Lokasi Desa Girimoyo
          </h1>
          <p className="text-justify text-sm md:text-base">
            Girimoyo adalah sebuah desa di wilayah Kecamatan Karangploso,
            Kabupaten Malang, Provinsi Jawa Timur. Desa ini merupakan jalur
            utama memasuki kota wisata Batu, hampir semua wisatawan yang akan
            berlibur ke kota Batu dari arah timur dan utara dipastikan melalui
            desa Girimoyo.
          </p>
          <div className="flex flex-row gap-8 text-secondary">
            <a
              className="underline decoration-2"
              href="https://goo.gl/maps/juRMQrQyqJk3p5RbA"
              target="_blank"
              rel="noreferrer"
            >
              Lihat detail melalui Google Maps
            </a>
            <div className="text-xl">
              <ion-icon name="arrow-forward"></ion-icon>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='flex flex-col text-black mt-16 md:mt-32 px-8'>
        <h1 className="text-3xl md:text-5xl font-semibold">Daftar Kepala Desa</h1>

      </div> */}
      <div className="flex flex-col text-black mt-16 md:mt-32 px-8 gap-8">
        <h1 className="text-3xl md:text-5xl font-semibold">Sejarah Desa</h1>
        <div className="flex flex-col text-justify gap-4 text-sm md:text-base">
          <p>
            Berdasarkan cerita turun temurun, Desa Girimoyo terletak di kaki
            Gunung Arjuna konon berupa hutan belantara yang berhawa sejuk,
            masyarakat yang berkultur petani. Pada jamannya Girimoyo adalah dua
            nama yang dijadikan satu yaitu Giri dan Moyo yang mempunyai arti
            Giri diartikan dengan Gunung dan Moyo adalah Maya ( nyata akan
            tetapi tidak, dapat ada / samar ) dapat diartikan bahwa desa
            Girimoyo adalah Gunung yang samar / maya.
          </p>
          <p>
            Hal ini dapat kita buktikan kalau kita berada di kota Malang dan
            kita memandang ke arah barat menuju Desa Girimoyo, Desa Girimoyo
            kelihatan di tengah tengah gunung Arjuna, kalau kita benar benar
            menuju ke Desa Girimoyo ternyata kita tidak pernah menaiki Gunung
            seakan akan landai landai saja, dan masih cerita dari mulut ke
            mulut, yang membabat hutan Desa Girimoyo dua orang yakni Mbah
            Singodjojo yang membabat tanah di dusun Karangploso dan dusun
            Genengan sedangkan Mbah Singoredjo membabat hutan di dusun Ngambon
            dan sekitarnya.
          </p>
          <p>
            Kedua petilasan dua orang tersebut sampai dengan saat ini masih ada,
            dan setiap tanggal 10 Suro dalam penanggalan Jawa selalu diperingati
            dan dijadikan hari jadi Desa Girimoyo. Dalam cerita kerajaan
            Singosari, Desa Girimoyo tidak disebut namun pada waktu penyerbuan
            tentara kerajaan Singosari ke Kerajaan Kediri melewati Desa
            Girimoyo, karena jalan darat yang terdekat melalui Desa Girimoyo.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row text-black mt-16 md:mt-32 px-8 gap-4 md:gap-16 lg:gap-36">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Potensi Sumber Daya Alam
          </h1>
          <div>
            <ol className="flex flex-col gap-4">
              <div>
                <li>a. Batas Wilayah</li>
                <ol className="ml-5">
                  <li>i. Sebelah Utara : Desa Bocek</li>
                  <li>ii. Sebelah Selatan : Desa Pendem</li>
                  <li>iii. Sebelah Timur : Desa Ngijo</li>
                  <li>iv. Sebelah Barat : Desa Donowarih</li>
                </ol>
              </div>
              <li>b. Luas Wilayah : 321, 51 Ha</li>
              <li>c. Topografi : Desa / Kelurahan di lereng gunung</li>
            </ol>
          </div>
        </div>
        <div>
          <img src={sample} alt="missing img" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-black mt-16 md:mt-32 px-8 gap-4 md:gap-16 lg:gap-36">
        <div>
          <img src={people} alt="missing img" />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Potensi Sumber Daya Manusia
          </h1>
          <div>
            <ol className="flex flex-col gap-4">
              <li>a. Jumlah total : 6672 Orang</li>
              <li>b. Jumlah laki-laki : 3380 Orang</li>
              <li>c. Jumlah perempuan : 3292 Orang</li>
              <li>d. Jumlah kepala keluarga : 1906</li>
              <li>e. Kepadatan penduduk : 1,910 per KM</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-black my-32 px-8 gap-8">
        <h1 className="text-3xl md:text-5xl font-semibold">APB-Desa</h1>
        <div>
          <p className='mb-4 font-semibold'>
            Anggaran Pendapatan dan Belanja Desa Girimoyo Tahun Anggaran 2023
            sebagai berikut :
          </p>
          <ol className='flex flex-col gap-4'>
            <div>
              <li>1. PENDAPATAN DESA</li>
              <ol className="ml-5">
                <li>a. Pendapatan Asli Desa : Rp. 317,275,000.00</li>
                <li>b. Pendapatan Transfer : Rp. 1,594,485,000.00</li>
                <li>c. Lain-lain Pendapatan : Rp. 229,017,533.48</li>
                <li className='font-bold'>Jumlah Pendapatan : Rp. 2,140,777,533.48</li>
              </ol>
            </div>
            <div>
              <li>2. BELANJA DESA</li>
              <ol className="ml-5">
                <li>
                  a. Bidang Penyelengaraan Pemerintahan Desa : Rp.
                  1,212,535,583.48
                </li>
                <li>b. Bidang Pelaksanaan Pembangunan : Rp. 548,677,600.00</li>
                <li>c. Bidang Pembinaan Kemasyarakatan : Rp. 123,655,000.00</li>
                <li>d. Bidang Pemberdayaan Masyarakat : Rp. 197,523,700.00</li>
                <li>e. Bidang Tak Terduga : Rp. 238,715,960.00</li>
              </ol>
            </div>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Home;
