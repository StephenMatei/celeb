import { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Ticket,
  CreditCard,
  Heart,
  Share2,
  ChevronRight,
  CheckCircle,
  Music,
  Camera,
  Award,
  Filter,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function EventTicketing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Celebrity Gala Night',
      celebrity: 'Sarah Johnson',
      category: 'Gala',
      date: '2024-03-15',
      time: '7:00 PM',
      venue: 'Grand Ballroom, NYC',
      image: 'SJ',
      rating: 4.9,
      reviews: 247,
      description: 'An exclusive evening with Sarah Johnson featuring dinner, entertainment, and meet & greet opportunities.',
      capacity: 500,
      available: 113,
      ticketTypes: [
        { 
          id: 'vip',
          name: 'VIP Experience', 
          price: 750, 
          available: 5,
          total: 50,
          features: ['Front row seating', 'Meet & greet', 'Premium dinner', 'Gift bag', 'Photo opportunity']
        },
        { 
          id: 'premium',
          name: 'Premium', 
          price: 450, 
          available: 8,
          total: 150,
          features: ['Reserved seating', 'Cocktail reception', 'Premium dinner', 'Program']
        },
        { 
          id: 'general',
          name: 'General Admission', 
          price: 250, 
          available: 100,
          total: 300,
          features: ['General seating', 'Welcome drink', 'Standard dinner']
        }
      ],
      tags: ['Red Carpet', 'Networking', 'Charity'],
      organizer: 'Elite Events Co.'
    },
    {
      id: 2,
      title: 'Acoustic Concert Experience',
      celebrity: 'Michael Chen',
      category: 'Concert',
      date: '2024-04-20',
      time: '8:00 PM',
      venue: 'Madison Square Garden',
      image: 'MC',
      rating: 4.8,
      reviews: 189,
      description: 'An intimate acoustic performance featuring Michael Chen\'s greatest hits and new unreleased songs.',
      capacity: 1200,
      available: 250,
      ticketTypes: [
        { 
          id: 'vip',
          name: 'VIP Package', 
          price: 600, 
          available: 20,
          total: 100,
          features: ['Front section seating', 'Soundcheck access', 'Autographed poster', 'VIP lounge access']
        },
        { 
          id: 'premium',
          name: 'Premium Seats', 
          price: 350, 
          available: 30,
          total: 300,
          features: ['Premium seating', 'Priority entry', 'Commemorative program']
        },
        { 
          id: 'general',
          name: 'General Admission', 
          price: 180, 
          available: 200,
          total: 800,
          features: ['General seating', 'Access to venue']
        }
      ],
      tags: ['Music', 'Acoustic', 'Live Performance'],
      organizer: 'Music Ventures'
    },
    {
      id: 3,
      title: 'Fashion Show Extravaganza',
      celebrity: 'Emma Rodriguez',
      category: 'Fashion',
      date: '2024-05-10',
      time: '6:30 PM',
      venue: 'Fashion Center, LA',
      image: 'ER',
      rating: 4.9,
      reviews: 312,
      description: 'Witness the latest fashion trends and exclusive designs in this high-end fashion showcase.',
      capacity: 300,
      available: 211,
      ticketTypes: [
        { 
          id: 'vip',
          name: 'Runway VIP', 
          price: 500, 
          available: 38,
          total: 50,
          features: ['Front row runway seats', 'After-party access', 'Designer meet & greet', 'Gift bag']
        },
        { 
          id: 'premium',
          name: 'Premium View', 
          price: 300, 
          available: 65,
          total: 100,
          features: ['Premium seating', 'Champagne service', 'Event program']
        },
        { 
          id: 'general',
          name: 'Standard', 
          price: 150, 
          available: 108,
          total: 150,
          features: ['Standard seating', 'Welcome drink']
        }
      ],
      tags: ['Fashion', 'Runway', 'Design'],
      organizer: 'Fashion Forward Inc.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', count: 25 },
    { id: 'concert', name: 'Concerts', count: 8 },
    { id: 'gala', name: 'Galas', count: 6 },
    { id: 'fashion', name: 'Fashion', count: 4 },
    { id: 'charity', name: 'Charity', count: 7 }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'concert': return Music;
      case 'gala': return Award;
      case 'fashion': return Camera;
      default: return Star;
    }
  };

  const getAvailabilityColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return 'text-green-600';
    if (percentage > 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.celebrity.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.venue.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-serif font-bold">Exclusive Events</h2>
        <p className="text-muted-foreground">Book tickets for premium celebrity events and experiences</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search events, celebrities, or venues..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 input-elegant"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={selectedCategory === category.id ? "bg-accent text-accent-foreground" : ""}
          >
            {category.name} ({category.count})
          </Button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredEvents.map((event) => {
          const CategoryIcon = getCategoryIcon(event.category);
          const lowestPrice = Math.min(...event.ticketTypes.map(t => t.price));
          
          return (
            <Card key={event.id} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                        {event.image}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">with {event.celebrity}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <CategoryIcon className="w-4 h-4 text-accent" />
                        <span className="text-xs text-muted-foreground">{event.category}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{event.rating}</span>
                          <span className="text-xs text-muted-foreground">({event.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {event.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className={`text-sm font-medium ${getAvailabilityColor(event.available, event.capacity)}`}>
                      {event.available} tickets available
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {event.capacity - event.available} already booked
                  </span>
                </div>

                {/* Ticket Types Preview */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Ticket Options</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {event.ticketTypes.map((ticket) => (
                      <div key={ticket.id} className="bg-secondary/50 rounded-lg p-2 text-center">
                        <p className="text-xs font-medium">{ticket.name}</p>
                        <p className="text-sm font-bold text-green-600">${ticket.price}</p>
                        <p className="text-xs text-muted-foreground">
                          {ticket.available} left
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-bold text-green-600">${lowestPrice}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm" className="btn-hero bg-gradient-accent">
                      <Ticket className="w-4 h-4 mr-2" />
                      Buy Tickets
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* My Tickets Section */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-serif font-semibold">My Upcoming Events</h3>
          <Button variant="outline" size="sm">
            View All Tickets
          </Button>
        </div>
        
        <div className="space-y-3">
          {[
            {
              event: 'Celebrity Gala Night',
              date: '2024-03-15',
              tickets: 2,
              type: 'Premium',
              venue: 'Grand Ballroom, NYC'
            },
            {
              event: 'Acoustic Concert Experience', 
              date: '2024-04-20',
              tickets: 1,
              type: 'VIP Package',
              venue: 'Madison Square Garden'
            }
          ].map((ticket, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">{ticket.event}</p>
                  <p className="text-sm text-muted-foreground">{ticket.date} • {ticket.venue}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{ticket.tickets} x {ticket.type}</p>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-accent">
                  View Tickets <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}