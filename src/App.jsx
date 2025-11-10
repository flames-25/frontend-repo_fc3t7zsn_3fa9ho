import React from 'react';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Booking from './components/Booking';
import Chat from './components/Chat';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">
            <span className="text-purple-700">RS</span>
            <span className="text-emerald-600"> Sehat Sentosa</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#layanan" className="hover:text-purple-700">Layanan</a>
            <a href="#dokter" className="hover:text-purple-700">Dokter</a>
            <a href="#booking" className="hover:text-purple-700">Booking</a>
          </nav>
          <a href="#booking" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold shadow hover:bg-purple-700">Daftar Online</a>
        </div>
      </header>

      <main>
        {/* Hero-like intro inline to keep 4 components total */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-emerald-500 opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Layanan Kesehatan Modern, Nyaman, dan Terpercaya
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl">
              Lengkap dengan data dokter, jadwal praktek, fasilitas unggulan, chat online, dan sistem booking yang mudah.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#booking" className="px-5 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition">
                Booking Dokter
              </a>
              <a href="#layanan" className="px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">
                Lihat Layanan
              </a>
            </div>
          </div>
        </section>

        <Services />
        <Doctors />
        <Booking />
      </main>

      {/* Footer */}
      <footer className="mt-14 border-t bg-gradient-to-r from-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold"><span className="text-purple-700">RS</span><span className="text-emerald-600"> Sehat Sentosa</span></div>
            <p className="text-gray-600 mt-2 text-sm">Layanan kesehatan modern dengan sentuhan kemanusiaan. Kami siap mendampingi proses pemulihan Anda.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Kontak</h4>
            <p className="text-sm text-gray-600">Jl. Kesehatan No. 1, Jakarta</p>
            <p className="text-sm text-gray-600">Telp: (021) 123-4567</p>
            <p className="text-sm text-gray-600">Email: info@rssehatsentosa.id</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Jam Layanan</h4>
            <p className="text-sm text-gray-600">Rawat Jalan: Senin - Sabtu 08:00 - 16:00</p>
            <p className="text-sm text-gray-600">IGD: 24 Jam</p>
          </div>
        </div>
      </footer>

      <Chat />
    </div>
  );
}

export default App;
