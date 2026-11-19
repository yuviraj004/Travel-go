#!/usr/bin/env bash
# Quick launcher for Travel Go Website
cd "$(dirname "$0")"
PORT=3000

echo "========================================================"
echo "  🌴 Travel Go – Explore the World (Local Server)       "
echo "========================================================"
echo "Starting local HTTP server on http://localhost:$PORT ..."
echo "Press Ctrl+C to stop the server at any time."
echo "========================================================"

# Try python3 if available, otherwise ruby
if command -v python3 &>/dev/null; then
  python3 -m http.server $PORT
elif command -v ruby &>/dev/null; then
  ruby -run -e httpd . -p $PORT
else
  echo "Opening index.html directly in your default browser..."
  open index.html
fi
