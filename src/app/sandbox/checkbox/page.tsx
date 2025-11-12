'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { FormProvider, useForm } from 'react-hook-form';
import DemoCard from '../demo-card/page';

const CheckboxSandbox = () => {
  const methods = useForm({
    defaultValues: {
      terms: false,
      newsletter: true,
      preferences: ['notifications', 'updates'],
    },
  });

  return (
    <div className="space-y-6 p-10">
      <div className="rounded-lg border border-purple-200 bg-linear-to-r from-purple-50 to-pink-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          ☑️ Checkbox Components
        </h2>
        <p className="text-sm text-gray-600">
          Checkbox dengan berbagai states dan grouping
        </p>
      </div>

      <FormProvider {...methods}>
        <DemoCard
          title="Basic Checkboxes"
          description="Checkbox dalam berbagai states"
        >
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox1" />
            <label htmlFor="checkbox1" className="text-sm text-gray-700">
              Unchecked
            </label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="checkbox2" checked />
            <label htmlFor="checkbox2" className="text-sm text-gray-700">
              Checked
            </label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="checkbox3" disabled />
            <label htmlFor="checkbox3" className="text-sm text-gray-700">
              Disabled
            </label>
          </div>
        </DemoCard>

        <DemoCard
          title="Checkbox Group"
          description="Group checkbox dengan label"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="notifications" />
              <label htmlFor="notifications" className="text-sm text-gray-700">
                Push Notifications
              </label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="emails" />
              <label htmlFor="emails" className="text-sm text-gray-700">
                Email Updates
              </label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="sms" />
              <label htmlFor="sms" className="text-sm text-gray-700">
                SMS Alerts
              </label>
            </div>
          </div>
        </DemoCard>
      </FormProvider>
    </div>
  );
};

export default CheckboxSandbox;
