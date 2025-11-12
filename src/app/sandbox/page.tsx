'use client';

import { cn } from '@/lib/utils';
import {
  Badge,
  Bell,
  Box,
  CheckSquare,
  ChevronRight,
  Circle,
  Code,
  FormInput,
  MessageSquare,
  Palette,
  Search,
  Sparkles,
  Table,
  Type,
  Upload,
} from 'lucide-react';
import React, { useState } from 'react';

// Types
interface SandboxItem {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  category: 'foundation' | 'components' | 'feedback';
  tags: string[];
}

// Sandbox Data - Updated with all components from your structure
const sandboxItems: SandboxItem[] = [
  // Foundation
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

  // Components
  {
    id: 'badge',
    title: 'Badge',
    description:
      'Tag labels untuk status, categories, dan labels dengan berbagai variants',
    path: '/sandbox/badge',
    icon: <Badge className="h-6 w-6" />,
    category: 'components',
    tags: ['badge', 'tag', 'label', 'status'],
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
    id: 'checkbox',
    title: 'Checkbox',
    description:
      'Checkbox components dengan berbagai states, grouping, dan form integration',
    path: '/sandbox/checkbox',
    icon: <CheckSquare className="h-6 w-6" />,
    category: 'components',
    tags: ['checkbox', 'form', 'selection', 'input'],
  },
  {
    id: 'dialog',
    title: 'Dialog',
    description: 'Modal dialogs untuk konfirmasi, forms, dan informasi penting',
    path: '/sandbox/dialog',
    icon: <MessageSquare className="h-6 w-6" />,
    category: 'components',
    tags: ['dialog', 'modal', 'popup', 'overlay'],
  },
  {
    id: 'dropdown',
    title: 'Dropdown Menu',
    description:
      'Dropdown menus dengan berbagai item types: basic, checkbox, dan radio',
    path: '/sandbox/dropdown',
    icon: <Box className="h-6 w-6" />,
    category: 'components',
    tags: ['dropdown', 'menu', 'select', 'navigation'],
  },
  {
    id: 'file-upload',
    title: 'File Upload',
    description:
      'Komponen upload file dengan preview, drag & drop, dan validasi',
    path: '/sandbox/file-upload',
    icon: <Upload className="h-6 w-6" />,
    category: 'components',
    tags: ['upload', 'file', 'image', 'preview'],
  },
  {
    id: 'form',
    title: 'Input & Form',
    description:
      'Form input components dengan validation, character count, dan berbagai states',
    path: '/sandbox/form',
    icon: <FormInput className="h-6 w-6" />,
    category: 'components',
    tags: ['input', 'textarea', 'form', 'validation'],
  },
  {
    id: 'popup',
    title: 'Popover',
    description:
      'Floating content untuk informasi tambahan dan contextual actions',
    path: '/sandbox/popup',
    icon: <MessageSquare className="h-6 w-6" />,
    category: 'components',
    tags: ['popover', 'tooltip', 'floating', 'context'],
  },
  {
    id: 'radio-group',
    title: 'Radio Group',
    description:
      'Radio button groups untuk single selection dengan berbagai layouts',
    path: '/sandbox/radio-group',
    icon: <Circle className="h-6 w-6" />,
    category: 'components',
    tags: ['radio', 'group', 'selection', 'form'],
  },
  {
    id: 'table',
    title: 'Table',
    description:
      'Data tables dengan sorting, pagination, actions, dan row selection',
    path: '/sandbox/table',
    icon: <Table className="h-6 w-6" />,
    category: 'components',
    tags: ['table', 'data', 'grid', 'sorting'],
  },

  // Feedback
  {
    id: 'toaster',
    title: 'Toast Notifications',
    description:
      'Notification system untuk user feedback dengan berbagai types dan actions',
    path: '/sandbox/toaster',
    icon: <Bell className="h-6 w-6" />,
    category: 'feedback',
    tags: ['toast', 'notification', 'alert', 'feedback'],
  },
];

// Stats - Updated counts
const stats = [
  { label: 'Components', value: '12', icon: <Code className="h-5 w-5" /> },
  { label: 'Variants', value: '50+', icon: <Sparkles className="h-5 w-5" /> },
  { label: 'Colors', value: '36', icon: <Palette className="h-5 w-5" /> },
];

// Sandbox Card Component
const SandboxCard: React.FC<{ item: SandboxItem }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'foundation':
        return 'from-blue-50 to-indigo-50 text-blue-600';
      case 'components':
        return 'from-green-50 to-teal-50 text-green-600';
      case 'feedback':
        return 'from-orange-50 to-amber-50 text-orange-600';
      default:
        return 'from-gray-50 to-gray-100 text-gray-600';
    }
  };

  const getCategoryBorder = (category: string) => {
    switch (category) {
      case 'foundation':
        return 'hover:border-blue-500';
      case 'components':
        return 'hover:border-green-500';
      case 'feedback':
        return 'hover:border-orange-500';
      default:
        return 'hover:border-gray-500';
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'foundation':
        return 'from-blue-500 to-indigo-500';
      case 'components':
        return 'from-green-500 to-teal-500';
      case 'feedback':
        return 'from-orange-500 to-amber-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <a
      href={item.path}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group block overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl',
        getCategoryBorder(item.category),
      )}
    >
      <div className="p-6">
        {/* Icon & Category Badge */}
        <div className="mb-4 flex items-start justify-between">
          <div
            className={cn(
              'rounded-lg bg-linear-to-br p-3 transition-transform duration-300 group-hover:scale-110',
              getCategoryColor(item.category),
            )}
          >
            {item.icon}
          </div>
          <span
            className={cn(
              'rounded-full px-2 py-1 text-xs font-medium tracking-wide text-gray-600 uppercase',
              item.category === 'foundation' && 'bg-blue-50 text-blue-700',
              item.category === 'components' && 'bg-green-50 text-green-700',
              item.category === 'feedback' && 'bg-orange-50 text-orange-700',
            )}
          >
            {item.category}
          </span>
        </div>

        {/* Title & Description */}
        <h3
          className={cn(
            'mb-2 text-xl font-bold text-gray-900 transition-colors',
            item.category === 'foundation' && 'group-hover:text-blue-600',
            item.category === 'components' && 'group-hover:text-green-600',
            item.category === 'feedback' && 'group-hover:text-orange-600',
          )}
        >
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
              className={cn(
                'rounded px-2 py-1 text-xs font-medium',
                item.category === 'foundation' && 'bg-blue-50 text-blue-700',
                item.category === 'components' && 'bg-green-50 text-green-700',
                item.category === 'feedback' && 'bg-orange-50 text-orange-700',
              )}
            >
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
              +{item.tags.length - 3}
            </span>
          )}
        </div>

        {/* Arrow Icon */}
        <div
          className={cn(
            'flex items-center text-sm font-medium',
            item.category === 'foundation' && 'text-blue-600',
            item.category === 'components' && 'text-green-600',
            item.category === 'feedback' && 'text-orange-600',
          )}
        >
          <span>Explore</span>
          <ChevronRight
            className={`ml-1 h-4 w-4 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
          />
        </div>
      </div>

      {/* Hover Effect Border */}
      <div
        className={cn(
          'h-1 origin-left scale-x-0 transform bg-linear-to-r transition-transform duration-300 group-hover:scale-x-100',
          getCategoryGradient(item.category),
        )}
      />
    </a>
  );
};

// Category Section Component
const CategorySection: React.FC<{
  title: string;
  items: SandboxItem[];
  emoji: string;
  color: 'blue' | 'green' | 'orange';
}> = ({ title, items, emoji, color }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'from-blue-50 to-indigo-50',
          text: 'text-blue-900',
          border: 'border-blue-200',
        };
      case 'green':
        return {
          bg: 'from-green-50 to-teal-50',
          text: 'text-green-900',
          border: 'border-green-200',
        };
      case 'orange':
        return {
          bg: 'from-orange-50 to-amber-50',
          text: 'text-orange-900',
          border: 'border-orange-200',
        };
      default:
        return {
          bg: 'from-gray-50 to-slate-50',
          text: 'text-gray-900',
          border: 'border-gray-200',
        };
    }
  };

  const colors = getColorClasses(color);

  return (
    <div className="mb-12">
      <div
        className={cn(
          'mb-6 rounded-xl border bg-linear-to-r p-6',
          colors.bg,
          colors.border,
        )}
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl">{emoji}</span>
          <div>
            <h2 className={cn('text-2xl font-bold', colors.text)}>{title}</h2>
            <p className={cn('text-sm opacity-80', colors.text)}>
              {items.length} components tersedia
            </p>
          </div>
          <span
            className={cn(
              'ml-auto rounded-full bg-white/80 px-3 py-1 text-sm font-medium',
              colors.text,
            )}
          >
            {items.length} items
          </span>
        </div>
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
  const feedbackItems = filteredItems.filter(
    (item) => item.category === 'feedback',
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
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
            Explore dan test semua komponen design system dalam satu tempat.
            Total <strong>{sandboxItems.length} components</strong> tersedia.
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
                color="blue"
              />
            )}

            {/* UI Components */}
            {componentItems.length > 0 && (
              <CategorySection
                title="Components"
                items={componentItems}
                emoji="🧩"
                color="green"
              />
            )}

            {/* Feedback Components */}
            {feedbackItems.length > 0 && (
              <CategorySection
                title="Feedback"
                items={feedbackItems}
                emoji="💬"
                color="orange"
              />
            )}
          </>
        )}

        {/* Quick Navigation */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-3 font-semibold text-blue-900">
              Getting Started
            </h3>
            <p className="mb-4 text-sm text-blue-700">
              Pelajari foundation design system terlebih dahulu
            </p>
            <div className="space-y-2">
              <a
                href="/sandbox/colors"
                className="block text-sm text-blue-600 hover:text-blue-800"
              >
                → Colors & Tokens
              </a>
              <a
                href="/sandbox/typography"
                className="block text-sm text-blue-600 hover:text-blue-800"
              >
                → Typography System
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 className="mb-3 font-semibold text-green-900">
              Popular Components
            </h3>
            <p className="mb-4 text-sm text-green-700">
              Komponen yang paling sering digunakan
            </p>
            <div className="space-y-2">
              <a
                href="/sandbox/button"
                className="block text-sm text-green-600 hover:text-green-800"
              >
                → Button Variants
              </a>
              <a
                href="/sandbox/form"
                className="block text-sm text-green-600 hover:text-green-800"
              >
                → Form Inputs
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="mb-3 font-semibold text-orange-900">
              Feedback & Data
            </h3>
            <p className="mb-4 text-sm text-orange-700">
              Komponen untuk user feedback dan data display
            </p>
            <div className="space-y-2">
              <a
                href="/sandbox/toaster"
                className="block text-sm text-orange-600 hover:text-orange-800"
              >
                → Toast Notifications
              </a>
              <a
                href="/sandbox/table"
                className="block text-sm text-orange-600 hover:text-orange-800"
              >
                → Data Tables
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSandbox;
