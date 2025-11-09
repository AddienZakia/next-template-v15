'use client';

import {
  ChevronRight,
  Code,
  FormInput,
  Palette,
  Search,
  Sparkles,
  Type,
} from 'lucide-react';
import React, { useState } from 'react';

// Types
interface SandboxItem {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  category: 'foundation' | 'components';
  tags: string[];
}

// Sandbox Data
const sandboxItems: SandboxItem[] = [
  {
    id: 'colors',
    title: 'Colors',
    description:
      'Design system color palette dengan semantic naming untuk konsistensi visual',
    path: '/sandbox/colors',
    icon: <Palette className="h-6 w-6" />,
    category: 'foundation',
    tags: ['colors', 'palette', 'theme', 'design tokens'],
  },
  {
    id: 'typography',
    title: 'Typography',
    description:
      'Responsive typography system dengan 8 variants dan 2 weight options',
    path: '/sandbox/typography',
    icon: <Type className="h-6 w-6" />,
    category: 'foundation',
    tags: ['typography', 'fonts', 'text', 'headings'],
  },
  {
    id: 'button',
    title: 'Button',
    description:
      'Interactive button component dengan 3 variants, icon support, dan multiple sizes',
    path: '/sandbox/button',
    icon: <Sparkles className="h-6 w-6" />,
    category: 'components',
    tags: ['button', 'cta', 'action', 'interactive'],
  },
  {
    id: 'input',
    title: 'Input & Textarea',
    description:
      'Form input components dengan validation, character count, dan berbagai states',
    path: '/sandbox/form',
    icon: <FormInput className="h-6 w-6" />,
    category: 'components',
    tags: ['input', 'textarea', 'form', 'validation'],
  },
];

// Stats
const stats = [
  { label: 'Components', value: '4', icon: <Code className="h-5 w-5" /> },
  { label: 'Variants', value: '30+', icon: <Sparkles className="h-5 w-5" /> },
  { label: 'Colors', value: '36', icon: <Palette className="h-5 w-5" /> },
];

// Sandbox Card Component
const SandboxCard: React.FC<{ item: SandboxItem }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={item.path}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
    >
      <div className="p-6">
        {/* Icon & Category Badge */}
        <div className="mb-4 flex items-start justify-between">
          <div className="rounded-lg bg-linear-to-br from-blue-50 to-indigo-50 p-3 text-blue-600 transition-transform duration-300 group-hover:scale-110">
            {item.icon}
          </div>
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium tracking-wide text-gray-600 uppercase">
            {item.category}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {item.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {item.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow Icon */}
        <div className="flex items-center text-sm font-medium text-blue-600">
          <span>Explore</span>
          <ChevronRight
            className={`ml-1 h-4 w-4 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
          />
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="h-1 origin-left scale-x-0 transform bg-linear-to-r from-blue-500 to-indigo-500 transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
};

// Category Section Component
const CategorySection: React.FC<{
  title: string;
  items: SandboxItem[];
  emoji: string;
}> = ({ title, items, emoji }) => {
  return (
    <div className="mb-12">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-3xl">{emoji}</span>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500">
          {items.length} items
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <SandboxCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// Search Bar Component
const SearchBar: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <div className="relative max-w-xl">
      <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search components, colors, typography..."
        className="w-full rounded-lg border-2 border-gray-200 bg-white py-3 pr-4 pl-12 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
};

// Main Component
const MainSandbox: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items based on search
  const filteredItems = sandboxItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  const foundationItems = filteredItems.filter(
    (item) => item.category === 'foundation',
  );
  const componentItems = filteredItems.filter(
    (item) => item.category === 'components',
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-sm font-medium text-gray-700">
                Design System v1.0
              </span>
            </div>
          </div>

          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Component Sandbox
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Explore dan test semua komponen design system dalam satu tempat
          </p>

          {/* Search */}
          <div className="mb-8 flex justify-center">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          {/* Stats */}
          <div className="mb-8 flex justify-center gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-6 py-3 shadow-sm"
              >
                <div className="text-blue-600">{stat.icon}</div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        {searchQuery && filteredItems.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mb-4 text-6xl">🔍</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              No results found
            </h3>
            <p className="text-gray-600">
              Try searching with different keywords
            </p>
          </div>
        ) : (
          <>
            {/* Foundation Components */}
            {foundationItems.length > 0 && (
              <CategorySection
                title="Foundation"
                items={foundationItems}
                emoji="🎨"
              />
            )}

            {/* UI Components */}
            {componentItems.length > 0 && (
              <CategorySection
                title="Components"
                items={componentItems}
                emoji="🧩"
              />
            )}
          </>
        )}

        {/* Footer Info */}
        <div className="mt-16 rounded-xl border border-gray-200 bg-white p-8">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-3 text-3xl">📚</div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Documentation
              </h3>
              <p className="text-sm text-gray-600">
                Setiap component dilengkapi dengan dokumentasi lengkap dan
                contoh penggunaan
              </p>
            </div>
            <div>
              <div className="mb-3 text-3xl">⚡</div>
              <h3 className="mb-2 font-semibold text-gray-900">Interactive</h3>
              <p className="text-sm text-gray-600">
                Test dan explore component secara langsung dengan interactive
                playground
              </p>
            </div>
            <div>
              <div className="mb-3 text-3xl">🎯</div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Best Practices
              </h3>
              <p className="text-sm text-gray-600">
                Ikuti design guidelines dan best practices untuk konsistensi UI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSandbox;
