import React from 'react';
import { Badge } from '../components/ui/Badge';
import { mockApplications, AppStatus } from '../data/mock';
import { Building2, Calendar, FileText, CheckCircle2, Clock, AlertCircle, XCircle } from 'lucide-react';

const statusConfig: Record<AppStatus, { icon: React.ReactNode, color: 'default' | 'success' | 'warning' | 'error' | 'outline' }> = {
  'Pendiente': { icon: <Clock className="w-4 h-4" />, color: 'default' },
  'En Revisión': { icon: <AlertCircle className="w-4 h-4" />, color: 'warning' },
  'Entrevista': { icon: <Calendar className="w-4 h-4" />, color: 'outline' },
  'Seleccionado': { icon: <CheckCircle2 className="w-4 h-4" />, color: 'success' },
  'Descartado': { icon: <XCircle className="w-4 h-4" />, color: 'error' },
};

export function StudentApplications() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Mis Solicitudes</h1>
          <p className="text-gray-500 mt-2 text-lg">Haz seguimiento en tiempo real del estado de tus candidaturas.</p>
        </div>
        <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-semibold text-sm">
          {mockApplications.length} Solicitudes Activas
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-semibold text-gray-700 text-sm w-1/3">Oferta</th>
                <th className="p-4 font-semibold text-gray-700 text-sm">Empresa</th>
                <th className="p-4 font-semibold text-gray-700 text-sm">Fecha</th>
                <th className="p-4 font-semibold text-gray-700 text-sm">Estado</th>
                <th className="p-4 font-semibold text-gray-700 text-sm text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockApplications.map(app => {
                const config = statusConfig[app.status];
                return (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="p-4 align-top">
                      <p className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{app.jobTitle}</p>
                      {app.feedback && (
                        <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded border border-red-100 flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span><strong>Feedback:</strong> {app.feedback}</span>
                        </div>
                      )}
                    </td>
                    <td className="p-4 align-top text-gray-600 font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-400" /> {app.companyName}
                    </td>
                    <td className="p-4 align-top text-sm text-gray-500">{app.appliedAt}</td>
                    <td className="p-4 align-top">
                      <Badge variant={config.color} className="flex items-center gap-1 w-fit px-3 py-1">
                        {config.icon}
                        {app.status}
                      </Badge>
                    </td>
                    <td className="p-4 align-top text-right">
                      <button className="text-gray-400 hover:text-indigo-600 transition-colors p-2 rounded-full hover:bg-indigo-50" title="Ver CV enviado">
                        <FileText className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
