import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Filter, MapPin } from 'lucide-react';
import { mockJobs, JobType, JobSector, ContractType } from '../data/mock';
import { JobCard } from '../components/JobCard';

export function JobListings() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <div className="w-full lg:w-72 space-y-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2">
            <Filter className="w-5 h-5" /> Filtros Avanzados
          </h3>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Búsqueda por palabra clave</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Ej. React, Marketing..." 
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <hr className="border-gray-100" />

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Contrato</label>
              <div className="space-y-2">
                {['Prácticas', 'Profesional'].map(type => (
                  <label key={type} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" defaultChecked={type === 'Prácticas'} />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Modalidad</label>
              <div className="space-y-2">
                {['Remoto', 'Presencial', 'Híbrido'].map(type => (
                  <label key={type} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Sector</label>
              <select className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Todos los sectores</option>
                <option value="Desarrollo">Desarrollo e IT</option>
                <option value="Marketing">Marketing y Ventas</option>
                <option value="Finanzas">Finanzas y Legal</option>
                <option value="RRHH">Recursos Humanos</option>
              </select>
            </div>
            
            <button className="w-full py-2 bg-indigo-50 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition-colors">
              Limpiar Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Main Listing */}
      <div className="flex-1">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Ofertas de Empleo y Prácticas</h1>
            <p className="text-gray-500 mt-2">Encuentra la oportunidad perfecta para lanzar tu carrera profesional.</p>
          </div>
          <div className="text-sm text-gray-500 font-medium bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
            {mockJobs.length} resultados encontrados
          </div>
        </div>

        <div className="space-y-4">
          {mockJobs.map(job => (
            <JobCard key={job.id} job={job} onClick={() => navigate(`/jobs/${job.id}`)} />
          ))}
        </div>
      </div>
    </div>
  );
}
