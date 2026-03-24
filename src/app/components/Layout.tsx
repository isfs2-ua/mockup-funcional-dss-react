import React from 'react';
import { NavLink, Outlet } from 'react-router';
import { Briefcase, LayoutDashboard, Send, MessageSquare, Bookmark, Users, LogOut, Search } from 'lucide-react';
import { useRole } from '../contexts/RoleContext';

export function Layout() {
  const { role, setRole } = useRole();

  const studentLinks = [
    { to: '/', icon: LayoutDashboard, label: 'Inicio' },
    { to: '/jobs', icon: Search, label: 'Buscar Ofertas' },
    { to: '/applications', icon: Send, label: 'Mis Solicitudes' },
    { to: '/saved', icon: Bookmark, label: 'Guardadas' },
    { to: '/messages', icon: MessageSquare, label: 'Mensajes' },
  ];

  const recruiterLinks = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/manage', icon: Users, label: 'Mis Ofertas' },
    { to: '/jobs/new', icon: Briefcase, label: 'Publicar Oferta' },
    { to: '/messages', icon: MessageSquare, label: 'Mensajes' },
  ];

  const links = role === 'student' ? studentLinks : recruiterLinks;

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-black text-indigo-600 tracking-tight">
            Uni<span className="text-gray-900">Talent</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">Conectando estudiantes y empresas</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-4 p-2">
            <img
              src={role === 'student' ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop'}
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-200 object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {role === 'student' ? 'Ana García' : 'Laura Gómez'}
              </p>
              <p className="text-xs text-gray-500">
                {role === 'student' ? 'Estudiante' : 'TechNova RRHH'}
              </p>
            </div>
          </div>
          <button className="flex w-full items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5" />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Topbar (Mobile + Role Switcher) */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="md:hidden font-black text-xl text-indigo-600">UniTalent</div>
          <div className="hidden md:flex flex-col">
            <h2 className="text-xl font-bold text-gray-800">
              {role === 'student' ? 'Panel de Estudiante' : 'Panel de Empresa'}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setRole('student')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${role === 'student' ? 'bg-white shadow text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Vista Estudiante
              </button>
              <button
                onClick={() => setRole('recruiter')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${role === 'recruiter' ? 'bg-white shadow text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Vista Empresa
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6 md:p-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
