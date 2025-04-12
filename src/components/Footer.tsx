
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-brand-purple mb-4">Toolify</h3>
            <p className="text-gray-600 mb-4">
              Connecting top talent with innovative companies. Find your dream job or the perfect candidate today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-600 hover:text-brand-purple">Browse Jobs</Link></li>
              <li><Link to="/career-advice" className="text-gray-600 hover:text-brand-purple">Career Advice</Link></li>
              <li><Link to="/resume-builder" className="text-gray-600 hover:text-brand-purple">Resume Builder</Link></li>
              <li><Link to="/salary-guide" className="text-gray-600 hover:text-brand-purple">Salary Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><Link to="/post-job" className="text-gray-600 hover:text-brand-purple">Post a Job</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-brand-purple">Pricing</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-brand-purple">Resources</Link></li>
              <li><Link to="/talent-pool" className="text-gray-600 hover:text-brand-purple">Talent Pool</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-brand-purple">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-purple">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-brand-purple">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-brand-purple">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Toolify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
