import { useState } from 'react';
import { 
  Star, 
  Calendar, 
  DollarSign, 
  Heart, 
  Search, 
  Filter,
  MapPin,
  Clock,
  User,
  CreditCard,
  CheckCircle,
  PlayCircle,
  Award,
  Users,
  Eye,
  MessageCircle
} from 'lucide-react';
import { EventTicketing } from './EventTicketing';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface ClientPortalProps {
  onBack: () => void;
}

export function ClientPortal({ onBack }: ClientPortalProps) {
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');

  const celebrities = [
    {
      id: 1,
      name: 'Sarah Johnson',
      category: 'Actress',
      rating: 4.9,
      reviews: 247,
      fee: '$75,000',
      availability: 'Available',
      location: 'Los Angeles, CA',
      image: 'SJ',
      specialties: ['Red Carpet Events', 'Product Launches', 'Charity Galas'],
      verified: true,
      recentWork: 'Marvel Studios'
    },
    {
      id: 2,
      name: 'Michael Chen',
      category: 'Musician',
      rating: 4.8,
      reviews: 189,
      fee: '$45,000',
      availability: 'Busy until March',
      location: 'Nashville, TN',
      image: 'MC',
      specialties: ['Concerts', 'Private Events', 'Corporate Shows'],
      verified: true,
      recentWork: 'Grammy Awards'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      category: 'Model',
      rating: 4.9,
      reviews: 312,
      fee: '$60,000',
      availability: 'Available',
      location: 'New York, NY',
      image: 'ER',
      specialties: ['Fashion Shows', 'Brand Campaigns', 'Photo Shoots'],
      verified: true,
      recentWork: 'Vogue Magazine'
    }
  ];

  const myBookings = [
    {
      id: 1,
      celebrity: 'Sarah Johnson',
      event: 'Annual Company Gala',
      date: '2024-03-15',
      time: '7:00 PM',
      venue: 'Grand Ballroom, NYC',
      status: 'confirmed',
      fee: '$75,000',
      avatar: 'SJ'
    },
    {
      id: 2,
      celebrity: 'Michael Chen',
      event: 'Product Launch Concert',
      date: '2024-04-20',
      time: '8:00 PM',
      venue: 'Madison Square Garden',
      status: 'pending',
      fee: '$45,000',
      avatar: 'MC'
    }
  ];

  const categories = [
    { name: 'All', count: 247, active: true },
    { name: 'Actors', count: 89, active: false },
    { name: 'Musicians', count: 76, active: false },
    { name: 'Models', count: 45, active: false },
    { name: 'Athletes', count: 37, active: false }
  ];

  const navigation = [
    { id: 'discover', label: 'Discover', icon: Star },
    { id: 'events', label: 'Events & Tickets', icon: Calendar },
    { id: 'bookings', label: 'My Bookings', icon: CheckCircle },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'messages', label: 'Messages', icon: MessageCircle }
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
            <h1 className="text-2xl font-serif font-bold">Client Portal</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search celebrities..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 input-elegant"
              />
            </div>
            <Avatar>
              <AvatarFallback className="bg-accent text-accent-foreground">CL</AvatarFallback>
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
                      ? 'bg-accent text-accent-foreground shadow-medium'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-8 space-y-4">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
              Quick Stats
            </h4>
            <div className="space-y-3">
              {[
                { label: 'Active Bookings', value: '2', icon: Calendar },
                { label: 'Total Spent', value: '$120K', icon: DollarSign },
                { label: 'Saved Favorites', value: '8', icon: Heart }
              ].map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <StatIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'discover' && (
            <div className="space-y-6">
              {/* Category Filter */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant={category.active ? "default" : "outline"}
                      size="sm"
                      className={category.active ? "bg-accent text-accent-foreground" : ""}
                    >
                      {category.name} ({category.count})
                    </Button>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>

              {/* Celebrity Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {celebrities
                  .filter(celebrity => 
                    celebrity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    celebrity.category.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((celebrity) => (
                    <Card key={celebrity.id} className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-12 h-12">
                              <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                                {celebrity.image}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="font-semibold">{celebrity.name}</h3>
                                {celebrity.verified && (
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{celebrity.category}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Rating & Reviews */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{celebrity.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              ({celebrity.reviews} reviews)
                            </span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {celebrity.recentWork}
                          </Badge>
                        </div>

                        {/* Specialties */}
                        <div className="flex flex-wrap gap-1">
                          {celebrity.specialties.slice(0, 2).map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                          {celebrity.specialties.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{celebrity.specialties.length - 2} more
                            </Badge>
                          )}
                        </div>

                        {/* Location & Availability */}
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{celebrity.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className={
                              celebrity.availability === 'Available' 
                                ? 'text-green-600' 
                                : 'text-orange-600'
                            }>
                              {celebrity.availability}
                            </span>
                          </div>
                        </div>

                        {/* Fee & Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div>
                            <p className="text-sm text-muted-foreground">Starting at</p>
                            <p className="text-xl font-bold text-green-600">{celebrity.fee}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" className="btn-hero bg-gradient-accent">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && <EventTicketing />}

          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif font-bold">My Bookings</h2>
                <Button className="btn-hero">
                  <Calendar className="w-4 h-4 mr-2" />
                  New Booking
                </Button>
              </div>

              <div className="space-y-4">
                {myBookings.map((booking) => (
                  <Card key={booking.id} className="glass-card p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {booking.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{booking.event}</h3>
                          <p className="text-sm text-muted-foreground">with {booking.celebrity}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{booking.venue}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">{booking.fee}</p>
                        <Badge 
                          variant={booking.status === 'confirmed' ? 'default' : 'secondary'}
                          className="mt-2"
                        >
                          {booking.status}
                        </Badge>
                        <div className="flex space-x-2 mt-3">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Other tabs */}
          {(activeTab === 'favorites' || activeTab === 'messages') && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {activeTab === 'favorites' ? 
                    <Heart className="w-8 h-8 text-accent" /> : 
                    <MessageCircle className="w-8 h-8 text-accent" />
                  }
                </div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">
                  The {navigation.find(nav => nav.id === activeTab)?.label} section is under development.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
