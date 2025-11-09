'use client';

import { Check, Copy } from 'lucide-react';
import React, { useState } from 'react';

// Types
interface Color {
  name: string;
  value: string;
  var: string;
}

interface ColorPaletteGroup {
  title: string;
  description: string;
  colors: Color[];
}

interface ColorPalette {
  [key: string]: ColorPaletteGroup;
}

interface Alert {
  type: string;
  bg: string;
  border: string;
  text: string;
}

interface Badge {
  label: string;
  bg: string;
  text: string;
}

// Color Palette Data
const colorPalette: ColorPalette = {
  neutral: {
    title: 'Neutral',
    description: 'Grayscale colors untuk background, text, dan borders',
    colors: [
      { name: 'Neutral 10', value: '#ffffff', var: '--color-neutral-10' },
      { name: 'Neutral 20', value: '#fafafa', var: '--color-neutral-20' },
      { name: 'Neutral 30', value: '#ededed', var: '--color-neutral-30' },
      { name: 'Neutral 40', value: '#e0e0e0', var: '--color-neutral-40' },
      { name: 'Neutral 50', value: '#c2c2c2', var: '--color-neutral-50' },
      { name: 'Neutral 60', value: '#9e9e9e', var: '--color-neutral-60' },
      { name: 'Neutral 70', value: '#757575', var: '--color-neutral-70' },
      { name: 'Neutral 80', value: '#616161', var: '--color-neutral-80' },
      { name: 'Neutral 90', value: '#404040', var: '--color-neutral-90' },
      { name: 'Neutral 100', value: '#1d1f20', var: '--color-neutral-100' },
    ],
  },
  primary: {
    title: 'Primary',
    description: 'Warna utama untuk actions dan interactive elements',
    colors: [
      { name: 'Main', value: '#01959f', var: '--color-primary-main' },
      { name: 'Surface', value: '#f3fbfc', var: '--color-primary-surface' },
      { name: 'Border', value: '#4db5bc', var: '--color-primary-border' },
      { name: 'Hover', value: '#01777f', var: '--color-primary-hover' },
      { name: 'Pressed', value: '#01595f', var: '--color-primary-pressed' },
      {
        name: 'Focus',
        value: 'rgba(1, 149, 159, 0.2)',
        var: '--color-primary-focus',
      },
    ],
  },
  secondary: {
    title: 'Secondary',
    description: 'Warna sekunder untuk highlights dan accents',
    colors: [
      { name: 'Main', value: '#fbc037', var: '--color-secondary-main' },
      { name: 'Surface', value: '#fffcf5', var: '--color-secondary-surface' },
      { name: 'Border', value: '#feeabc', var: '--color-secondary-border' },
      { name: 'Hover', value: '#f8a92f', var: '--color-secondary-hover' },
      { name: 'Pressed', value: '#fa9810', var: '--color-secondary-pressed' },
      {
        name: 'Focus',
        value: 'rgba(251, 192, 55, 0.2)',
        var: '--color-secondary-focus',
      },
    ],
  },
  danger: {
    title: 'Danger',
    description: 'Warna untuk error states dan destructive actions',
    colors: [
      { name: 'Main', value: '#e01428', var: '--color-danger-main' },
      { name: 'Surface', value: '#fff9fa', var: '--color-danger-surface' },
      { name: 'Border', value: '#f581b7', var: '--color-danger-border' },
      { name: 'Hover', value: '#bc1121', var: '--color-danger-hover' },
      { name: 'Pressed', value: '#700a14', var: '--color-danger-pressed' },
      {
        name: 'Focus',
        value: 'rgba(224, 20, 40, 0.2)',
        var: '--color-danger-focus',
      },
    ],
  },
  warning: {
    title: 'Warning',
    description: 'Warna untuk warning messages dan alerts',
    colors: [
      { name: 'Main', value: '#ca7336', var: '--color-warning-main' },
      { name: 'Surface', value: '#fcf7f3', var: '--color-warning-surface' },
      { name: 'Border', value: '#feb17b', var: '--color-warning-border' },
      { name: 'Hover', value: '#b1652f', var: '--color-warning-hover' },
      { name: 'Pressed', value: '#985628', var: '--color-warning-pressed' },
      {
        name: 'Focus',
        value: 'rgba(202, 115, 54, 0.2)',
        var: '--color-warning-focus',
      },
    ],
  },
  success: {
    title: 'Success',
    description: 'Warna untuk success messages dan positive feedback',
    colors: [
      { name: 'Main', value: '#43936c', var: '--color-success-main' },
      { name: 'Surface', value: '#f7f7f7', var: '--color-success-surface' },
      { name: 'Border', value: '#b8dbca', var: '--color-success-border' },
      { name: 'Hover', value: '#367a59', var: '--color-success-hover' },
      { name: 'Pressed', value: '#20573d', var: '--color-success-pressed' },
      {
        name: 'Focus',
        value: 'rgba(115, 25, 18, 0.2)',
        var: '--color-success-focus',
      },
    ],
  },
};

// Color Card Component
const ColorCard: React.FC<{ color: Color }> = ({ color }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isLight = (hex: string): boolean => {
    if (hex.startsWith('rgba')) return true;
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma > 128;
  };

  const textColor = isLight(color.value) ? 'text-gray-900' : 'text-white';

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md">
      <div
        className="relative flex h-32 w-full items-center justify-center"
        style={{ backgroundColor: color.value }}
      >
        <span
          className={`text-lg font-semibold ${textColor} opacity-0 transition-opacity group-hover:opacity-100`}
        >
          {color.name}
        </span>
      </div>
      <div className="space-y-2 bg-white p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-gray-900">{color.name}</h4>
          <button
            onClick={() => copyToClipboard(color.value)}
            className="rounded p-1.5 transition-colors hover:bg-gray-100"
            title="Copy color value"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 text-gray-600" />
            )}
          </button>
        </div>
        <div className="space-y-1">
          <p className="font-mono text-xs text-gray-600">{color.value}</p>
          <p className="font-mono text-xs break-all text-gray-500">
            {color.var}
          </p>
        </div>
      </div>
    </div>
  );
};

// Button Examples Component
const ButtonExamples: React.FC = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Button Examples
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <button
          style={{ backgroundColor: '#01959f' }}
          className="rounded-md px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
        >
          Primary
        </button>
        <button
          style={{ backgroundColor: '#fbc037' }}
          className="rounded-md px-4 py-2 font-medium text-gray-900 transition-opacity hover:opacity-90"
        >
          Secondary
        </button>
        <button
          style={{ backgroundColor: '#e01428' }}
          className="rounded-md px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
        >
          Danger
        </button>
        <button
          style={{ backgroundColor: '#ca7336' }}
          className="rounded-md px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
        >
          Warning
        </button>
        <button
          style={{ backgroundColor: '#43936c' }}
          className="rounded-md px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
        >
          Success
        </button>
        <button
          style={{ backgroundColor: '#757575' }}
          className="rounded-md px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
        >
          Neutral
        </button>
      </div>
    </div>
  );
};

// Alert Examples Component
const AlertExamples: React.FC = () => {
  const alerts: Alert[] = [
    { type: 'Primary', bg: '#f3fbfc', border: '#4db5bc', text: '#01595f' },
    { type: 'Success', bg: '#f7f7f7', border: '#b8dbca', text: '#20573d' },
    { type: 'Warning', bg: '#fcf7f3', border: '#feb17b', text: '#985628' },
    { type: 'Danger', bg: '#fff9fa', border: '#f581b7', text: '#700a14' },
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Alert Examples
      </h3>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.type}
            style={{
              backgroundColor: alert.bg,
              borderLeft: `4px solid ${alert.border}`,
              color: alert.text,
            }}
            className="rounded p-4"
          >
            <p className="font-semibold">{alert.type} Alert</p>
            <p className="mt-1 text-sm">
              This is a {alert.type.toLowerCase()} alert message example.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Badge Examples Component
const BadgeExamples: React.FC = () => {
  const badges: Badge[] = [
    { label: 'Primary', bg: '#01959f', text: 'white' },
    { label: 'Secondary', bg: '#fbc037', text: 'black' },
    { label: 'Success', bg: '#43936c', text: 'white' },
    { label: 'Warning', bg: '#ca7336', text: 'white' },
    { label: 'Danger', bg: '#e01428', text: 'white' },
    { label: 'Neutral', bg: '#9e9e9e', text: 'white' },
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Badge Examples
      </h3>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge.label}
            style={{
              backgroundColor: badge.bg,
              color: badge.text,
            }}
            className="rounded-full px-3 py-1 text-sm font-medium"
          >
            {badge.label}
          </span>
        ))}
      </div>
    </div>
  );
};

// Main Component
const ColorPaletteSandbox: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            🎨 Color Palette Sandbox
          </h1>
          <p className="text-gray-600">
            Design system color palette dengan semantic naming untuk konsistensi
            visual
          </p>
        </div>

        {/* Color Palettes */}
        {Object.entries(colorPalette).map(([key, palette]) => (
          <div key={key} className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-1 text-2xl font-bold text-gray-900">
                {palette.title}
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                {palette.description}
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {palette.colors.map((color) => (
                  <ColorCard key={color.var} color={color} />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Usage Examples */}
        <div className="rounded-lg border border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            ✨ Usage Examples
          </h2>
        </div>

        <ButtonExamples />
        <AlertExamples />
        <BadgeExamples />

        {/* Interactive Demo */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Interactive Color Demo
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div
              style={{ backgroundColor: '#f3fbfc' }}
              className="rounded-lg p-6"
            >
              <h4 style={{ color: '#01595f' }} className="mb-2 font-semibold">
                Primary Surface
              </h4>
              <p style={{ color: '#01777f' }} className="text-sm">
                Background menggunakan primary-surface dengan text
                primary-pressed
              </p>
            </div>
            <div
              style={{ backgroundColor: '#fffcf5' }}
              className="rounded-lg p-6"
            >
              <h4 style={{ color: '#fa9810' }} className="mb-2 font-semibold">
                Secondary Surface
              </h4>
              <p style={{ color: '#f8a92f' }} className="text-sm">
                Background menggunakan secondary-surface dengan text
                secondary-pressed
              </p>
            </div>
          </div>
        </div>

        {/* Accessibility Notes */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            📋 Color Usage Guidelines
          </h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <p>
                <strong>Main:</strong> Warna utama untuk backgrounds, buttons,
                dan primary elements
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <p>
                <strong>Surface:</strong> Background subtle untuk cards dan
                containers
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <p>
                <strong>Border:</strong> Warna untuk borders dan dividers
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <p>
                <strong>Hover:</strong> State ketika user hover pada interactive
                elements
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <p>
                <strong>Pressed:</strong> State ketika element sedang
                di-click/press
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-blue-600">•</span>
              <p>
                <strong>Focus:</strong> Outline color untuk keyboard navigation
                dan accessibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteSandbox;
