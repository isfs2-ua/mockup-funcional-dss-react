import React from 'react';
import { useNavigate } from 'react-router';
import { useRole } from '../contexts/RoleContext';
import { mockJobs, mockApplications, mockRecruiterApplicants } from '../data/mock';
import { JobCard } from '../components/JobCard';
import { Briefcase, Users, TrendingUp, Bell } from 'lucide-react';

export function Dashboard() {
  const { role } = useRole();
  const navigate = useNavigate();

  if (role === 'student') {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">¡Hola, Ana! 👋</h1>
          <p className="text-lg text-gray-500 mt-2">Tienes <span className="font-bold text-indigo-600">3 solicitudes</span> activas. Sigue explorando oportunidades.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900">Nuevas Ofertas</h3>
            </div>
            <p className="text-3xl font-black text-gray-900 mb-1">12</p>
            <p className="text-sm text-green-600 font-medium">+3 hoy</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900">Notificaciones</h3>
            </div>
            <p className="text-3xl font-black text-gray-900 mb-1">2</p>
            <p className="text-sm text-gray-500 font-medium">Actualizaciones de estado</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900">Tasa de Respuesta</h3>
            </div>
            <p className="text-3xl font-black text-gray-900 mb-1">85%</p>
            <p className="text-sm text-gray-500 font-medium">En tus postulaciones</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recomendado para ti</h2>
          <div className="space-y-4">
            {mockJobs.slice(0, 2).map(job => (
              <JobCard key={job.id} job={job} onClick={() => navigate(`/jobs/${job.id}`)} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Panel de Empresa</h1>
        <p className="text-lg text-gray-500 mt-2">Bienvenido, TechNova. Tienes nuevas actualizaciones en tus ofertas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900">Ofertas Activas</h3>
          </div>
          <p className="text-3xl font-black text-gray-900 mb-1">3</p>
          <p className="text-sm text-gray-500 font-medium">Buscando talento</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900">Total Candidatos</h3>
          </div>
          <p className="text-3xl font-black text-gray-900 mb-1">{mockRecruiterApplicants.length + 15}</p>
          <p className="text-sm text-green-600 font-medium">+5 esta semana</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Ofertas Recientes</h2>
          <button className="text-indigo-600 font-semibold hover:text-indigo-700">Ver todas</button>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors flex justify-between items-center cursor-pointer">
            <div>
              <h3 className="font-bold text-gray-900">Desarrollador Frontend Junior (React)</h3>
              <p className="text-sm text-gray-500 mt-1">Prácticas • Cierre en 1 mes</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                {mockRecruiterApplicants.length} candidatos
              </span>
              <button onClick={() => navigate('/manage/j1')} className="text-indigo-600 font-semibold hover:underline">Gestionar</button>
            </div>
          </div>
          <div className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center cursor-pointer">
            <div>
              <h3 className="font-bold text-gray-900">Diseñador UI/UX Intern</h3>
              <p className="text-sm text-gray-500 mt-1">Prácticas • Cierre en 2 semanas</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                0 candidatos
              </span>
              <button onClick={() => navigate('/manage/j2')} className="text-indigo-600 font-semibold hover:underline">Gestionar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
