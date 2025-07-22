import { useState } from 'react';
import { Crown, Users, Calendar, DollarSign, Star, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '../assets/hero-bg.jpg';

export function RoleSelector({ onRoleSelect }) {
  const [hoveredRole, setHoveredRole] = useState(null);

  const roles = [
    {
      id: 'admin',
      title: 'Celeb Portal',
      subtitle: 'Manage celebrities, events & finances',
      icon: Crown,
      features: ['Event Management', 'Team Coordination', 'Financial Reports', 'Calendar Overview'],
      gradient: 'from-primary to-primary-glow',
      description: 'Complete control over celebrity bookings, team management, and business operations.'
    },
    {
      id: 'client',
      title: 'Organizer Portal',
      subtitle: 'Book celebrities & manage events',
      icon: Star,
      features: ['Browse Celebrities', 'Request Bookings', 'Payment Processing', 'Event Planning'],
      gradient: 'from-accent to-yellow-400',
      description: 'Discover and book top celebrities for your events with our streamlined booking system.'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Celebrities', value: '250+' },
    { icon: Calendar, label: 'Events Managed', value: '1.2K+' },
    { icon: DollarSign, label: 'Revenue Generated', value: '$5M+' },
    { icon: UserPlus, label: 'Happy Clients', value: '800+' }
  ];

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 floating">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6">
            <span className="gradient-text">Celebrity</span>
            <br />
            <span className="text-foreground">Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The ultimate platform for managing celebrity bookings, events, and client relationships
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.id}
                className={`glass-card p-8 cursor-pointer transition-all duration-500 hover:scale-105 ${
                  hoveredRole === role.id ? 'ring-2 ring-primary' : ''
                }`}
                onMouseEnter={() => setHoveredRole(role.id)}
                onMouseLeave={() => setHoveredRole(null)}
                onClick={() => onRoleSelect(role.id)}
              >
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${role.gradient}`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-2">{role.title}</h3>
                    <p className="text-muted-foreground text-lg">{role.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {role.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Button 
                    className={`w-full btn-hero bg-gradient-to-r ${role.gradient} hover:scale-105 transition-transform`}
                    size="lg"
                  >
                    {role.id === 'admin' ? 'Access Admin Dashboard' : 'Enter Client Portal'}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="stats-card text-center">
                <StatIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
