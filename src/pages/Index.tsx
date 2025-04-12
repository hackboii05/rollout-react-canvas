
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Monitor, Brush, Database, Server, Globe, Clock, Briefcase, PieChart, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobCard, { JobCardProps } from '@/components/JobCard';
import CategoryCard from '@/components/CategoryCard';
import SearchBar from '@/components/SearchBar';
import TestimonialCard from '@/components/TestimonialCard';

const HomePage = () => {
  // Sample data for job categories
  const categories = [
    { title: 'Software Development', icon: <Code size={24} />, count: 1254, slug: 'software-development' },
    { title: 'UI/UX Design', icon: <Brush size={24} />, count: 862, slug: 'ui-ux-design' },
    { title: 'Data Science', icon: <Database size={24} />, count: 753, slug: 'data-science' },
    { title: 'DevOps', icon: <Server size={24} />, count: 428, slug: 'devops' },
    { title: 'Web Development', icon: <Globe size={24} />, count: 1568, slug: 'web-development' },
    { title: 'Product Management', icon: <PieChart size={24} />, count: 347, slug: 'product-management' },
    { title: 'Customer Support', icon: <HeartHandshake size={24} />, count: 293, slug: 'customer-support' },
    { title: 'QA Testing', icon: <Monitor size={24} />, count: 186, slug: 'qa-testing' },
  ];

  // Sample data for featured jobs
  const featuredJobs: JobCardProps[] = [
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120K - $150K',
      postedAt: '2 days ago',
      featured: true,
      logo: 'https://picsum.photos/48/48?random=1',
    },
    {
      id: '2',
      title: 'UX Designer',
      company: 'Design Masters',
      location: 'Remote',
      type: 'Full-time',
      salary: '$95K - $115K',
      postedAt: '3 days ago',
      featured: true,
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      company: 'CloudNative Systems',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130K - $160K',
      postedAt: '1 day ago',
      featured: true,
      logo: 'https://picsum.photos/48/48?random=3',
    },
    {
      id: '4',
      title: 'Product Manager',
      company: 'ProductHQ',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110K - $140K',
      postedAt: '4 days ago',
      featured: true,
      logo: 'https://picsum.photos/48/48?random=4',
    },
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      quote: "Found my dream job within a week of using Toolify. The platform made it so easy to connect with the right companies.",
      author: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechStart",
      rating: 5,
    },
    {
      quote: "As a hiring manager, Toolify has been invaluable. The quality of candidates is consistently high and the tools save us so much time.",
      author: "Michael Chen",
      role: "CTO",
      company: "GrowthLabs",
      rating: 5,
    },
    {
      quote: "The personalized job recommendations are spot on. I've referred all my colleagues in the tech space to Toolify.",
      author: "Priya Sharma",
      role: "Data Scientist",
      company: "DataMinds",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple/10 to-brand-purple/5 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect Tech Job Today
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with top tech companies and discover opportunities that match your skills and career goals.
            </p>
            
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <SearchBar />
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              Popular searches: React, Software Engineer, Remote, Data Science, Product Manager
            </div>
          </div>
        </div>
      </section>
      
      {/* Job Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Explore Job Categories</h2>
            <p className="text-gray-600 mt-3">Browse opportunities by specialized tech categories</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                icon={category.icon}
                count={category.count}
                slug={category.slug}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/categories">
              <Button variant="outline">View All Categories</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
              <p className="text-gray-600 mt-2">Handpicked opportunities from top companies</p>
            </div>
            <Link to="/jobs" className="mt-4 md:mt-0">
              <Button variant="ghost" className="text-brand-purple hover:text-brand-purple-dark">
                View All Jobs <Clock className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Toolify</h2>
            <p className="text-gray-600 mt-3">We're committed to helping you find the perfect match</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-14 h-14 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-5">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated Job Listings</h3>
              <p className="text-gray-600">Only the highest quality opportunities from verified employers and startups.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-14 h-14 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-5">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Perfect Match Technology</h3>
              <p className="text-gray-600">Our advanced algorithm matches your skills with the right opportunities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-14 h-14 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-5">
                <PieChart size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Growth Tools</h3>
              <p className="text-gray-600">Resources to help you develop skills and advance your tech career.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What People Say</h2>
            <p className="text-gray-600 mt-3">Success stories from job seekers and employers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-purple text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Opportunity?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've found their dream jobs through Toolify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/jobs">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
