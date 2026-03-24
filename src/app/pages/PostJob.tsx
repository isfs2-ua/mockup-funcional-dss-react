import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Send } from 'lucide-react';

export function PostJob() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular que se guarda y redirigir al panel de la empresa
    navigate('/manage');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium transition-colors mb-2 w-fit px-2 py-1 rounded-md hover:bg-gray-100">
        <ArrowLeft className="w-5 h-5" /> Volver
      </button>
      
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Publicar Nueva Oferta</h1>
        <p className="text-gray-500 mt-1">Completa los detalles para atraer al mejor talento de la universidad.</p>
      </div>

      <form className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-5">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">Información Básica</h2>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Título del puesto</label>
            <input type="text" placeholder="Ej. Analista de Marketing Junior" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Sector</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white" required>
                <option value="">Selecciona un sector</option>
                <option value="Desarrollo">Desarrollo e IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Finanzas">Finanzas</option>
                <option value="Diseño">Diseño</option>
                <option value="RRHH">Recursos Humanos</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tipo de Contrato</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white" required>
                <option value="Prácticas">Prácticas (Convenio Universidad)</option>
                <option value="Profesional">Contrato Profesional (Junior)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Modalidad</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white" required>
                <option value="Presencial">Presencial</option>
                <option value="Remoto">Remoto</option>
                <option value="Híbrido">Híbrido</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ubicación (Ciudad)</label>
              <input type="text" placeholder="Ej. Madrid" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow" required />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">Detalles del Puesto</h2>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Descripción de la oferta</label>
            <textarea rows={6} placeholder="Describe las responsabilidades, el equipo, lo que se espera del candidato..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none transition-shadow" required></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Habilidades requeridas (separadas por coma)</label>
            <input type="text" placeholder="Ej. React, Tailwind CSS, Trabajo en equipo" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Salario / Ayuda al estudio</label>
              <input type="text" placeholder="Ej. 600€/mes o 18.000€/año" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Fecha límite de postulación</label>
              <input type="date" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow text-gray-700" required />
            </div>
          </div>
        </div>

        <div className="pt-6 flex justify-end gap-3 border-t border-gray-100">
          <button type="button" onClick={() => navigate(-1)} className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
            Cancelar
          </button>
          <button type="submit" className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
            <Send className="w-4 h-4" /> Publicar Oferta
          </button>
        </div>
      </form>
    </div>
  );
}
