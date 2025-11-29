#!/bin/bash

echo "🚀 Starting Portfolio Deployment Process..."
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

NODE_VERSION=$(node --version | sed 's/v//')
REQUIRED_VERSION="18.0.0"

if ! [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" = "$REQUIRED_VERSION" ]; then
    print_warning "Node.js version $NODE_VERSION detected. Some deployment platforms may require Node 20+."
    print_status "For best compatibility, consider upgrading to Node 20+ or use Netlify drag-and-drop deployment."
fi

print_status "Node.js version: $(node --version)"
print_status "npm version: $(npm --version)"

# Install dependencies
print_status "Installing dependencies..."
if npm install; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Run linting
print_status "Running linter..."
if npm run lint; then
    print_success "Linting passed"
else
    print_warning "Linting failed, but continuing with build..."
fi

# Build the project
print_status "Building project for production..."
if npm run build; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Check if build output exists
if [ -d ".next" ]; then
    print_success "Build output generated in .next directory"
else
    print_error "Build output not found"
    exit 1
fi

# Show build summary
print_status "Build Summary:"
echo "=================="
if [ -f ".next/build-manifest.json" ]; then
    echo "- Build manifest created"
fi

# Check for static export if needed
if [ "$1" = "export" ]; then
    print_status "Exporting static files..."
    if npm run export; then
        print_success "Static export completed"
        if [ -d "out" ]; then
            print_success "Static files available in 'out' directory"
            echo "- Ready for deployment to any static hosting service"
            echo "- Upload the 'out' folder to your hosting provider"
        fi
    else
        print_error "Static export failed"
        exit 1
    fi
fi

print_success "🎉 Portfolio is ready for deployment!"
echo ""
echo "📋 Deployment Options:"
echo "======================"
echo "1. Vercel (Recommended): Run 'vercel --prod'"
echo "2. Netlify: Run 'netlify deploy --prod --dir=.next'"
echo "3. Static Hosting: Use 'npm run deploy' for static export"
echo "4. Manual: Upload '.next' folder to your server"
echo ""
echo "📱 PWA Features:"
echo "================"
echo "- Installable as native app"
echo "- Works offline"
echo "- Background sync enabled"
echo "- Push notifications ready"
echo ""
echo "🎯 Unique Features:"
echo "=================="
echo "- Voice navigation"
echo "- Magnetic interactions"
echo "- Particle physics"
echo "- 3D card effects"
echo "- Dynamic content adaptation"
echo "- Live GitHub integration"

exit 0