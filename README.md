# Habit Tracker
Build better habits and track your daily progress. Monitor your streaks and stay motivated to achieve your goals.

---

## About the Event
This repository is a part of **OverClocked**, the second and final phase of **OverSquare**, organized by **DevSoc AEC**.
OverClocked focuses on hands-on contribution, collaboration, and improving existing projects
by fixing bugs, adding features, or enhancing developer experience.

---

## Project Overview

**Tech Stack:**
- Frontend: React (Vite)
- Backend: Node.js + Express
- Storage: In-memory (No database)

**Current features:**
- Add and manage daily habits
- Mark habits as complete
- Track consecutive day streaks
- View last completion date
- Delete habits
- Statistics dashboard (total habits, longest streak, total streaks)

> ⚠️ Note: This project is intentionally incomplete and may contain bugs or missing features.
Contributors are encouraged to improve and extend it.

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/devsoc-aec/day2-habit-tracker.git
```

### 2. Install dependencies
**Server**
```bash
cd Server
npm install
npm run dev
```

**Client**
```bash
cd Client
npm install
npm run dev
```

### 3. Access the application
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

---

## API Endpoints

### Habits
- `GET /api/habits` - Get all habits
- `POST /api/habits` - Create a new habit
- `POST /api/habits/:id/complete` - Mark habit as complete
- `DELETE /api/habits/:id` - Delete a habit

---

## Issues to Work On

### Features
- [ ] Add habit categories (health, productivity, learning, etc.)
- [ ] Implement weekly/monthly streak views
- [ ] Add habit reminders/notifications
- [ ] Create habit completion history calendar
- [ ] Add habit notes or journal entries
- [ ] Implement habit goals (target days per week)
- [ ] Add habit statistics charts
- [ ] Create habit templates

### UI/UX
- [ ] Add visual streak indicators (fire emoji, progress bars)
- [ ] Implement habit color coding
- [ ] Create habit completion animations
- [ ] Add motivational quotes
- [ ] Improve mobile responsiveness
- [ ] Add dark mode
- [ ] Create habit insights dashboard

### Technical
- [ ] Add data persistence (database)
- [ ] Implement user authentication
- [ ] Add input validation
- [ ] Handle streak reset logic properly
- [ ] Add error handling
- [ ] Implement undo functionality
- [ ] Add data export (CSV/JSON)

---

## How to Contribute
1. Fork this repository
2. Create a new branch (`git checkout -b feature/new-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m "Add: your feature description"`)
5. Push to your fork (`git push origin feature/your-feature-name`)
6. Open a Pull Request

---

## Contribution Guidelines
- Keep code clean and readable
- Follow existing code style
- Write clear commit messages
- Be respectful and collaborative

---

## Acknowledgements

Built for **OverClocked** by **DevSoc**.
Happy hacking! 💻✨
