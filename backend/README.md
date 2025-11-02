# Backend - Movie Search API

## ⚠️ WARNING: This code needs serious refactoring!

This backend is implemented with numerous anti-patterns and should be refactored according to modern best practices.

## Current Issues

### Critical Problems:
- ❌ No framework structure (plain Express.js)
- ❌ Global variables for state management
- ❌ No input validation
- ❌ Poor error handling
- ❌ Security vulnerabilities
- ❌ No testing
- ❌ Memory leaks in rate limiting
- ❌ Synchronous file operations
- ❌ Hardcoded configuration

### Performance Issues:
- ❌ Inefficient file I/O operations
- ❌ No caching strategy
- ❌ Memory leaks
- ❌ Blocking operations

### Security Issues:
- ❌ No rate limiting (broken implementation)
- ❌ Overly permissive CORS
- ❌ No input sanitization
- ❌ Hardcoded API keys
- ❌ No authentication

## Setup

```bash
# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env and add your OMDb API key
# OMDB_API_KEY=your_actual_api_key_here

# Start the server
npm start
```

## API Endpoints

### Movies
- `GET /movies/search?q={query}&page={page}` - Search movies
- Returns: `{ movies: [], totalResults: number, page: number, totalPages: number }`

### Favorites
- `GET /favorites` - Get all favorites
- `POST /favorites` - Add favorite (body: Movie object)
- `DELETE /favorites/:imdbID` - Remove favorite

### Health
- `GET /health` - Health check

## What Needs to be Fixed

1. **Convert to NestJS** - Proper framework structure
2. **Add DTOs** - Input validation with class-validator
3. **Implement Services** - Business logic separation
4. **Database Integration** - Replace JSON file
5. **Error Handling** - Comprehensive error strategy
6. **Security** - Rate limiting, validation, CORS
7. **Logging** - Structured logging
8. **Testing** - Unit and integration tests
9. **Documentation** - API documentation
10. **Performance** - Caching, optimization

## Current Dependencies

```json
{
  "express": "^4.18.2",
  "axios": "^1.6.0",
  "cors": "^2.8.5"
}
```

## Files Structure

```
backend/
├── index.js          # Main server file (needs refactoring)
├── middleware.js      # Poorly implemented middleware
├── config.js          # Configuration (needs validation)
├── package.json       # Dependencies
├── env.example        # Environment template
└── README.md          # This file
```

## Known Bugs

1. **Memory Leak**: Rate limiting never cleans up old entries
2. **Blocking I/O**: Synchronous file operations
3. **No Error Handling**: Generic error responses
4. **Security Issues**: No input validation
5. **Performance**: Inefficient algorithms

## Next Steps for Refactoring

1. Start with NestJS conversion
2. Add proper validation
3. Implement database layer
4. Add comprehensive testing
5. Implement security measures
6. Add monitoring and logging
