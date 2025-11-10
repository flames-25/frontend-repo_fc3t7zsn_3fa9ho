import React, { useMemo } from 'react';
import { User, CalendarClock, Stethoscope } from 'lucide-react';

const DOCTORS = [
  {
    id: 'd1',
    name: 'dr. Andi Pratama, Sp.PD',
    department: 'Penyakit Dalam',
    poly: 'Poli Penyakit Dalam',
    schedule: {
      Mon: ['08:00', '10:00', '13:00'],
      Tue: ['09:00', '11:00'],
      Wed: ['08:00', '10:30'],
      Thu: ['08:00', '10:00', '14:00'],
      Fri: ['09:00', '11:00'],
    },
  },
  {
    id: 'd2',
    name: 'dr. Sinta Lestari, Sp.OG',
    department: 'Obgyn',
    poly: 'Poli Kandungan',
    schedule: {
      Mon: ['10:00', '12:00'],
      Wed: ['13:00', '15:00'],
      Fri: ['09:00', '11:30'],
      Sat: ['08:00', '10:00'],
    },
  },
  {
    id: 'd3',
    name: 'dr. Bima Nugraha, Sp.THT-KL',
    department: 'THT',
    poly: 'Poli THT',
    schedule: {
      Tue: ['08:00', '10:00'],
      Thu: ['13:00', '15:00'],
      Sat: ['09:00', '11:00'],
    },
  },
  {
    id: 'd4',
    name: 'drg. Rani Putri',
    department: 'Gigi',
    poly: 'Poli Gigi',
    schedule: {
      Mon: ['09:00', '11:00'],
      Tue: ['13:00', '15:00'],
      Thu: ['08:30', '10:30'],
    },
  },
];

const weekdayKey = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const Doctors = () => {
  const todayKey = weekdayKey[new Date().getDay()];

  const todayDoctors = useMemo(() => {
    return DOCTORS.filter(d => d.schedule[todayKey]);
  }, [todayKey]);

  return (
    <section id="dokter" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Dokter & Jadwal Praktek</h2>
            <p className="text-gray-600 mt-1">Jadwal poliklinik yang tampil menyesuaikan hari ini.</p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            <CalendarClock className="w-4 h-4" /> Hari ini: {todayKey}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {todayDoctors.map(doc => (
            <div key={doc.id} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                  <p className="text-purple-700 text-sm font-medium">{doc.poly}</p>
                  <p className="text-gray-600 text-sm flex items-center gap-2 mt-1">
                    <Stethoscope className="w-4 h-4" /> {doc.department}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {doc.schedule[todayKey].map(time => (
                      <span key={time} className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-sm border border-purple-100">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
