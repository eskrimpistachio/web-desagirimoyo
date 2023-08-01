const Lembaga = () => {
  return (
    <div className="flex flex-col text-black my-16 ">
      <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center">
        Lembaga Desa
      </h1>
      <table className="text-center my-8 md:my-16 mx-10 table-auto border-collapse border border-slate-500 text-sm md:text-base">
        <thead>
          <tr>
            <th className="border border-slate-600" scope="col">Nama Lembaga</th>
            <th className="border border-slate-600" scope="col">Alamat Kantor</th>
            <th className="border border-slate-600" scope="col">Ruang Lingkup Kegiatan</th>
            <th className="border border-slate-600" scope="col">Jumlah Pengurus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border border-slate-700" scope="row">LPMD / LPMK </th>
            <td className="border border-slate-700">Jl. Diponegoro No.4, Desa Girimoyo - Karangploso</td>
            <td className="border border-slate-700 text-left px-4 py-2">
              <p>1. Pendampingan Perencanaan Pembangunan</p>
              <p>2. Pendampingan Pelaksanaan Pembangunan</p>
            </td>
            <td className="border border-slate-700">10 Orang</td>
          </tr>
          <tr>
            <th className="border border-slate-700" scope="row">BUMD</th>
            <td className="border border-slate-700">Jl. Diponegoro RT 016 RW 004, Desa Girimoyo - Karangploso</td>
            <td className="border border-slate-700 text-left px-4 py-2">
              <p>1. Perdagangan</p>
              <p>2. Jasa</p>
              <p>3. Sewa Kios dan Lapak</p>
            </td>
            <td className="border border-slate-700">5 Orang</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Lembaga;
