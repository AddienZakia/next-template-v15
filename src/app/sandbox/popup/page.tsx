import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@radix-ui/react-checkbox';
import DemoCard from '../demo-card/page';

const PopoverSandbox = () => {
  return (
    <div className="space-y-6 p-10">
      <div className="rounded-lg border border-indigo-200 bg-linear-to-r from-indigo-50 to-purple-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          💬 Popover Components
        </h2>
        <p className="text-sm text-gray-600">
          Floating content untuk informasi tambahan
        </p>
      </div>

      <DemoCard
        title="Basic Popover"
        description="Popover dengan konten informatif"
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outlined">What's this?</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">Information</h4>
                <p className="text-sm text-gray-600">
                  This is a popover component. It displays additional
                  information when users click on the trigger element.
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </DemoCard>

      <DemoCard
        title="Popover with Form"
        description="Popover yang berisi form input"
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="primary">Quick Settings</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">
                  Notification Settings
                </h4>
                <p className="text-sm text-gray-600">
                  Configure your notification preferences.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="popover-email" />
                  <label
                    htmlFor="popover-email"
                    className="text-sm text-gray-700"
                  >
                    Email notifications
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="popover-push" />
                  <label
                    htmlFor="popover-push"
                    className="text-sm text-gray-700"
                  >
                    Push notifications
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="popover-sms" checked />
                  <label
                    htmlFor="popover-sms"
                    className="text-sm text-gray-700"
                  >
                    SMS notifications
                  </label>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </DemoCard>
    </div>
  );
};
export default PopoverSandbox;
