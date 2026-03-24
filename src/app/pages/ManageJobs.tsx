import React from 'react';
import { useNavigate } from 'react-router';
import { mockJobs } from '../data/mock';
import { Users, Plus, Search, MoreVertical } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export function ManageJobs() {
  const navigate = useNavigate();
  // Simulando que TechNova (c1) es la empresa autenticada
  const companyJobs = mockJobs.filter(j => j.companyId === 'c1');

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mis Ofertas</h1>
          <p className="text-gray-500 mt-1">Gestiona las ofertas publicadas y revisa los candidatos.</p>
        </div>
        <button onClick={() => navigate('/jobs/new')} className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
          <Plus className="w-5 h-5" /> Nueva Oferta
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input type="text" placeholder="Buscar por título..." className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-semibold text-gray-700 text-sm w-2/5">Oferta</th>
                <th className="p-4 font-semibold text-gray-700 text-sm">Estado</th>
                <th className="p-4 font-semibold text-gray-700 text-sm">Candidatos</th>
                <th className="p-4 font-semibold text-gray-700 text-sm">Fecha Cierre</th>
                <th className="p-4 font-semibold text-gray-700 text-sm text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {companyJobs.map(job => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-gray-900">{job.title}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{job.contract} • {job.location}</div>
                  </td>
                  <td className="p-4">
                    <Badge variant={job.status === 'Abierta' ? 'success' : job.status === 'Cerrada' ? 'warning' : 'default'}>
                      {job.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="font-semibold text-gray-700">{job.applicantCount}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{job.deadline}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => navigate(`/manage/${job.id}`)} className="px-3 py-1.5 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                        Ver Kanban
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {companyJobs.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">
                    No has publicado ninguna oferta todavía.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
