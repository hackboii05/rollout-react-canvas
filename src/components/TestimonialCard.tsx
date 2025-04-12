
import React from 'react';
import { Star } from 'lucide-react';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard = ({ quote, author, role, company, avatar, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      {rating > 0 && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      )}

      <blockquote className="text-gray-700 mb-4">
        "{quote}"
      </blockquote>

      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author} 
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full mr-3 bg-brand-purple/20 text-brand-purple flex items-center justify-center">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
