export type JobType = 'Remoto' | 'Presencial' | 'Híbrido';
export type ContractType = 'Prácticas' | 'Profesional';
export type JobSector = 'Desarrollo' | 'Marketing' | 'RRHH' | 'Diseño' | 'Finanzas';
export type JobStatus = 'Abierta' | 'Cerrada' | 'Finalizada';
export type AppStatus = 'Pendiente' | 'En Revisión' | 'Entrevista' | 'Seleccionado' | 'Descartado';

export interface Company {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  website: string;
}

export interface Job {
  id: string;
  title: string;
  companyId: string;
  companyName: string;
  companyLogo: string;
  location: string;
  type: JobType;
  sector: JobSector;
  contract: ContractType;
  description: string;
  skills: string[];
  salary: string;
  deadline: string;
  status: JobStatus;
  postedAt: string;
  applicantCount: number;
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  studentUniversity: string;
  status: AppStatus;
  appliedAt: string;
  resumeUrl: string;
  feedback?: string;
}

export const mockCompanies: Company[] = [
  { id: 'c1', name: 'TechNova', logoUrl: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=150&auto=format&fit=crop', description: 'Innovando en IA y cloud.', website: 'technova.com' },
  { id: 'c2', name: 'MarketGurus', logoUrl: 'https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=150&auto=format&fit=crop', description: 'Agencia de marketing digital 360.', website: 'marketgurus.io' },
  { id: 'c3', name: 'FinTrust', logoUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=150&auto=format&fit=crop', description: 'Consultoría financiera para startups.', website: 'fintrust.es' },
];

export const mockJobs: Job[] = [
  {
    id: 'j1',
    title: 'Desarrollador Frontend Junior (React)',
    companyId: 'c1',
    companyName: 'TechNova',
    companyLogo: mockCompanies[0].logoUrl,
    location: 'Madrid / Remoto',
    type: 'Remoto',
    sector: 'Desarrollo',
    contract: 'Prácticas',
    description: 'Buscamos un estudiante apasionado por React y TailwindCSS para unirse a nuestro equipo de producto.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
    salary: '600€ - 800€ / mes (Ayuda al estudio)',
    deadline: '2026-04-15',
    status: 'Abierta',
    postedAt: 'Hace 2 días',
    applicantCount: 12,
  },
  {
    id: 'j2',
    title: 'Especialista SEO/SEM',
    companyId: 'c2',
    companyName: 'MarketGurus',
    companyLogo: mockCompanies[1].logoUrl,
    location: 'Barcelona',
    type: 'Híbrido',
    sector: 'Marketing',
    contract: 'Profesional',
    description: 'Únete como Junior Specialist para gestionar campañas de Google Ads y estrategias SEO on-page.',
    skills: ['Google Analytics', 'SEO On-Page', 'Google Ads', 'Excel avanzado'],
    salary: '22.000€ - 26.000€ / año',
    deadline: '2026-03-30',
    status: 'Abierta',
    postedAt: 'Hace 1 semana',
    applicantCount: 45,
  },
  {
    id: 'j3',
    title: 'Analista de Datos Intern',
    companyId: 'c3',
    companyName: 'FinTrust',
    companyLogo: mockCompanies[2].logoUrl,
    location: 'Valencia',
    type: 'Presencial',
    sector: 'Finanzas',
    contract: 'Prácticas',
    description: 'Apoyo en la creación de dashboards financieros y limpieza de bases de datos.',
    skills: ['SQL', 'PowerBI', 'Python básico'],
    salary: '500€ / mes',
    deadline: '2026-03-20',
    status: 'Cerrada',
    postedAt: 'Hace 3 semanas',
    applicantCount: 28,
  },
];

export const mockApplications: Application[] = [
  {
    id: 'a1',
    jobId: 'j1',
    jobTitle: 'Desarrollador Frontend Junior (React)',
    companyName: 'TechNova',
    studentId: 's1',
    studentName: 'Ana García',
    studentAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    studentUniversity: 'Universidad de Alicante',
    status: 'Entrevista',
    appliedAt: '12 Mar 2026',
    resumeUrl: '/cv-ana-garcia.pdf',
  },
  {
    id: 'a2',
    jobId: 'j2',
    jobTitle: 'Especialista SEO/SEM',
    companyName: 'MarketGurus',
    studentId: 's1',
    studentName: 'Ana García',
    studentAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    studentUniversity: 'Universidad de Alicante',
    status: 'Pendiente',
    appliedAt: '15 Mar 2026',
    resumeUrl: '/cv-ana-garcia.pdf',
  },
  {
    id: 'a3',
    jobId: 'j3',
    jobTitle: 'Analista de Datos Intern',
    companyName: 'FinTrust',
    studentId: 's1',
    studentName: 'Ana García',
    studentAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    studentUniversity: 'Universidad de Alicante',
    status: 'Descartado',
    appliedAt: '01 Mar 2026',
    resumeUrl: '/cv-ana-garcia.pdf',
    feedback: 'Perfil no se ajusta: Buscamos un nivel avanzado de SQL.',
  }
];

export const mockRecruiterApplicants: Application[] = [
  { id: 'ra1', jobId: 'j1', jobTitle: 'Desarrollador Frontend Junior (React)', companyName: 'TechNova', studentId: 's2', studentName: 'Carlos López', studentAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop', studentUniversity: 'Universidad de Alicante', status: 'Pendiente', appliedAt: 'Ayer', resumeUrl: '#' },
  { id: 'ra2', jobId: 'j1', jobTitle: 'Desarrollador Frontend Junior (React)', companyName: 'TechNova', studentId: 's3', studentName: 'María Ruiz', studentAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop', studentUniversity: 'Universidad Politécnica', status: 'En Revisión', appliedAt: 'Hace 2 días', resumeUrl: '#' },
  { id: 'ra3', jobId: 'j1', jobTitle: 'Desarrollador Frontend Junior (React)', companyName: 'TechNova', studentId: 's4', studentName: 'Javier Martínez', studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', studentUniversity: 'Universidad de Alicante', status: 'Entrevista', appliedAt: 'Hace 5 días', resumeUrl: '#' },
  { id: 'ra4', jobId: 'j1', jobTitle: 'Desarrollador Frontend Junior (React)', companyName: 'TechNova', studentId: 's1', studentName: 'Ana García', studentAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', studentUniversity: 'Universidad de Alicante', status: 'Entrevista', appliedAt: 'Hace 1 semana', resumeUrl: '#' },
  { id: 'ra5', jobId: 'j1', jobTitle: 'Desarrollador Frontend Junior (React)', companyName: 'TechNova', studentId: 's5', studentName: 'Laura Gómez', studentAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop', studentUniversity: 'Universidad de Valencia', status: 'Seleccionado', appliedAt: 'Hace 2 semanas', resumeUrl: '#' },
];
