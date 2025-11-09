'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  Edit,
  Heart,
  Play,
  Plus,
  Save,
  Send,
  Settings,
  Star,
  Trash2,
  Upload,
  X,
} from 'lucide-react';
import React, { useState } from 'react';

// Button Demo Card Component
interface ButtonDemoCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ButtonDemoCard: React.FC<ButtonDemoCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
};

// Code Display Component
interface CodeDisplayProps {
  code: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-x-auto rounded-lg bg-gray-900 p-4">
      <button
        onClick={copyCode}
        className="absolute top-2 right-2 rounded bg-gray-700 px-3 py-1 text-xs text-white transition-colors hover:bg-gray-600"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// Interactive Demo Component
const InteractiveDemo: React.FC = () => {
  const [variant, setVariant] = useState<
    'primary' | 'alternative' | 'outlined'
  >('primary');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [disabled, setDisabled] = useState(false);
  const [withLeftIcon, setWithLeftIcon] = useState(false);
  const [withRightIcon, setWithRightIcon] = useState(false);

  const generateCode = () => {
    const props = [
      variant !== 'primary' && `variant="${variant}"`,
      size !== 'md' && `size="${size}"`,
      disabled && 'disabled',
      withLeftIcon && 'leftIcon={Play}',
      withRightIcon && 'rightIcon={ArrowRight}',
    ].filter(Boolean);

    return `<Button${props.length > 0 ? ' ' + props.join(' ') : ''}>
  Click Me
</Button>`;
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        🎮 Interactive Playground
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Variant
            </label>
            <div className="flex gap-2">
              {(['primary', 'alternative', 'outlined'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    variant === v
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Size
            </label>
            <div className="flex gap-2">
              {(['sm', 'md', 'lg'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={cn(
                    'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    size === s
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                  )}
                >
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
                className="h-4 w-4 rounded text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Disabled
              </span>
            </label>

            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={withLeftIcon}
                onChange={(e) => setWithLeftIcon(e.target.checked)}
                className="h-4 w-4 rounded text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Left Icon
              </span>
            </label>

            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={withRightIcon}
                onChange={(e) => setWithRightIcon(e.target.checked)}
                className="h-4 w-4 rounded text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Right Icon
              </span>
            </label>
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Preview
            </label>
            <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8">
              <Button
                variant={variant}
                size={size}
                disabled={disabled}
                leftIcon={withLeftIcon ? Play : undefined}
                rightIcon={withRightIcon ? ArrowRight : undefined}
              >
                Click Me
              </Button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Code
            </label>
            <CodeDisplay code={generateCode()} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ButtonSandbox: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            🔘 Button Component Sandbox
          </h1>
          <p className="text-gray-600">
            Eksplorasi button component dengan 3 variants, 3 sizes, dan icon
            support
          </p>
        </div>

        {/* Interactive Playground */}
        <InteractiveDemo />

        {/* Variants */}
        <div className="rounded-lg border border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50 p-6">
          <h2 className="text-2xl font-bold text-gray-900">Button Variants</h2>
        </div>

        <ButtonDemoCard
          title="Primary Buttons"
          description="Default button style untuk primary actions"
        >
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </ButtonDemoCard>

        <ButtonDemoCard
          title="Alternative Buttons"
          description="Secondary button style untuk alternative actions"
        >
          <Button variant="alternative" size="sm">
            Small
          </Button>
          <Button variant="alternative" size="md">
            Medium
          </Button>
          <Button variant="alternative" size="lg">
            Large
          </Button>
          <Button variant="alternative" disabled>
            Disabled
          </Button>
        </ButtonDemoCard>

        <ButtonDemoCard
          title="Outlined Buttons"
          description="Outlined style untuk subtle actions"
        >
          <Button variant="outlined" size="sm">
            Small
          </Button>
          <Button variant="outlined" size="md">
            Medium
          </Button>
          <Button variant="outlined" size="lg">
            Large
          </Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
        </ButtonDemoCard>

        {/* With Icons */}
        <div className="rounded-lg border border-purple-200 bg-linear-to-r from-purple-50 to-pink-50 p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Buttons with Icons
          </h2>
        </div>

        <ButtonDemoCard
          title="Left Icons"
          description="Buttons dengan icon di sebelah kiri"
        >
          <Button variant="primary" leftIcon={Play}>
            Play
          </Button>
          <Button variant="primary" leftIcon={Download}>
            Download
          </Button>
          <Button variant="primary" leftIcon={Plus}>
            Add New
          </Button>
          <Button variant="primary" leftIcon={Save}>
            Save
          </Button>
          <Button variant="primary" leftIcon={Send}>
            Send
          </Button>
        </ButtonDemoCard>

        <ButtonDemoCard
          title="Right Icons"
          description="Buttons dengan icon di sebelah kanan"
        >
          <Button variant="alternative" rightIcon={ArrowRight}>
            Next
          </Button>
          <Button variant="alternative" rightIcon={Upload}>
            Upload
          </Button>
          <Button variant="alternative" rightIcon={Check}>
            Confirm
          </Button>
          <Button variant="alternative" rightIcon={Edit}>
            Edit
          </Button>
        </ButtonDemoCard>

        <ButtonDemoCard
          title="Both Icons"
          description="Buttons dengan icon di kedua sisi"
        >
          <Button
            variant="outlined"
            leftIcon={ArrowLeft}
            rightIcon={ArrowRight}
          >
            Navigate
          </Button>
          <Button variant="outlined" leftIcon={Heart} rightIcon={Star}>
            Favorite
          </Button>
          <Button variant="primary" leftIcon={Settings} rightIcon={Check}>
            Apply Settings
          </Button>
        </ButtonDemoCard>

        {/* Icon Only */}
        <ButtonDemoCard
          title="Icon Only Buttons"
          description="Buttons dengan hanya icon tanpa text"
        >
          <Button variant="primary" leftIcon={Play} className="px-3" />
          <Button variant="alternative" leftIcon={Edit} className="px-3" />
          <Button variant="outlined" leftIcon={Trash2} className="px-3" />
          <Button variant="primary" leftIcon={Settings} className="px-3" />
          <Button variant="alternative" leftIcon={Heart} className="px-3" />
        </ButtonDemoCard>

        {/* Real World Examples */}
        <div className="rounded-lg border border-green-200 bg-linear-to-r from-green-50 to-teal-50 p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Real World Examples
          </h2>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Form Actions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" leftIcon={Save}>
              Save Changes
            </Button>
            <Button variant="outlined">Cancel</Button>
            <Button variant="alternative" leftIcon={Plus}>
              Add Item
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Modal Actions
          </h3>
          <div className="flex justify-end gap-3">
            <Button variant="outlined" leftIcon={X}>
              Close
            </Button>
            <Button variant="primary" leftIcon={Check}>
              Confirm
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Destructive Actions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              leftIcon={Trash2}
              className="bg-danger-main hover:bg-danger-hover"
            >
              Delete Item
            </Button>
            <Button variant="outlined">Keep Item</Button>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            📖 Usage Guidelines
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Variants</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    <strong>Primary:</strong> Main actions (Save, Submit,
                    Create)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    <strong>Alternative:</strong> Secondary actions (Edit, View)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>
                    <strong>Outlined:</strong> Tertiary actions (Cancel, Close)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">
                Best Practices
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Gunakan label yang jelas dan actionable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Hanya gunakan 1 primary button per section</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Icon harus mendukung konteks button</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonSandbox;
