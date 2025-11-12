'use client';
import Typography from '@/components/Typography';
import TableData from '../../(component)/TableData';
import DashboardLayout from '../../(container)/DashboardLayout';

export default function page() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Typography variant="xl" weight="bold">
          Frontend Developer
        </Typography>

        <div className="w-full space-y-4 rounded-lg border p-6">
          <TableData />
        </div>
      </div>
    </DashboardLayout>
  );
}
