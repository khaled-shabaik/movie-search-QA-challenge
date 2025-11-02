# Frontend - Movie Search App

## ⚠️ WARNING: This code needs serious refactoring!

This frontend is implemented with numerous anti-patterns and should be refactored according to modern best practices.

## Current Issues

### Critical Problems:
- ❌ No state management library
- ❌ Inline styles everywhere
- ❌ No component structure
- ❌ Poor error handling
- ❌ No loading states
- ❌ Inefficient re-renders
- ❌ No TypeScript types
- ❌ No responsive design
- ❌ No accessibility
- ❌ Memory leaks

### Performance Issues:
- ❌ Unnecessary re-renders
- ❌ No memoization
- ❌ No lazy loading
- ❌ Inefficient state updates
- ❌ No code splitting

### UX Issues:
- ❌ No loading indicators
- ❌ Poor error states
- ❌ No responsive design
- ❌ No accessibility features
- ❌ Inconsistent UI

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Current Structure

```
frontend/
├── pages/
│   ├── _app.tsx          # App wrapper (global state issues)
│   ├── index.tsx         # Main search page (monolithic)
│   ├── favorites.tsx     # Favorites page
│   └── api/
│       └── test.ts       # Broken API route
├── components/
│   └── MovieCard.tsx     # Poorly implemented component
├── hooks/
│   └── useMovies.ts      # Custom hook with issues
├── utils/
│   └── api.ts            # API utilities (no error handling)
├── styles/
│   └── globals.css       # Unused global styles
├── package.json
└── next.config.js        # Disabled optimizations
```

## What Needs to be Fixed

1. **Component Architecture** - Proper component structure
2. **State Management** - TanStack Query for server state
3. **TypeScript** - Full type safety
4. **Styling System** - CSS modules, styled-components, or Tailwind
5. **Error Boundaries** - Proper error handling
6. **Loading States** - Skeleton loaders, loading indicators
7. **Performance** - Memoization, lazy loading, code splitting
8. **Accessibility** - ARIA labels, keyboard navigation
9. **Responsive Design** - Mobile-first approach
10. **Testing** - Component and integration tests

## Current Dependencies

```json
{
  "next": "13.0.0",
  "react": "18.0.0",
  "react-dom": "18.0.0",
  "axios": "^1.6.0"
}
```

## Known Issues

1. **Global State**: Using global variables instead of proper state management
2. **Inline Styles**: No CSS organization
3. **Memory Leaks**: useEffect cleanup issues
4. **No Error Handling**: Crashes on API errors
5. **Poor Performance**: Unnecessary re-renders
6. **No Accessibility**: Missing ARIA labels
7. **No Responsive Design**: Fixed layouts
8. **No Loading States**: Poor UX during async operations

## Pages

### `/` - Search Page
- Search movies from OMDb API
- Add/remove favorites
- Basic pagination
- **Issues**: Monolithic component, no error handling, poor performance

### `/favorites` - Favorites Page
- Display saved favorites
- Remove favorites
- **Issues**: No loading states, poor error handling

## Components

### MovieCard
- Display movie information
- Toggle favorite status
- **Issues**: Inline styles, no error boundaries, inefficient re-renders

## Hooks

### useMovies
- Search movies
- Load more functionality
- **Issues**: Global state, memory leaks, no cleanup

## Next Steps for Refactoring

1. **Convert to App Router** - Use Next.js 13+ App Router
2. **Add TanStack Query** - Proper server state management
3. **Implement Components** - Break down monolithic components
4. **Add TypeScript** - Full type safety
5. **Implement Styling** - CSS modules or Tailwind
6. **Add Error Boundaries** - Proper error handling
7. **Optimize Performance** - Memoization, lazy loading
8. **Add Accessibility** - ARIA labels, keyboard navigation
9. **Responsive Design** - Mobile-first approach
10. **Add Testing** - Component and integration tests
