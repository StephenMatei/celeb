import { useState } from 'react';
import {
  Calendar,
  Users,
  DollarSign,
  Star,
  TrendingUp,
  Clock,
  UserCheck,
  Plus,
  Filter,
  Search,
  Bell,
  Settings
} from 'lucide-react';

import { EventManagement } from './EventManagement';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export function AdminDashboard({ onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Revenue',
      value: '$847,329',
      change: '+12.5%',
      icon: DollarSign,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Active Bookings',
      value: '156',
      change: '+8.2%',
      icon: Calendar,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Team Members',
      value: '24',
      change: '+2',
      icon: Users,
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Client Satisfaction',
      value: '98.5%',
      change: '+1.3%',
      icon: Star,
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  const recentBookings = [
    {
      id: 1,
      celebrity: 'Sarah Johnson',
      client: 'MegaCorp Events',
      event: 'Product Launch Gala',
      date: '2024-02-15',
      fee: '$75,000',
      status: 'confirmed',
      avatar: 'SJ'
    },
    {
      id: 2,
      celebrity: 'Michael Chen',
      client: 'Charity Foundation',
      event: 'Fundraising Concert',
      date: '2024-02-20',
      fee: '$45,000',
      status: 'pending',
      avatar: 'MC'
    },
    {
      id: 3,
      celebrity: 'Emma Rodriguez',
      client: 'Fashion Week',
      event: 'Runway Show',
      date: '2024-02-25',
      fee: '$60,000',
      status: 'confirmed',
      avatar: 'ER'
    }
  ];

  const upcomingEvents = [
    {
      time: '10:00 AM',
      title: 'Meeting with Sarah Johnson',
      type: 'Contract Discussion',
      location: 'Conference Room A'
    },
    {
      time: '2:00 PM',
      title: 'Client Call - MegaCorp',
      type: 'Event Planning',
      location: 'Video Call'
    },
    {
      time: '4:30 PM',
      title: 'Team Standup',
      type: 'Weekly Sync',
      location: 'Main Office'
    }
  ];

  const navigation = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'bookings', label: 'Bookings', icon: UserCheck },
    { id: 'celebrities', label: 'Celebrities', icon: Star },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'finances', label: 'Finances', icon: DollarSign },
    { id: 'team', label: 'Team', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={onBack} className="text-muted-foreground">
              ← Back
            </Button>
            <h1 className="text-2xl font-serif font-bold">Celeb Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search..." className="pl-10 w-64 input-elegant" />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">CD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 border-r border-border bg-card/30 backdrop-blur-sm min-h-screen p-6">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-primary text-primary-foreground shadow-medium'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="stats-card">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.gradient}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-green-600">
                          {stat.change}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Bookings */}
                <Card className="lg:col-span-2 glass-card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-serif font-semibold">Recent Bookings</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                      <Button size="sm" className="btn-hero">
                        <Plus className="w-4 h-4 mr-2" />
                        New Booking
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {booking.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{booking.celebrity}</p>
                            <p className="text-sm text-muted-foreground">{booking.event}</p>
                            <p className="text-xs text-muted-foreground">Client: {booking.client}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">{booking.fee}</p>
                          <p className="text-sm text-muted-foreground">{booking.date}</p>
                          <Badge
                            variant={booking.status === 'confirmed' ? 'default' : 'secondary'}
                            className="mt-1"
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Today's Schedule */}
                <Card className="glass-card p-6">
                  <h3 className="text-xl font-serif font-semibold mb-6">Today's Schedule</h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                          {index < upcomingEvents.length - 1 && (
                            <div className="w-px h-8 bg-border mt-2" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-primary font-medium">{event.time}</p>
                          <p className="font-semibold">{event.title}</p>
                          <p className="text-sm text-muted-foreground">{event.type}</p>
                          <p className="text-xs text-muted-foreground">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'events' && <EventManagement />}

          {/* Placeholder for other tabs */}
          {activeTab !== 'overview' && activeTab !== 'events' && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">
                  The {navigation.find((nav) => nav.id === activeTab)?.label} section is under development.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
