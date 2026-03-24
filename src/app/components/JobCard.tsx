import React from 'react';
import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import { Job } from '../data/mock';
import { Badge } from './ui/Badge';

interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer flex flex-col sm:flex-row gap-6"
    >
      <div className="shrink-0 flex items-start sm:items-center">
        <img 
          src={job.companyLogo} 
          alt={job.companyName} 
          className="w-16 h-16 rounded-lg object-cover border border-gray-100"
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
            <p className="text-gray-600 font-medium">{job.companyName}</p>
          </div>
          <Badge variant={job.contract === 'Prácticas' ? 'warning' : 'default'} className="w-fit">
            {job.contract}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {job.location} ({job.type})
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {job.sector}
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            {job.salary}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Publicado {job.postedAt}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {job.skills.map(skill => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
