import { useState } from 'react';
import { RoleSelector } from '@/components/RoleSelector';
import { AdminDashboard } from '@/components/AdminDashboard';
import { ClientPortal } from '@/components/ClientPortal';

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<'admin' | 'client' | null>(null);

  const handleRoleSelect = (role: 'admin' | 'client') => {
    setSelectedRole(role);
  };

  const handleBack = () => {
    setSelectedRole(null);
  };

  if (selectedRole === 'admin') {
    return <AdminDashboard onBack={handleBack} />;
  }

  if (selectedRole === 'client') {
    return <ClientPortal onBack={handleBack} />;
  }

  return <RoleSelector onRoleSelect={handleRoleSelect} />;
};

export default Index;
