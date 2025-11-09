import Typography from '@/components/Typography';

const typographyVariants = [
  {
    variant: 'd',
    name: 'Display',
    description: 'Largest text, untuk hero titles dan display headings',
    sizes: { mobile: '32px / 44px', desktop: '48px / 64px' },
  },
  {
    variant: 'hl',
    name: 'Heading Large',
    description: 'Heading besar untuk section titles',
    sizes: { mobile: '24px / 36px', desktop: '32px / 44px' },
  },
  {
    variant: 'hm',
    name: 'Heading Medium',
    description: 'Heading sedang untuk sub-sections',
    sizes: { mobile: '20px / 32px', desktop: '24px / 36px' },
  },
  {
    variant: 'hs',
    name: 'Heading Small',
    description: 'Heading kecil untuk card titles',
    sizes: { mobile: '16px / 28px', desktop: '20px / 32px' },
  },
  {
    variant: 'l',
    name: 'Large',
    description: 'Body text besar, default size',
    sizes: { mobile: '14px / 24px', desktop: '16px / 28px' },
  },
  {
    variant: 'm',
    name: 'Medium',
    description: 'Body text sedang untuk paragraphs',
    sizes: { mobile: '12px / 20px', desktop: '14px / 24px' },
  },
  {
    variant: 's',
    name: 'Small',
    description: 'Text kecil untuk captions dan labels',
    sizes: { mobile: '10px / 16px', desktop: '12px / 20px' },
  },
  {
    variant: 'xs',
    name: 'Extra Small',
    description: 'Text sangat kecil untuk fine print',
    sizes: { mobile: '10px / 16px', desktop: '10px / 16px' },
  },
];

// Sample text content
const sampleContent = {
  short: 'The quick brown fox jumps over the lazy dog',
  medium:
    'Typography is the art and technique of arranging type to make written language legible, readable, and appealing.',
  long: 'Good typography establishes a strong visual hierarchy, provides a graphic balance, and sets the overall tone of the product. It guides users through different sections of content and helps them understand the structure of information.',
};

// Variant Card Component
const VariantCard = ({ variant }: any) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 border-b border-gray-200 pb-4">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{variant.name}</h3>
            <code className="font-mono text-sm text-blue-600">
              variant="{variant.variant}"
            </code>
          </div>
          <div className="text-right text-xs text-gray-500">
            <div>📱 {variant.sizes.mobile}</div>
            <div>💻 {variant.sizes.desktop}</div>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{variant.description}</p>
      </div>

      {/* Regular Weight */}
      <div className="mb-4">
        <span className="mb-2 block text-xs tracking-wide text-gray-500 uppercase">
          Regular
        </span>
        <Typography variant={variant.variant} weight="regular">
          {sampleContent.short}
        </Typography>
      </div>

      {/* Bold Weight */}
      <div>
        <span className="mb-2 block text-xs tracking-wide text-gray-500 uppercase">
          Bold
        </span>
        <Typography variant={variant.variant} weight="bold">
          {sampleContent.short}
        </Typography>
      </div>
    </div>
  );
};

// Comparison View Component
const ComparisonView = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Size Comparison
      </h3>
      <div className="space-y-4">
        <Typography variant="d" weight="bold">
          Display - Largest heading
        </Typography>
        <Typography variant="hl" weight="bold">
          Heading Large - Main sections
        </Typography>
        <Typography variant="hm" weight="bold">
          Heading Medium - Sub-sections
        </Typography>
        <Typography variant="hs" weight="bold">
          Heading Small - Card titles
        </Typography>
        <Typography variant="l">Large - Default body text</Typography>
        <Typography variant="m">Medium - Secondary body text</Typography>
        <Typography variant="s">Small - Captions and labels</Typography>
        <Typography variant="xs">Extra Small - Fine print</Typography>
      </div>
    </div>
  );
};

// Semantic HTML Demo
const SemanticDemo = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Semantic HTML Elements
      </h3>
      <div className="space-y-4">
        <div>
          <span className="mb-2 block text-xs tracking-wide text-gray-500 uppercase">
            as="h1"
          </span>
          <Typography as="h1" variant="d" weight="bold">
            This is an H1 heading
          </Typography>
        </div>

        <div>
          <span className="mb-2 block text-xs tracking-wide text-gray-500 uppercase">
            as="h2"
          </span>
          <Typography as="h2" variant="hl" weight="bold">
            This is an H2 heading
          </Typography>
        </div>

        <div>
          <span className="mb-2 block text-xs tracking-wide text-gray-500 uppercase">
            as="p"
          </span>
          <Typography as="p" variant="l">
            This is a paragraph element with body text styling.
          </Typography>
        </div>

        <div>
          <span className="mb-2 block text-xs tracking-wide text-gray-500 uppercase">
            as="span"
          </span>
          <Typography as="span" variant="m" className="text-blue-600">
            This is an inline span element
          </Typography>
        </div>

        <div>
          <span className="mb-2 block text-xs tracking-wide text-gray-500 uppercase">
            as="label"
          </span>
          <Typography as="label" variant="m" weight="bold">
            Form Label Text
          </Typography>
        </div>
      </div>
    </div>
  );
};

// Real World Example
const RealWorldExample = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <Typography as="h2" variant="hl" weight="bold" className="mb-4">
        Real World Article Example
      </Typography>

      <div className="space-y-4">
        <Typography variant="m" className="text-gray-500">
          Published on November 9, 2025 • 5 min read
        </Typography>

        <Typography as="p" variant="l" className="text-gray-700">
          {sampleContent.long}
        </Typography>

        <Typography as="h3" variant="hm" weight="bold" className="mt-6">
          Understanding Visual Hierarchy
        </Typography>

        <Typography as="p" variant="l" className="text-gray-700">
          {sampleContent.medium}
        </Typography>

        <div className="my-4 border-l-4 border-blue-500 bg-blue-50 p-4">
          <Typography variant="m" weight="bold" className="mb-2 text-blue-900">
            Pro Tip
          </Typography>
          <Typography variant="m" className="text-blue-800">
            Always maintain consistent spacing and hierarchy throughout your
            design system.
          </Typography>
        </div>

        <Typography variant="s" className="text-gray-500">
          *This example demonstrates how different typography variants work
          together in a real content layout.
        </Typography>
      </div>
    </div>
  );
};

// Responsive Demo
const ResponsiveDemo = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        📱 Responsive Behavior
      </h3>
      <div className="rounded-lg bg-linear-to-r from-purple-50 to-pink-50 p-6">
        <Typography variant="d" weight="bold" className="mb-4">
          Resize your browser to see responsive typography
        </Typography>
        <Typography variant="l" className="text-gray-700">
          All typography variants automatically adjust their size based on
          screen width. On mobile devices (&lt; 768px), text sizes are optimized
          for smaller screens. On desktop devices (≥ 768px), text sizes increase
          for better readability.
        </Typography>
      </div>
    </div>
  );
};

// Custom Styling Demo
const CustomStylingDemo = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        🎨 Custom Styling
      </h3>
      <div className="space-y-4">
        <Typography variant="hl" weight="bold" className="text-blue-600">
          Blue colored heading
        </Typography>

        <Typography variant="l" className="text-center text-gray-600">
          Centered text with custom color
        </Typography>

        <Typography
          variant="m"
          className="tracking-wider text-purple-600 uppercase"
        >
          Uppercase with letter spacing
        </Typography>

        <Typography variant="l" className="text-gray-500 italic">
          Italic text style
        </Typography>

        <Typography
          variant="m"
          className="underline decoration-green-500 decoration-2"
        >
          Underlined text with custom decoration
        </Typography>
      </div>
    </div>
  );
};

// Main Component
export default function TypographySandbox() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            📝 Typography Component Sandbox
          </h1>
          <p className="text-gray-600">
            Responsive typography system dengan 8 variants dan 2 weight options
          </p>
        </div>

        {/* All Variants */}
        <div className="rounded-lg border border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            📏 All Typography Variants
          </h2>
        </div>

        <div className="grid gap-6">
          {typographyVariants.map((variant) => (
            <VariantCard key={variant.variant} variant={variant} />
          ))}
        </div>

        {/* Comparison & Examples */}
        <div className="rounded-lg border border-purple-200 bg-linear-to-r from-purple-50 to-pink-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            ✨ Usage Examples
          </h2>
        </div>

        <ComparisonView />
        <SemanticDemo />
        <ResponsiveDemo />
        <CustomStylingDemo />
        <RealWorldExample />

        {/* Usage Guide */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            📖 Usage Guidelines
          </h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Variants:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    <code className="text-blue-600">d</code> - Display titles
                  </li>
                  <li>
                    <code className="text-blue-600">hl, hm, hs</code> - Headings
                  </li>
                  <li>
                    <code className="text-blue-600">l</code> - Default body
                  </li>
                  <li>
                    <code className="text-blue-600">m, s, xs</code> - Supporting
                    text
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Props:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    <code className="text-blue-600">variant</code> - Text size
                    variant
                  </li>
                  <li>
                    <code className="text-blue-600">weight</code> - regular |
                    bold
                  </li>
                  <li>
                    <code className="text-blue-600">as</code> - HTML element
                    type
                  </li>
                  <li>
                    <code className="text-blue-600">className</code> - Custom
                    classes
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-blue-50 p-4">
              <p className="mb-2 font-semibold text-blue-900">Example Usage:</p>
              <pre className="overflow-x-auto rounded border border-blue-200 bg-white p-3 text-xs">
                {`<Typography variant="hl" weight="bold" as="h1">
    My Heading
  </Typography>
  
  <Typography variant="l" as="p" className="text-gray-600">
    My paragraph text
  </Typography>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
