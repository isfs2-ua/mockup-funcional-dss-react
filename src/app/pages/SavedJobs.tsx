import React from 'react';
import { useNavigate } from 'react-router';
import { mockJobs } from '../data/mock';
import { JobCard } from '../components/JobCard';
import { Bookmark } from 'lucide-react';

export function SavedJobs() {
  const navigate = useNavigate();
  // Simulando trabajos guardados (solo tomamos algunos del mock)
  const savedJobs = mockJobs.slice(1, 3);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="p-4 bg-indigo-50 rounded-xl text-indigo-600 shrink-0">
          <Bookmark className="w-8 h-8 fill-current opacity-20" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ofertas Guardadas</h1>
          <p className="text-gray-500 mt-1">Revisa las ofertas que has guardado para aplicar más tarde.</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {savedJobs.map(job => (
          <JobCard key={job.id} job={job} onClick={() => navigate(`/jobs/${job.id}`)} />
        ))}
        {savedJobs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
            <Bookmark className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">Aún no has guardado nada</h3>
            <p className="text-gray-500 mt-2">Explora las ofertas disponibles y guarda las que más te interesen.</p>
            <button onClick={() => navigate('/jobs')} className="mt-6 px-6 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-lg hover:bg-indigo-100 transition-colors">
              Explorar Ofertas
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
