# 🛡️ QCU - Questionnaire de Cybersécurité

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1.6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)

## 📋 Description

QCU (Questionnaire à Choix Unique) est une application web interactive de questionnaire sur la cybersécurité. Elle permet aux utilisateurs de tester leurs connaissances sur divers sujets liés à la sécurité informatique, incluant les réseaux, les malwares, les protocoles de sécurité et les organismes de cybersécurité.

## ✨ Fonctionnalités

- 🎯 **Questions interactives** : Interface utilisateur intuitive pour répondre aux questions
- 📊 **Système de score** : Suivi en temps réel du score (bonnes réponses / total)
- 🔒 **Thématique cybersécurité** : Questions couvrant Tor, VPN, malwares, ANSSI, RGPD, etc.
- 📱 **Interface responsive** : Compatible desktop et mobile
- ⚡ **Performance optimisée** : Développé avec Vite pour un chargement rapide

## 🚀 Technologies utilisées

- **Frontend** : React 18.2.0 avec TypeScript
- **Build Tool** : Vite 5.1.6
- **Styling** : CSS modules
- **Linting** : ESLint avec configuration TypeScript
- **Data parsing** : PapaParse pour la gestion des données

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/brandonviry/QCU.git

# Naviguer dans le dossier
cd QCU

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

## 🛠️ Scripts disponibles

```bash
# Développement
pnpm dev

# Build de production
pnpm build

# Prévisualisation du build
pnpm preview

# Linting
pnpm lint
```

## 📁 Structure du projet

```
QCU/
├── src/
│   ├── data/
│   │   └── question.json          # Base de données des questions
│   ├── ui/
│   │   └── components/
│   │       ├── Button/            # Composant bouton
│   │       ├── Lstquestion/       # Liste des questions
│   │       └── Question/          # Composant question individuelle
│   ├── App.tsx                    # Composant principal
│   └── main.tsx                   # Point d'entrée
├── index.html
├── package.json
└── README.md
```

## 🎮 Utilisation

1. Lancez l'application avec `pnpm dev`
2. Ouvrez votre navigateur à l'adresse `http://localhost:5173`
3. Répondez aux questions en cliquant sur les réponses proposées
4. Votre score s'affiche en temps réel en haut de la page

## 🌐 Démo en ligne

[Voir la démo](https://qcu.vercel.app/)

## 📝 Contenu du questionnaire

Le questionnaire couvre les domaines suivants :
- **Réseaux et anonymat** : Tor, VPN, IPv6
- **Sécurité** : Malwares, White Hat, APT, Botnet
- **Organismes** : ANSSI, ICANN, DGA-MI, CALID
- **Réglementations** : RGPD, OIV
- **Technologies** : Cloud, CMS, MOOC
- **Incidents célèbres** : Stuxnet, WannaCry

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 👨‍💻 Auteur

**VIRY Brandon**
- GitHub: [@brandonviry](https://github.com/brandonviry)
- Projet: [QCU](https://github.com/brandonviry/QCU)

## 📄 Licence

Ce projet est sous licence Aucune licence . 

## 🔄 Versions

- **v0.0.0** - Version initiale avec questionnaire de cybersécurité

---

⭐ N'hésitez pas à donner une étoile si ce projet vous a été utile !
