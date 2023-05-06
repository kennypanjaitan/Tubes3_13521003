
# Simple ChatBot
> Third Project of Algirthm Strategies (IF2211) Course from Informatics Engineering, Bandung Institute of Technology

<br />

<!-- Contributors -->
## Contributors
| Name                      | NIM      |
| ------------------------- | -------  |
| [Bintang Hijriawan Tjahja](https://github.com/bintang433)  | 13521003 |
| [Eunice Sarah Siregar](https://github.com/eunicesarah)      | 13521013 |
| [Kenny Benaya Nathan](https://github.com/kennypanjaitan)       | 13521023 |

<!-- Table of Contents -->
## Table of Contents
- [About the Project](#about-the-project)
  * [General Information](#general-information)
  * [Project Structure](#project-structure)
  * [Tech Stack](#tech-stack)
  * [Features](#features)
  * [Project Status](#project-status)
  <!-- * [Color Reference](#color-reference)
  * [Environment Variables](#environment-variables) -->
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Setup](#setup)


<br />

<!-- About the Project -->
# About The Project

<!-- General Info -->
## General Information
A simple chatbot which applies the concept of Regular Expression and string matching algorithm to search the nearest possible question that user asks through a database. The database is filled with questions and answers. The chatbot will give the answer to the user based on the matching question in the database. If the chatbot cannot find the answer, it will give the answer that is the most similar to the question that the user asks by using the Levenshtein Distance. Users can also see the history of the questions that they have asked before.

<!-- Project Structure -->
## Project Structure
```bash
📦Tubes3_13521003
 ┣ 📂public
 ┃
 ┣ 📂doc
 ┃ ┣ 📜besokKelar.pdf
 ┃
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┣ 📂icon
 ┃ ┃ ┣ 📂contexts
 ┃ ┃ ┃ ┣ 📜Chat.tsx
 ┃ ┃ ┃ ┣ 📜HistoryList.tsx
 ┃ ┃ ┃ ┣ 📜Sidebar.tsx
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┣ 📜global.css
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┣ 📜page.tsx
 ┃ ┣ 📂backend
 ┃
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜next.config.js
 ┣ 📜package.json
 ┣ 📜package-lock.json
 ┣ 📜postcss.config.js
 ┣ 📜tailwind.config.js
 ┣ 📜tsconfig.json
 ┣ 📜yarn.lock
 ┗ 📜README.md
 ```

<!-- Tech Stack -->
## Tech Stack
<details>
  <summary>&nbsp;&nbsp; Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
  <summary>&nbsp;&nbsp; Server</summary>
  <ul>
    <li><a href="https://nodejs.org/en">Node.js</a></li>
  </ul>
</details>

<details>
<summary>&nbsp;&nbsp; Database</summary>
  <ul>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
  </ul>
</details>

<p />

<!-- Features -->
## Features

- User can ask a question to the chatbot and the chatbot will give the answer based on the matching question in the database.
- If the chatbot cannot find the answer, it will give the answer that is the most similar to the question that the user asks
- User can see the history of the questions that they have asked before.
- User can ask a calculation question to the chatbot
- User can ask a question about what day from the provided date
- User can add a new question and answer to the database


<!-- Env Variables -->
<!-- ### Environment Variables

To run this project, you will need to add the following environment variables to your .env file -->

<!-- `API_KEY`

`ANOTHER_API_KEY` -->

## Project Status
    IN PROGRESS

<br />

<!-- Run -->
# Getting Started

<!-- Prerequisites -->
## Prerequisites

Install all requirement that was mentioned in [Tech Stack](#tech-stack). This project uses Yarn as package manager and it is one of the requirements

```bash
npm install --global yarn
```


## Setup

Currently, this project is not deployed yet. So, you need to run it locally on a developmental server.

1. Clone this repo (first time only)
    ````bash
    git clone https://github.com/kennypanjaitan/Tubes3_13521003.git
    ````

2. Go to the project directory
    ```bash
    cd Tubes3_13521003
    ```

3. Install dependencies
    
    ```bash
    yarn
    ```

4. Run the development server
    ```bash
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

