# English Janala <img width="25px" src="./assets/logo.png" />

Start your English learning journey with **English Janala** - an interactive and engaging platform where you can learn step by step.

**🌐 Live Link:** [english-janala-drab.vercel.app](https://english-janala-drab.vercel.app/)

---

## 📋 Project Overview

English Janala is a modern and user-friendly web application designed for learning English. It's suitable for learners of all levels, from first-time users to those looking to improve their proficiency.

---

## ✨ Key Features

- 🔐 **Secure Login System** - Session-based authentication
- 📚 **Multiple Learning Levels** - From Beginner to Advanced
- 💬 **Word Meanings & Pronunciation** - Clear Bengali meanings and English pronunciation
- 🔊 **Text-to-Speech** - Listen to native pronunciation
- ❤️ **Save Words Feature** - Bookmark your favorite words
- 📝 **Detailed Word Information** - Meanings, examples, and synonyms
- 📱 **Responsive Design** - Perfect experience on all devices
- 🔍 **Interactive Interface** - Fluid and fast loading

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| HTML5 | - | Structure and markup |
| CSS3 | - | Styling and layout |
| JavaScript | Vanilla | Dynamic functionality and API integration |
| Tailwind CSS | v4 | Utility-first CSS framework |
| DaisyUI | v5 | Pre-built components and themes |
| Font Awesome | v7.0.1 | Icon library |

---

## 📦 Dependencies

```html
<!-- Loaded from online CDN: -->
- Font Awesome Icons (CSS)
- Tailwind CSS (Browser Runtime)
- DaisyUI Component Library
- Google Fonts (Poppins, Hind Siliguri)
```

**API Integration:**
- Programming Hero API - For vocabulary database

---

## 🚀 Local Setup Guide

### Requirements
- No special server setup required
- Just a modern web browser

### Installation Steps

1. **Clone the Project**
```bash
git clone https://github.com/your-username/English-Janala.git
cd English-Janala
```

2. **Open the File**
   - Open `index.html` in any web browser
   - Or use VS Code's Live Server extension

3. **Login**
   - **Email:** `abc123@gmail.com`
   - **Password:** `12345`

### Running with Live Server (Optional)

```bash
# Install VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

---

## 📚 API Endpoints

This project uses the following API endpoints:

```bash
# Get all levels
GET https://openapi.programming-hero.com/api/levels/all

# Get words by level
GET https://openapi.programming-hero.com/api/level/\{id\}

# Get word details
GET https://openapi.programming-hero.com/api/word/\{id\}

# Get all words
GET https://openapi.programming-hero.com/api/words/all
```

---

## 🔐 Demo Credentials

For local testing:
- **Email:** `abc123@gmail.com`
- **Password:** `12345`

---

## 📱 Feature Highlights

### 1. Learning Levels
- 5 different levels (Beginner to Advanced)
- Multiple words in each level
- Progressive learning path

### 2. Word Management
- Card-based view
- One-click pronunciation
- Save/Unsave functionality
- Persistent storage in LocalStorage

### 3. Detailed Word Information
- English pronunciation
- Bengali meaning
- English example sentences
- Synonyms list

### 4. User Experience
- Mobile-optimized design
- Fluid animations
- Responsive navigation

---

## 🔗 Important Links

- **🌐 Live Demo:** [Live Link](https://english-janala-drab.vercel.app/)
- **📖 API Documentation:** [Programming Hero API](https://openapi.programming-hero.com/)

---

## 📊 Project Structure

```
English-Janala/
├── index.html           # Main HTML file
├── style.css            # Custom styles
├── tailwind.init.css    # Tailwind configuration
├── script/
│   └── index.js         # Main JavaScript logic
├── assets/              # Images and resources
│   ├── logo.png
│   ├── hero-student.png
│   └── [Other images]
└── README.md            # Documentation
```

---

## 📄 License

This project is made for Educational purpose

---

## 🙏 Credits

- **API Provider:** [Programming Hero](https://programming-hero.com/)
- **UI Framework:** [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)
- **Icons:** [Font Awesome](https://fontawesome.com/)
- **Fonts:** [Google Fonts](https://fonts.google.com/)

---

**Happy Learning! 📚✨**
