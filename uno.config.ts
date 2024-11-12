import { defineConfig } from 'unocss'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}']
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  theme: {
    colors: {
      base: {
        primary: 'var(--theme-primary)',
        text: 'var(--theme-text)',
        bg: 'var(--theme-bg)',
        hover: 'var(--theme-hover)',
        body: 'var(--theme-body)',
        border: 'var(--theme-border)',
      }
    }
  },
  shortcuts: {
    'bg-base': 'bg-base-bg',
    'text-base': 'text-base-text',
    'border-base': 'border-base-border',
    'hover-base': 'hover:text-base-hover',
    'flex-center': 'flex items-center justify-center',
    'bg-primary': 'bg-base-primary',
    'text-primary': 'text-base-primary',
    'border-primary': 'border-base-primary',
    'hover-primary': 'hover:text-base-primary',
  },
  rules: [
    ['rounded-circle', { 'border-radius': '50%' }],
  ],
})