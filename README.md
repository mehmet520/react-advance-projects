# React Fortgeschrittene Projekte

# 🚀 React Advanced Projects

Dieses Repository enthält ausgewählte Projekte, die mit modernen Frontend-Technologien wie **React**, **Vite** und **TailwindCSS** umgesetzt wurden.  
Der Fokus liegt auf einer klaren Projektstruktur, guter Lesbarkeit des Codes und dem Einsatz aktueller Entwicklungstools.

## 📚 Inhalt & Aufbau

- Einsatz von **komponentenbasierter Architektur** mit React
- Verwendung von **Vite** für schnelle Entwicklungszyklen und effizientes Build-Management
- Stilanpassung und Responsivität mit **TailwindCSS**
- Code-Qualitätssicherung durch **ESLint** und **Prettier**
- Modulare und leicht erweiterbare Strukturen
- Umsetzungsbeispiele für State-Management, Routing und UI-Komponenten

# 🎯 Projekthintergrund & Zielsetzung

- Dieses Repository dient ausschließlich Lern- und Übungszwecken.
- Jedes Projekt ist modular aufgebaut und soll unterschiedliche Konzepte (Zustandsverwaltung, Routing, UI-Komponenten) demonstrieren.
- Es wird kontinuierlich erweitert und verbessert.

Alle Projekte sind in sich abgeschlossen, dokumentiert und dienen als Grundlage für die Weiterentwicklung unterschiedlicher Anwendungsfälle.

---

## 🗂️ Projektübersicht

	•	🍋 little-lemon-restaurant : Restaurant-Website mit Produkt- und UI-Komponenten
	•	🎬 movie-app: Filmsuche und Darstellung mit externer API-Anbindung
	•	📊 dashboard-widget: Dashboard mit modularen Analyse-Widgets

Weitere Projekte und neue Features werden regelmäßig ergänzt.

---

### Repository klonen und öffnen

```bash
git clone https://github.com/mehmet520/React-Advance-Projects.git
cd React-Advance-Projects
```

### Ein bestimmtes Projekt starten

```bash
cd little-lemon-restaurant
npm install
npm run dev
```

Die Anwendung ist erreichbar unter http://localhost:3000

> **Hinweis:** Jedes Projekt ist eigenständig und verfügt über eine eigene `package.json`-Datei.

## 🛠️ Verwendete Technologien

- JavaScript (ES6+)
- React 19
- Vite 6 (superschnelle Build-Umgebung)
- TailwindCSS 3 (Utility-First CSS)
- PostCSS & Autoprefixer
- ESLint (Code-Qualität & Fehler-Prüfung)
- Prettier (automatisches Code-Formatting)
- Environment Variables über .env-Datei
- React Router

---

## 🏗️ Projektstruktur

little-lemon-restaurant/
├── public/
├── src/
│ ├── components/
│ │ └── Desserts/
│ │ ├── DessertItem.jsx
│ │ ├── DessertList.jsx
│ │ ├── DessertControl.jsx
│ │ └── index.jsx
│ ├── pages/
│ │ └── HomePage.jsx
│ ├── assets/
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .env
├── .gitignore
├── package.json
├── vite.config.js
├── postcss.config.js
├── tailwind.config.js
├── eslint.config.js
└── README.md

Hinweis:  
Die Datei .env muss im Projekt-Stammverzeichnis liegen!

## 🧹 Codequalität: ESLint & Prettier

Linting ausführen:

    npm run lint

Überprüft deinen Code auf Fehler und Stilprobleme.

Formatierung anwenden:

    npm run format

Formatiert den gesamten Code mit Prettier nach Standard.

Alle Regeln und Einstellungen findest du in eslint.config.js und .prettierrc.

---

## ⚡️ Spezielle Vite-Konfigurationen

Alias-Importe:

- @components → src/components
- @assets → src/assets

Für kurze und übersichtliche Imports, z.B.:

    import Cake from '@assets/cake.png'

Assets:  
Bilder (.png, .jpg, .svg, .webp) können direkt importiert werden.

---

## 📦 Environment Variables (.env)

Verwende eine .env-Datei für API-Keys, URLs etc.  
Achtung: Alle Variablen müssen mit VITE\_ beginnen, z.B.:

    VITE_API_URL=https://api.example.com

Im Code darauf zugreifen:

    const url = import.meta.env.VITE_API_URL

---

## 👨‍💻 Nützliche Scripts

| Befehl          | Zweck                          |
| --------------- | ------------------------------ |
| npm run dev     | Startet den Entwicklungsserver |
| npm run build   | Produktionsbuild               |
| npm run preview | Vorschau des Produktionsbuilds |
| npm run lint    | Code-Analyse mit ESLint        |
| npm run format  | Formatierung mit Prettier      |

---

## 📝 Beitrag & Lizenz & 👨‍💻 Autor

Dieses Projekt wurde zu Lernzwecken von
Mehmet Yilmaz (https://github.com/mehmet520) entwickelt.  
Lizenz: MIT

---

## ❓ Fragen & Support

Bei Fragen, Bug-Reports oder Verbesserungsvorschlägen einfach ein GitHub Issue unter  
https://github.com/mehmet520/React-Advance-Projects/issues erstellen.

---

## 👨‍💻 Autor

Erstellt im Rahmen des persönlichen Lernprozesses von Mehmet Yilmaz.  
GitHub: [https://github.com/mehmet520](https://github.com/mehmet520)
