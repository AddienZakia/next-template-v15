'use client';

import { RadioGroup } from '@/components/ui/RadioGroup';
import { FormProvider, useForm } from 'react-hook-form';
import DemoCard from '../demo-card/page';

const RadioGroupSandbox = () => {
  const methods = useForm({
    defaultValues: {
      shipping: 'standard',
      payment: 'credit',
      size: 'medium',
    },
  });

  return (
    <div className="space-y-6 p-10">
      <div className="rounded-lg border border-pink-200 bg-linear-to-r from-pink-50 to-rose-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          🔘 Radio Group Components
        </h2>
        <p className="text-sm text-gray-600">
          Radio button groups untuk single selection
        </p>
      </div>

      <FormProvider {...methods}>
        <DemoCard
          title="Basic Radio Group"
          description="Group radio buttons dengan label"
        >
          <RadioGroup
            id="shipping"
            label="Shipping Method"
            options={[
              { value: 'standard', label: 'Standard Shipping (5-7 days)' },
              { value: 'express', label: 'Express Shipping (2-3 days)' },
              { value: 'overnight', label: 'Overnight Shipping' },
            ]}
            required
          />
        </DemoCard>

        <DemoCard
          title="Payment Methods"
          description="Radio group untuk pemilihan payment method"
        >
          <RadioGroup
            id="payment"
            label="Payment Method"
            options={[
              { value: 'credit', label: 'Credit Card' },
              { value: 'paypal', label: 'PayPal' },
              { value: 'bank', label: 'Bank Transfer' },
              { value: 'crypto', label: 'Cryptocurrency' },
            ]}
            required
          />
        </DemoCard>

        <DemoCard
          title="Product Sizes"
          description="Radio group untuk pemilihan size/product variant"
        >
          <RadioGroup
            id="size"
            label="T-Shirt Size"
            options={[
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
              { value: 'xlarge', label: 'Extra Large' },
            ]}
            required
          />
        </DemoCard>
      </FormProvider>
    </div>
  );
};

export default RadioGroupSandbox;
