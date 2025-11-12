'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import DemoCard from '../demo-card/page';

const ToasterDemo = () => {
  return (
    <div className="space-y-6 p-10">
      <div className="rounded-lg border border-yellow-200 bg-linear-to-r from-yellow-50 to-amber-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          🔔 Toast Notifications
        </h2>
        <p className="text-sm text-gray-600">
          Notification system untuk user feedback
        </p>
      </div>

      <DemoCard
        title="Toast Examples"
        description="Trigger berbagai jenis toast notifications"
      >
        <Button
          variant="primary"
          onClick={() => toast.success('Operation completed successfully!')}
        >
          Success Toast
        </Button>

        <Button
          variant="alternative"
          onClick={() => toast.info('Here is some information for you.')}
        >
          Info Toast
        </Button>

        <Button
          variant="outlined"
          onClick={() => toast.warning('This action requires your attention.')}
        >
          Warning Toast
        </Button>

        <Button
          className="bg-danger-main hover:bg-danger-hover"
          onClick={() => toast.error('Something went wrong!')}
        >
          Error Toast
        </Button>

        <Button
          variant="primary"
          onClick={() => {
            toast.loading('Processing your request...', {
              duration: 3000,
            });
          }}
        >
          Loading Toast
        </Button>
      </DemoCard>

      <DemoCard
        title="Toast with Action"
        description="Toast dengan action buttons"
      >
        <Button
          variant="primary"
          onClick={() =>
            toast('Document has been deleted.', {
              action: {
                label: 'Undo',
                onClick: () => toast.success('Document restored!'),
              },
            })
          }
        >
          Toast with Action
        </Button>

        <Button
          variant="alternative"
          onClick={() =>
            toast.message('New message received', {
              description: 'You have a new message from John Doe',
              action: {
                label: 'Reply',
                onClick: () => toast.info('Opening reply...'),
              },
            })
          }
        >
          Toast with Description
        </Button>
      </DemoCard>
    </div>
  );
};

export default ToasterDemo;
