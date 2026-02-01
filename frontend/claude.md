# Dev-Tinder Frontend Design System

## Overview
This document defines the UI/UX standards for the Dev-Tinder application. All components must follow these guidelines to ensure consistency and maintainability.

---

## Color Palette

### Primary Colors (Blue Theme)
- **Primary**: `#3b82f6` (Blue 500) - Main brand color, CTAs, links
- **Primary Focus**: `#2563eb` (Blue 600) - Hover states
- **Primary Content**: `#ffffff` - Text on primary backgrounds

### Secondary Colors
- **Secondary**: `#8b5cf6` (Violet 500) - Accents, highlights
- **Secondary Focus**: `#7c3aed` (Violet 600) - Hover states
- **Secondary Content**: `#ffffff` - Text on secondary backgrounds

### Neutral Colors
- **Base 100**: `#ffffff` - Main background
- **Base 200**: `#f3f4f6` (Gray 100) - Card backgrounds
- **Base 300**: `#e5e7eb` (Gray 200) - Borders, dividers
- **Base Content**: `#1f2937` (Gray 800) - Primary text

### Semantic Colors
- **Success**: `#10b981` (Green 500)
- **Warning**: `#f59e0b` (Amber 500)
- **Error**: `#ef4444` (Red 500)
- **Info**: `#06b6d4` (Cyan 500)

---

## Typography

### Font Family
- **Primary**: System font stack (Tailwind default)
- **Fallback**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

### Font Sizes
- **Headings**:
  - H1: `text-4xl` (36px) - Page titles
  - H2: `text-3xl` (30px) - Section titles
  - H3: `text-2xl` (24px) - Subsection titles
  - H4: `text-xl` (20px) - Card titles

- **Body**:
  - Large: `text-lg` (18px) - Important text
  - Base: `text-base` (16px) - Default text
  - Small: `text-sm` (14px) - Helper text, captions
  - Extra Small: `text-xs` (12px) - Labels, metadata

### Font Weights
- **Bold**: `font-bold` (700) - Headings, emphasis
- **Semibold**: `font-semibold` (600) - Subheadings
- **Medium**: `font-medium` (500) - Button text
- **Normal**: `font-normal` (400) - Body text

---

## Spacing System

### Padding/Margin Scale (Tailwind scale)
- **xs**: `2` (8px)
- **sm**: `4` (16px)
- **md**: `6` (24px)
- **lg**: `8` (32px)
- **xl**: `12` (48px)
- **2xl**: `16` (64px)

### Common Patterns
- **Page padding**: `px-4 md:px-8 lg:px-16`
- **Section spacing**: `py-12 md:py-16`
- **Card padding**: `p-6 md:p-8`
- **Component gaps**: `gap-4` or `gap-6`

---

## Components

### Buttons

**Primary Button**
```jsx
<button className="btn btn-primary">
  Click Me
</button>
```

**Secondary Button**
```jsx
<button className="btn btn-secondary">
  Click Me
</button>
```

**Outline Button**
```jsx
<button className="btn btn-outline btn-primary">
  Click Me
</button>
```

**Button Sizes**
- `btn-xs` - Extra small
- `btn-sm` - Small
- `btn-md` - Medium (default)
- `btn-lg` - Large

**Button States**
- `btn-disabled` or `disabled` attribute
- `loading` class for loading state

---

### Form Elements

**Input Fields**
```jsx
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input
    type="text"
    placeholder="Type here"
    className="input input-bordered w-full"
  />
  <label className="label">
    <span className="label-text-alt">Helper text goes here</span>
  </label>
</div>
```

**Input Variants**
- `input-primary` - Primary themed input
- `input-bordered` - With border (default)
- `input-ghost` - Minimal style
- `input-error` - Error state
- `input-success` - Success state

**Textarea**
```jsx
<textarea
  className="textarea textarea-bordered w-full"
  placeholder="Bio"
></textarea>
```

**Select/Dropdown**
```jsx
<select className="select select-bordered w-full">
  <option disabled selected>Pick one</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

---

### Cards

**Basic Card**
```jsx
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content goes here</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

**Card with Image**
```jsx
<div className="card bg-base-100 shadow-xl">
  <figure>
    <img src="/image.jpg" alt="Description" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content</p>
  </div>
</div>
```

---

### Layout Containers

**Page Container**
```jsx
<div className="min-h-screen bg-base-200">
  {/* Page content */}
</div>
```

**Content Container**
```jsx
<div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
  {/* Content */}
</div>
```

**Centered Container**
```jsx
<div className="flex justify-center items-center min-h-screen">
  {/* Centered content */}
</div>
```

**Grid Layouts**
```jsx
{/* 2 columns */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Items */}
</div>

{/* 3 columns */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>
```

---

### Modals

```jsx
{/* Modal trigger */}
<button className="btn" onClick={() => document.getElementById('my_modal').showModal()}>
  Open Modal
</button>

{/* Modal */}
<dialog id="my_modal" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Modal Title</h3>
    <p className="py-4">Modal content</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```

---

### Alerts/Notifications

```jsx
{/* Info Alert */}
<div className="alert alert-info">
  <span>Info message</span>
</div>

{/* Success Alert */}
<div className="alert alert-success">
  <span>Success message</span>
</div>

{/* Warning Alert */}
<div className="alert alert-warning">
  <span>Warning message</span>
</div>

{/* Error Alert */}
<div className="alert alert-error">
  <span>Error message</span>
</div>
```

---

### Loading States

**Spinner**
```jsx
<span className="loading loading-spinner loading-lg"></span>
```

**Skeleton**
```jsx
<div className="skeleton h-32 w-full"></div>
```

---

## Design Principles

### 1. Consistency
- Use DaisyUI components consistently across all pages
- Follow the established color palette
- Maintain consistent spacing and sizing

### 2. Responsiveness
- Mobile-first approach
- Use Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Test on multiple screen sizes

### 3. Accessibility
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure sufficient color contrast
- Keyboard navigation support

### 4. Visual Hierarchy
- Clear heading structure (H1 → H2 → H3)
- Use whitespace effectively
- Emphasize primary actions with primary button color

### 5. User Feedback
- Show loading states during async operations
- Display success/error messages
- Use hover states on interactive elements
- Provide clear validation messages

---

## Common Patterns

### Authentication Pages (Login/Signup)
- Centered card layout
- Max width: `max-w-md`
- Gradient or solid background
- Clear CTA buttons
- Links for navigation

### Dashboard/Feed Pages
- Grid or masonry layout
- Card-based content
- Infinite scroll or pagination
- Filter/search functionality

### Profile Pages
- Avatar at top
- Two-column layout (info + content)
- Tabbed navigation for different sections

### Forms
- Group related fields
- Use `form-control` wrapper
- Show validation inline
- Disable submit during processing
- Clear success/error feedback

---

## DaisyUI Theme Configuration

The custom theme is configured in `tailwind.config.js` with the following settings:
- Primary color: Blue (#3b82f6)
- Secondary color: Violet (#8b5cf6)
- Base background: White
- Clean, modern aesthetic

---

## File Organization

```
src/
├── components/
│   ├── common/        # Reusable components (Button, Input, Card, etc.)
│   ├── layout/        # Layout components (Navbar, Footer, Sidebar)
│   └── pages/         # Page-specific components
├── styles/
│   └── index.css      # Global styles, Tailwind imports
└── assets/            # Images, icons, fonts
```

---

## Best Practices

1. **Component Structure**
   - Keep components small and focused
   - Use props for customization
   - Extract repeated patterns into reusable components

2. **CSS Classes**
   - Use DaisyUI classes first
   - Add Tailwind utilities for custom styling
   - Avoid inline styles unless absolutely necessary

3. **State Management**
   - Use React hooks (useState, useEffect)
   - Keep state as local as possible
   - Consider Context API for global state

4. **Performance**
   - Lazy load images
   - Code split large components
   - Memoize expensive computations

5. **Testing**
   - Test component rendering
   - Test user interactions
   - Test responsive behavior

---

## Quick Reference

### Most Used Classes
- Layout: `flex`, `grid`, `container`, `mx-auto`
- Spacing: `p-4`, `m-4`, `gap-4`, `space-y-4`
- Colors: `bg-primary`, `text-primary`, `border-base-300`
- Typography: `text-lg`, `font-bold`, `text-center`
- Buttons: `btn`, `btn-primary`, `btn-outline`
- Inputs: `input`, `input-bordered`, `form-control`
- Cards: `card`, `card-body`, `shadow-xl`

---

**Last Updated**: February 2026
**Maintained by**: Claude Code
