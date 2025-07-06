# 🧠 Micro-Quiz Platform (Angular)

A lightweight and dynamic quiz web application built using **Angular**. This platform allows users to choose a topic category, take short quizzes, and get immediate feedback on their answers. The app demonstrates Angular's routing, service-based architecture, and dynamic UI capabilities.

---

## ✨ Features

- 🔄 Dynamic Routing with Parameterized URLs
- 🧩 Multiple Quiz Categories (e.g., Math, Java, WW1, C++)
- 📄 Static JSON-based quiz data (simulating API)
- ⚡ Real-time score tracking and feedback
- 💡 Clean UI with basic animations and responsive design
- 🧠 State management for quiz progression
- 📁 Modular component structure

---

## 🧭 Live Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with category list |
| `/quizzes/:category` | Lists quizzes under selected category |
| `/quiz/:id` | Renders a single quiz with multiple questions |

---

## 🛠️ Tech Stack

- **Angular** 16+
- **TypeScript**
- **SCSS**
- **JSON (mock data)**
- **Angular Router**
- **Angular Forms**

---

## 📂 Folder Structure

src/
│
├── app/
│ ├── core/
│ │ └── services/ # QuizService with all quiz data logic
│ ├── pages/
│ │ ├── home/ # Category list page
│ │ ├── quizzes/ # Category-specific quiz listing
│ │ └── quiz/ # Individual quiz page
│ └── app-routing.module.ts # All route configurations
│
├── assets/
│ └── data/ # JSON files for quizzes


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git https://github.com/Bellerinashine/QuizApp.git
cd micro-quiz-platform

npm install
ng serve

App will be live at http://localhost:4200

Contributors 
Sanskriti