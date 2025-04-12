
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  postedAt: string;
  logo?: string;
  featured?: boolean;
}

const JobCard = ({ id, title, company, location, type, salary, postedAt, logo, featured }: JobCardProps) => {
  return (
    <Link to={`/jobs/${id}`} className="block">
      <div className={`bg-white rounded-lg border ${featured ? 'border-brand-purple shadow-md' : 'border-gray-200'} hover:shadow-md transition-shadow p-5`}>
        <div className="flex items-start gap-4">
          {logo ? (
            <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden">
              <img src={logo} alt={`${company} logo`} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-12 h-12 flex-shrink-0 rounded-md bg-brand-purple/10 text-brand-purple flex items-center justify-center">
              <Building size={24} />
            </div>
          )}
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
              {featured && (
                <Badge variant="secondary" className="bg-accent text-accent-foreground">Featured</Badge>
              )}
            </div>
            
            <p className="text-gray-700 font-medium mt-1">{company}</p>
            
            <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{type}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              {salary && <span className="text-brand-purple font-medium">{salary}</span>}
              <span className="text-sm text-gray-500">{postedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
