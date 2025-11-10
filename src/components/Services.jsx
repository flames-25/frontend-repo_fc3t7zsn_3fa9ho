import React from 'react';
import { Activity, Baby, HeartPulse, Syringe, ScanEye, Shield } from 'lucide-react';

const services = [
  {
    title: 'Poli Penyakit Dalam',
    desc: 'Diagnosa dan penanganan penyakit sistemik seperti diabetes, hipertensi, dan gangguan metabolik.',
    icon: Activity,
  },
  {
    title: 'Poli Kandungan & Kebidanan',
    desc: 'Pelayanan kesehatan ibu dan anak, kehamilan, USG, hingga program persalinan nyaman.',
    icon: Baby,
  },
  {
    title: 'Poli Jantung',
    desc: 'Pemeriksaan EKG, echocardiography, dan penanganan gangguan kardiovaskular.',
    icon: HeartPulse,
  },
  {
    title: 'Poli THT',
    desc: 'Penanganan gangguan telinga, hidung, dan tenggorokan dilengkapi alat endoskopi modern.',
    icon: ScanEye,
  },
  {
    title: 'Vaksinasi & Imunisasi',
    desc: 'Layanan vaksin anak dan dewasa dengan standar keamanan tinggi.',
    icon: Syringe,
  },
  {
    title: 'IGD 24 Jam',
    desc: 'Unit gawat darurat siaga 24 jam dengan dokter dan perawat terlatih.',
    icon: Shield,
  },
];

const Services = () => {
  return (
    <section id="layanan" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Fasilitas Layanan & Poliklinik</h2>
        <p className="text-gray-600 text-center mt-2">Deskripsi singkat untuk setiap layanan poliklinik yang tersedia.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="p-3 rounded-xl bg-purple-100 text-purple-700 inline-flex">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-md text-xs bg-emerald-50 text-emerald-700 border border-emerald-100">Dokter berpengalaman</span>
                <span className="px-2 py-1 rounded-md text-xs bg-purple-50 text-purple-700 border border-purple-100">Peralatan modern</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
