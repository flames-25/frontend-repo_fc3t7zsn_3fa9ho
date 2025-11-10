import React from 'react';
import { Hospital, Star, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-emerald-500 opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
              <Star className="w-4 h-4" />
              Rumah Sakit Terakreditasi Paripurna
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Layanan Kesehatan Modern, Nyaman, dan Terpercaya
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Kami menyediakan layanan kesehatan terpadu dengan dokter spesialis, fasilitas unggulan, dan sistem booking online yang mudah.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#booking" className="px-5 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition">
                Booking Dokter
              </a>
              <a href="#layanan" className="px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">
                Lihat Layanan
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/70 backdrop-blur border border-purple-100">
                <p className="text-2xl font-bold text-purple-700">24/7</p>
                <p className="text-sm text-gray-600">IGD Aktif</p>
              </div>
              <div className="p-4 rounded-xl bg-white/70 backdrop-blur border border-emerald-100">
                <p className="text-2xl font-bold text-emerald-700">+50</p>
                <p className="text-sm text-gray-600">Dokter Spesialis</p>
              </div>
              <div className="p-4 rounded-xl bg-white/70 backdrop-blur border border-purple-100">
                <p className="text-2xl font-bold text-purple-700">+30</p>
                <p className="text-sm text-gray-600">Poliklinik</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-purple-200 to-emerald-200 rounded-3xl blur-2xl opacity-50" />
            <div className="relative rounded-3xl border bg-white shadow-xl p-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-100 text-purple-700">
                  <Hospital className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">RS Sehat Sentosa</h3>
                  <p className="text-gray-600">Pelayanan prima untuk keluarga Anda</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <p className="font-semibold text-purple-700">Fasilitas Unggulan</p>
                  <p className="text-sm text-gray-600 mt-1">Cath Lab, Hemodialisa, NICU</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <p className="font-semibold text-emerald-700">Layanan Komprehensif</p>
                  <p className="text-sm text-gray-600 mt-1">Rawat Jalan, Rawat Inap, Bedah</p>
                </div>
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <p className="font-semibold text-purple-700">Booking Online</p>
                  <p className="text-sm text-gray-600 mt-1">Pilih dokter, tanggal, dan jam</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <p className="font-semibold text-emerald-700 flex items-center gap-2">
                    <Heart className="w-4 h-4" /> Konsultasi Nyaman
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Chat online dengan petugas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
