import { Badge } from '@/components/ui/badge';
import { Check, Info, Settings } from 'lucide-react';
import DemoCard from '../demo-card/page';

const BadgeSandbox = () => (
  <div className="space-y-6 p-10">
    <div className="rounded-lg border border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50 p-6">
      <h2 className="text-2xl font-bold text-gray-900">🏷️ Badge Components</h2>
      <p className="text-sm text-gray-600">
        Tag labels untuk status, categories, dan labels
      </p>
    </div>

    <DemoCard
      title="Badge Variants"
      description="Empat variasi badge dengan styling yang berbeda"
    >
      <Badge variant="primary">Primary Badge</Badge>
      <Badge variant="alternative">Alternative</Badge>
      <Badge variant="outlined">Outlined</Badge>
      <Badge variant="disabled">Disabled</Badge>
    </DemoCard>

    <DemoCard
      title="Badge with Icons"
      description="Badge dengan icon untuk konteks tambahan"
    >
      <Badge variant="primary" className="gap-1">
        <Check className="h-3 w-3" />
        Success
      </Badge>
      <Badge variant="alternative" className="gap-1">
        <Info className="h-3 w-3" />
        Info
      </Badge>
      <Badge variant="outlined" className="gap-1">
        <Settings className="h-3 w-3" />
        Settings
      </Badge>
    </DemoCard>

    <DemoCard
      title="Real World Examples"
      description="Penggunaan badge dalam berbagai konteks"
    >
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span>Status:</span>
          <Badge variant="primary">Active</Badge>
          <Badge variant="outlined">Pending</Badge>
          <Badge variant="disabled">Inactive</Badge>
        </div>

        <div className="flex items-center gap-2">
          <span>Priority:</span>
          <Badge variant="alternative">High</Badge>
          <Badge variant="outlined">Medium</Badge>
          <Badge variant="outlined">Low</Badge>
        </div>
      </div>
    </DemoCard>
  </div>
);

export default BadgeSandbox;
