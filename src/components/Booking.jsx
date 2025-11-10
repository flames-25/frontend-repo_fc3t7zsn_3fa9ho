import React, { useMemo, useState } from 'react';
import { Calendar, Clock, UserPlus } from 'lucide-react';

const weekdayKey = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const doctors = [
  { id: 'd1', name: 'dr. Andi Pratama, Sp.PD', poly: 'Penyakit Dalam', schedule: { Mon: ['08:00','10:00','13:00'], Tue: ['09:00','11:00'], Wed: ['08:00','10:30'], Thu: ['08:00','10:00','14:00'], Fri: ['09:00','11:00'] } },
  { id: 'd2', name: 'dr. Sinta Lestari, Sp.OG', poly: 'Kandungan', schedule: { Mon: ['10:00','12:00'], Wed: ['13:00','15:00'], Fri: ['09:00','11:30'], Sat: ['08:00','10:00'] } },
  { id: 'd3', name: 'dr. Bima Nugraha, Sp.THT-KL', poly: 'THT', schedule: { Tue: ['08:00','10:00'], Thu: ['13:00','15:00'], Sat: ['09:00','11:00'] } },
];

function getSlotsForDate(dateStr, doc) {
  const d = new Date(dateStr);
  const key = weekdayKey[d.getDay()];
  return doc.schedule[key] || [];
}

const Booking = () => {
  const today = new Date();
  const [doctorId, setDoctorId] = useState(doctors[0].id);
  const [date, setDate] = useState(today.toISOString().slice(0,10));
  const selectedDoctor = useMemo(() => doctors.find(d => d.id === doctorId), [doctorId]);
  const slots = useMemo(() => getSlotsForDate(date, selectedDoctor), [date, selectedDoctor]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!selectedSlot) return;
    setSuccess(`Booking berhasil untuk ${name || 'Pasien'} bersama ${selectedDoctor.name} pada ${date} jam ${selectedSlot}.`);
    setName('');
    setNote('');
  };

  return (
    <section id="booking" className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Booking Online Dokter</h2>
            <p className="text-gray-600">Pilih dokter, tanggal, dan jam yang tersedia.</p>
          </div>
        </div>

        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-700">Pilih Dokter</label>
            <select value={doctorId} onChange={(e)=>setDoctorId(e.target.value)} className="mt-2 w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500">
              {doctors.map(d => (
                <option key={d.id} value={d.id}>{d.name} — {d.poly}</option>
              ))}
            </select>

            <label className="block text-sm font-medium text-gray-700 mt-4">Tanggal</label>
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="mt-2 w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500" />

            <label className="block text-sm font-medium text-gray-700 mt-4">Jam Tersedia</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {slots.length === 0 && (
                <span className="text-sm text-gray-500">Tidak ada jadwal pada tanggal ini.</span>
              )}
              {slots.map(t => (
                <button type="button" key={t} onClick={()=>setSelectedSlot(t)} className={`px-3 py-1.5 rounded-md border text-sm ${selectedSlot===t? 'bg-purple-600 text-white border-purple-600' : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'}`}>
                  <Clock className="w-4 h-4 inline-block mr-1" />
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-700">Nama Pasien</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Nama lengkap" className="mt-2 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />

            <label className="block text-sm font-medium text-gray-700 mt-4">Catatan</label>
            <textarea value={note} onChange={(e)=>setNote(e.target.value)} rows={4} placeholder="Keluhan singkat" className="mt-2 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />

            <button disabled={!selectedSlot} className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 disabled:opacity-60">
              <UserPlus className="w-4 h-4" /> Konfirmasi Booking
            </button>
            {success && (
              <p className="mt-3 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg text-sm">{success}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
