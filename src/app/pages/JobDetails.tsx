import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { mockJobs } from '../data/mock';
import { MapPin, Briefcase, DollarSign, Clock, Calendar, ArrowLeft, Bookmark, Share2 } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export function JobDetails() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = mockJobs.find(j => j.id === jobId) || mockJobs[0];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium transition-colors mb-4 w-fit px-2 py-1 rounded-md hover:bg-gray-100">
        <ArrowLeft className="w-5 h-5" /> Volver atrás
      </button>
      
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between">
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <img src={job.companyLogo} alt={job.companyName} className="w-20 h-20 rounded-xl object-cover border border-gray-100 shrink-0" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">{job.title}</h1>
              <p className="text-lg text-indigo-600 font-semibold mb-4">{job.companyName}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant={job.contract === 'Prácticas' ? 'warning' : 'default'}>{job.contract}</Badge>
                <Badge variant="outline">{job.sector}</Badge>
                <Badge variant="outline">{job.type}</Badge>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0 shrink-0">
            <button className="flex-1 md:flex-none px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Bookmark className="w-5 h-5" />
              <span className="md:hidden">Guardar</span>
            </button>
            <button className="flex-1 md:flex-none px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200 whitespace-nowrap">
              Aplicar ahora
            </button>
          </div>
        </div>

        <hr className="my-8 border-gray-100" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Descripción de la oferta</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{job.description}</p>
              <p className="text-gray-600 leading-relaxed mt-4">Buscamos incorporar talento joven y proactivo a nuestro equipo. Durante esta experiencia, tendrás la oportunidad de trabajar mano a mano con profesionales del sector, participar en proyectos reales y desarrollar tus habilidades en un entorno dinámico e innovador.</p>
              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Responsabilidades:</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Apoyo en las tareas diarias del equipo.</li>
                <li>Participación activa en reuniones de seguimiento.</li>
                <li>Desarrollo de proyectos con impacto real en la empresa.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Requisitos y Habilidades</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map(skill => (
                  <Badge key={skill} variant="outline" className="px-3 py-1.5 text-sm bg-gray-50">{skill}</Badge>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-100 h-fit">
            <h3 className="font-bold text-gray-900">Resumen del puesto</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Ubicación</p>
                  <p className="text-sm text-gray-600">{job.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Salario / Ayuda</p>
                  <p className="text-sm text-gray-600">{job.salary}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Modalidad</p>
                  <p className="text-sm text-gray-600">{job.type}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Fecha límite</p>
                  <p className="text-sm text-gray-600">{job.deadline}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Publicado</p>
                  <p className="text-sm text-gray-600">{job.postedAt}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full flex justify-center items-center gap-2 text-indigo-600 font-medium hover:bg-indigo-50 py-2 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" /> Compartir oferta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
