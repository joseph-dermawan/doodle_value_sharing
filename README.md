# TikTok Clone - Lynx Framework

A mobile-first TikTok UI clone built with **Lynx** (React-based mobile framework), replicating the same design and functionality as the React web version in the `../mock` folder.

## ✨ Features

- 📱 **Mobile-Native Design**: Built specifically for iOS/Android using Lynx
- 🎥 **Video Interface**: TikTok-style vertical video feed
- 📜 **Scroll Navigation**: Swipe up/down between videos
- ❤️ **Interactive Actions**: Like, comment, save, and share buttons
- 🎵 **Music Display**: Song and artist information
- 📊 **Engagement Metrics**: Real-time like/comment/save counters
- 🧭 **Navigation**: Top and bottom navigation bars
- 🎨 **TikTok-Inspired Styling**: Authentic dark theme with gradients

## 🏗️ Project Structure

```
tiktok-techjam/
├── src/
│   ├── App.tsx              # Main app with video feed
│   ├── App.css              # TikTok-inspired styling
│   ├── types.ts             # TypeScript interfaces
│   ├── data.ts              # Video data and imports
│   ├── components/
│   │   ├── VideoCard.tsx    # Individual video component
│   │   ├── TopNavbar.tsx    # Header navigation
│   │   └── BottomNavbar.tsx # Footer navigation
│   └── assets/
│       └── videos/          # Video files (copied from mock)
├── package.json             # Dependencies and scripts
├── lynx.config.ts           # Lynx configuration
└── README.md               # This file
```

## 🛠️ Tech Stack

- **Lynx**: React-based mobile framework
- **TypeScript**: Type-safe development
- **Rspeedy**: Rspack-based build tool
- **ReactLynx**: Official React framework for Lynx

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or later
- Lynx Explorer app on iOS/Android (for testing)

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Scan QR code:** Use Lynx Explorer app to scan the QR code displayed in terminal

4. **Alternative:** Copy the bundle URL (e.g., `http://172.16.0.2:3001/main.lynx.bundle?fullscreen=true`) and paste it in Lynx Explorer

## 📱 Testing

### Lynx Explorer Setup
- **iOS**: Download from App Store or use pre-built simulator app
- **Android**: Download APK from Lynx documentation
- **Web Preview**: Available in development server

### Navigation
- **Scroll/Swipe**: Navigate between videos
- **Tap Actions**: Like, comment, save, share
- **Navigation**: Top/bottom navigation bars

## 🎨 UI Components

### VideoCard
- Video player background
- User profile and info overlay
- Action buttons (like, comment, save, share)
- Engagement counters with K/M formatting

### Navigation
- **TopNavbar**: Following/For You tabs with search
- **BottomNavbar**: Home, Discover, Create, Inbox, Profile

### Styling
- Pure CSS with Lynx-compatible properties
- Dark theme with white text
- Gradient overlays and shadows
- Mobile-optimized responsive design

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests

## 📊 Video Data

Currently uses hardcoded video data in `src/data.ts` with:
- Video URLs (imported from assets)
- User profiles and usernames
- Descriptions and hashtags
- Music/song information
- Engagement metrics (likes, comments, saves, shares)

## 🆚 Comparison with React Version

| Feature | React Web Version | Lynx Mobile Version |
|---------|------------------|-------------------|
| **Platform** | Web browsers | iOS/Android native |
| **Framework** | React + HTML/CSS | Lynx + ReactLynx |
| **Elements** | `<div>`, `<video>`, `<img>` | `<view>`, `<text>`, `<image>` |
| **Styling** | Standard CSS | Lynx-compatible CSS |
| **Navigation** | Mouse/keyboard | Touch gestures |
| **Performance** | Browser-dependent | Native mobile performance |

## 🔮 Future Enhancements

- [ ] **Real Video Playback**: Implement actual video player with Lynx media components
- [ ] **Gesture Controls**: Advanced touch gestures (pinch, long press)
- [ ] **Animations**: Smooth transitions and micro-interactions
- [ ] **Backend Integration**: Connect to real API for video data
- [ ] **User Features**: Authentication, following, personalized feed
- [ ] **Camera Integration**: Video recording and upload
- [ ] **Push Notifications**: Engagement notifications
- [ ] **Offline Support**: Cache videos for offline viewing

## 📚 Resources

- [Lynx Documentation](https://lynx.dev)
- [ReactLynx Guide](https://lynx.dev/react)
- [Lynx Explorer Download](https://lynx.dev/explorer)
- [Rspeedy Build Tool](https://rspeedy.dev)

## 🎯 Development Notes

This project demonstrates:
- **Lynx Element Usage**: `<view>`, `<text>`, `<image>`, `<scroll-view>`
- **Mobile-First Design**: Touch-optimized interface
- **Component Architecture**: Reusable Lynx components
- **TypeScript Integration**: Type-safe Lynx development
- **Cross-Platform UI**: Works on iOS/Android/Web

The implementation closely mirrors the original React version while leveraging Lynx's mobile-native capabilities for better performance and user experience on mobile devices.
