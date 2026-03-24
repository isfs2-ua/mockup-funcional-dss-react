import React, { useState } from 'react';
import { mockRecruiterApplicants, Application, AppStatus } from '../data/mock';
import { Mail, Calendar, Download, MoreVertical, MessageSquare } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

const COLUMNS: AppStatus[] = ['Pendiente', 'En Revisión', 'Entrevista', 'Seleccionado', 'Descartado'];

export function RecruiterKanban() {
  const [applicants, setApplicants] = useState<Application[]>(mockRecruiterApplicants);

  // Simple move handler for the mockup
  const moveApplicant = (id: string, newStatus: AppStatus) => {
    setApplicants(prev => prev.map(app => app.id === id ? { ...app, status: newStatus } : app));
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-8 flex items-center justify-between bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="warning">Prácticas</Badge>
            <span className="text-sm text-gray-500 font-medium">Ref: j1</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Desarrollador Frontend Junior (React)</h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            <span className="font-semibold text-indigo-600">{applicants.length} Candidatos totales</span> • Cierre: 15 Abr 2026
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            Editar Oferta
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
            Exportar CSV
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max h-full">
          {COLUMNS.map(column => {
            const columnApps = applicants.filter(app => app.status === column);
            return (
              <div key={column} className="w-80 flex flex-col bg-gray-100/50 rounded-xl border border-gray-200/60 p-4 shrink-0">
                <div className="flex justify-between items-center mb-4 px-1">
                  <h3 className="font-bold text-gray-700 flex items-center gap-2">
                    {column} 
                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full font-semibold">
                      {columnApps.length}
                    </span>
                  </h3>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
                  {columnApps.map(app => (
                    <div key={app.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-grab">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <img src={app.studentAvatar} alt={app.studentName} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm">{app.studentName}</h4>
                            <p className="text-xs text-gray-500 truncate w-32" title={app.studentUniversity}>{app.studentUniversity}</p>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-gray-400 mb-4 font-medium">
                        Aplicó {app.appliedAt.toLowerCase()}
                      </div>

                      <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                        <div className="flex gap-1">
                          <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors" title="Descargar CV">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors" title="Enviar Mensaje">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                          {column === 'En Revisión' && (
                            <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors" title="Agendar Entrevista">
                              <Calendar className="w-4 h-4" />
                            </button>
                          )}
                        </div>

                        {/* Mover dropdown simulado para el mockup */}
                        <select 
                          value={app.status}
                          onChange={(e) => moveApplicant(app.id, e.target.value as AppStatus)}
                          className="text-xs border border-gray-200 rounded p-1 text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-gray-50 hover:bg-white"
                        >
                          {COLUMNS.map(col => (
                            <option key={col} value={col}>{col}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                  {columnApps.length === 0 && (
                    <div className="text-center py-8 text-sm text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
                      Sin candidatos
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
