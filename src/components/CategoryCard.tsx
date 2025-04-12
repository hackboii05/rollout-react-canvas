
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  count: number;
  slug: string;
  className?: string;
}

const CategoryCard = ({ title, icon, count, slug, className }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${slug}`} className="block">
      <div className={cn(
        "bg-white border border-gray-100 rounded-lg p-5 transition-all hover:shadow-md hover:border-brand-purple/20",
        className
      )}>
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{count} jobs</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
