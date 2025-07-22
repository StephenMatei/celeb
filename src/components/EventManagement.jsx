import { useState } from 'react';
import { 
  Calendar, MapPin, Clock, Users, DollarSign, Plus, Edit3, Trash2, Eye,
  Filter, Search, Download, BarChart3, Ticket, Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function EventManagement() {
  const [activeView, setActiveView] = useState('events');
  const [searchQuery, setSearchQuery] = useState('');

  const events = [/*...same data*/];
  const stats = [/*...same data*/];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'draft': return 'bg-yellow-500';
      case 'sold-out': return 'bg-red-500';
      case 'cancelled': return 'bg-gray-500';
      default: return 'bg-blue-500';
    }
  };

  const getCapacityPercentage = (sold, capacity) => {
    return Math.round((sold / capacity) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif font-bold">Event Management</h2>
          <p className="text-muted-foreground mt-1">Manage events and ticket sales</p>
        </div>
        <Button className="btn-hero">
          <Plus className="w-4 h-4 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Stats */}
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

      {/* Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search events..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64 input-elegant"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      {/* Event Cards */}
      <div className="grid lg:grid-cols-2 gap-6">
        {events
          .filter(event =>
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.celebrity.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((event) => (
            <Card key={event.id} className="glass-card p-6">
              <div className="space-y-4">
                {/* Title & Actions */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(event.status)}`} />
                    </div>
                    <p className="text-sm text-muted-foreground">Featuring {event.celebrity}</p>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon"><Eye className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon"><Edit3 className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon"><Settings className="w-4 h-4" /></Button>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2"><Calendar className="w-4 h-4 text-muted-foreground" /><span>{event.date}</span></div>
                  <div className="flex items-center space-x-2"><Clock className="w-4 h-4 text-muted-foreground" /><span>{event.time}</span></div>
                  <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-muted-foreground" /><span>{event.venue}</span></div>
                  <div className="flex items-center space-x-2"><Users className="w-4 h-4 text-muted-foreground" /><span>{event.capacity} capacity</span></div>
                </div>

                {/* Sales */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tickets Sold</span>
                    <span className="text-sm font-bold text-green-600">
                      {event.soldTickets}/{event.capacity} ({getCapacityPercentage(event.soldTickets, event.capacity)}%)
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                      style={{ width: `${getCapacityPercentage(event.soldTickets, event.capacity)}%` }}
                    />
                  </div>
                </div>

                {/* Tickets */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Ticket Categories</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {event.ticketTypes.map((ticket, i) => (
                      <div key={i} className="bg-secondary/50 rounded-lg p-3 text-center">
                        <p className="text-xs font-medium">{ticket.name}</p>
                        <p className="text-lg font-bold text-green-600">${ticket.price}</p>
                        <p className="text-xs text-muted-foreground">{ticket.sold}/{ticket.total} sold</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold text-green-600">{event.revenue}</p>
                  </div>
                  <Badge variant={event.status === 'active' ? 'default' : 'secondary'}>
                    {event.status}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
