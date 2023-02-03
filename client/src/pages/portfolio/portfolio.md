

My name is Khanh (Andrew) Nguyen. Let's reshape the world together. Hit me up if you find anything interesting here!

*Last updated: Feb 3 2023*
# Table of contents

- ## [I. Professional Experience](#professional-experience)  
    - [IMC Trading Incoming SWE Intern](#imc-trading)    
    - [CommScope SWE Intern](#commscope)    
    - [Google Software Product Sprint](#google-software-product-sprint)   
    - [FPT Information System SWE Intern](#fpt-information-system)   
    - [Brandeis Teaching Assistant](#teaching-assistant)   
    - [Brandeis ITS Data Science Intern](#its-data-science-intern)    

- ## [II. Startup Journey](#startup-journey)
    - [Hyper Edge](#hyper-edge)    
    - [Auturn Mobile App Engineer](#auturn)    
    - [Infinity Cube Supply Chain Solution](#infinity-cube-supply-chain-solution)   
    - [Giant Steps Investment Platform](#giant-steps)   

- ## [III. Projects](#projects)
    - [Nano Twitter](#nano-twitter)
    - [Word Connecting Game](#word-connecting)
    - [Blog](#my-blog)
    - [Find My Major Mobile Application](#find-my-major)
    - [Car Helper](#car-helper)
    - [Realtime Chat App](#realtime-chat-app)
    - [Coffee Venture Social Media Platform](#coffee-venture)
    - [Monster Shooter Game](#monster-shooter)

# Professional Experience

## IMC Trading

Incoming SWE Intern
*More about this soon!*

## CommScope

SWE Intern 
Team: Collaborated with 8 other engineers to develop an application to manage and optimize DOCSIS 3.1 networks 
*Technology used: Spring Framework, Java, Kotlin, SingleStore, Python, Jira, Bitbucket* 

- Summer 2022 (May 2022 - Aug 2022):
    - Developed 5 APIs and optimized processing time by 60% by testing SQL queries on 10+ tables
    - Tested 10+ APIs weekly; generated 6 different scenarios to enhance validation accuracy by writing Python scripts 
    - Increased scale testing performance over 20 times by altering database indexes to maximize usage of all table partitions, separating the process to a multi-threading micro-service, and testing under scale conditions
    - *got internship return offer for fall 2022*

- Fall 2022 (Sep 2022 - Dec 2022) 
    - Reduced JSON data file size by 75% (from 191KB to 48KB) by converting data from array to string format
    - Eliminated manual errors by creating Python scripts to automatically update JSON files with the latest-version data
    - Improved the efficiency and accuracy of all application message processing by implementing an automated validation system using RabbitMQ, configurable delays, and data confirmation across 40+ tables

## Google Software Product Sprint

Scholar 
Team: Collaborated with 2 other developers
*Technology used: Java, Java Servlet, Bootstrap, HTML/CSS, Git* 

- Summer 2022:
    - Helped college students find affordable necessary items by building a full-stack website
    - Integrated Google Maps and Cloud Datastore into the application and deployed to Google Cloud Platform

## FPT Information System

SWE Intern 
Team: Collaborated with 7 engineers to integrate ERP systems for 2 Vietnamese firms – FPT and Vietlott
*Technology used: Angular, C#, .NET, MySQL, UI/UX design, Git, HTML/SASS, Jira* 

- Fall 2020 + Spring 2021 + Summer 2021 (Nov 2020 - Aug 2021)
    - Reduced 40% management task time and enhanced security control by building a role management system with role-based and jwt authorization
    - Redesigned operation and module management system
    - Designed and integrated document management and exporting service for 50 internal APIs
    - Incorporated an API management system for 40 external APIs by reading, reformatting, and exporting the data
    - Developed and frequently debugged 20+ business modules covering functionalities such as user and inventory management and financial reporting; worked with the Quality Assurance team to support the deployment

## Teaching Assisstant
Course: 12b - Advanced programming language in Java

## ITS Data Science Intern
Summer 2022
Participating in a pilot group of 4 students to apply data science techniques on data sets for 5 Brandeis departments

# Startup Journey

## Auturn
App developer and Embedded Engineer

*more description coming soon*

## Hyper Edge

Got accepted into Stanford Blockchain Acceleration Program
*more description coming soon*

## Infinity Cube Supply Chain Solution

Participated in Solana Riptide Hackathon

Team: 3 devs

![Image of riptide hackathon](https://solana.com/social/riptide-social-share.png)

- Period: March 2022 

- Goals: With our platform, Suppliers and Big and small alike can generate Batches of QR codes embedded with items' information. Then their derived address is pushed to the blockchain; upon scanning the QR code at a point where Goods transfers hands in the supply chain or checkpoint, our smart contract mints one SPL token. The validator verifies that the item is authentic and comes from the correct wallet address and that it's original; it has never been scanned before. If successful, the geolocation of the scan is uploaded, and now the code has been, it cannot be scanned again as it has already passed that point in the supply chain. 

- Technical details:
    - I designed and developed the web with Web3JS, React with TypeScript
    - Vadim is the main person in charge of developing Solana smart contract. I also supported him with developing and debugging.
- Results:
    - We collaborated super smoothly and were able to to pull the project off within 1 week (incredible! right?) (the hackathon allows almost 2 months to develop but we knew about it too late)

## Giant Steps

- Contacts: I am the developer of the team. Other members include Abel: founder, Zev: UI designer, Marco: marketer.

![Image of Giant Steps website](https://user-images.githubusercontent.com/74166827/147381865-fd8283aa-2c82-408c-ba5e-a309b45ff850.png)

- Period: May 2021 - November 2021

- Goals: Giant Steps aims at investing in small musicians and making money as those musicians succeed. The goal is to create a landing page to collect user information. First try at start-up!

- Technical details:
    - I designed the website based on the given design with React and linked it with Google Sheets.

- Results: 
    - Try it out [here!](https://giantsteps.studio)
    - Website code can be found [here](https://github.com/khanhnguyenvinh2002/giant-steps-web)

# Projects

## Nano Twitter

Team: class project, led a team of 3 developers

![Image of nanotwitter](https://www.sundayguardianlive.com/wp-content/uploads/2020/07/Abhin-Twitter-response-edied.jpg)

- Designed and developed a full-stack baby version of Twitter with all the core components and functionalities
- Reduced error rate during scale testing from 50% at 875 concurrent users to 6.7% at 4600 concurrent users using database denormalization, a 2-layered Redis cache, and a “fanout” service
- Achieved the best performance in class final mock scale test in terms of average response rate and error rate

## Word Connecting

-Contacts: I developed this project all by myself

![Image of word connecting](https://user-images.githubusercontent.com/74166827/149056388-f1aa84bc-e9fa-440a-9705-1e1e2f1633c7.png)

- Period: January 2022

- Goals: create an efficient word storage that allows efficient search, insert, and delete to play the game word connecting.

- Technical details:
    - I designed the web with React and Javascript. 
    - Optimized trie tree with radix tree and serialization storage efficiency is increased by 40%. 

- Results: 
    - Try it out [here!](https://word-connecting.web.app)
    - Code can be found [here](https://github.com/khanhnguyenvinh2002/word-connecting)

## My Blog

- Contacts: I developed this project all by myself

![Image of my blog](https://user-images.githubusercontent.com/74166827/147382926-925c0a0a-a885-41c5-bfe9-dd9dd0ae9b52.png)


- Period: December 2021

- Goals: create a blog where I can share coding experiences, knowledge, and thoughts; create a portfolio to share the projects I have done.

- Technical details:
    - I designed the web with MongoDB, ExpressJS, ReactJS, NodeJS.
    - CRUD operations are implemented for blog posts.

- Results: 
    - App code can be found [here](https://github.com/khanhnguyenvinh2002/blog)

## Find My Major

- Contacts: I developed this project all by myself

![Image of Find My Major](https://user-images.githubusercontent.com/74166827/147382232-d64ed050-030f-490d-9b10-34acd20e0d40.png)

- Period: November 2021

- Goals: Create a mobile app where students having trouble with finding a suitable major can understand their performance better with reports every lecture, and create a better way for college academic advisors to understand their students' situation.

- Technical details:
    - I developed the app with React Native and React Hooks.

- Results: 
    - App code can be found [here](https://github.com/khanhnguyenvinh2002/findMyMajor)
    - I am collecting feedback from students and academic advisors to develop future functionalities.

## Car Helper

- Contacts: I am the developer of the team. Other members include Yixing Tang and Zheng Zheng who worked on business analytic.

![Image of Car Helper website](https://user-images.githubusercontent.com/74166827/147899627-ff66b882-17d4-4c1d-94e3-a08164701d7a.png)

- Period: October 2021 - Dec 2021

- Goals: Car Helper aims at providing cheap car leasing service for foreign students. 

- Technical details:
    - I designed the website with Figma and developed with React and linked it with Google Sheets.

- Results: 
    - Try it out [here!](https://car-helper-team.web.app)
    - Website code can be found [here](https://github.com/khanhnguyenvinh2002/car-helper)
    - We have developed various business plans and the website was useful in collecting customers' information.


## Realtime chat app

Personal project

- Period: September 2020

- Goals: Create a chat app that will be later integrated to the coffee venture. 

- Technical details:
    - I built a chat app using socket.io and angular so I can reuse some components later to my social media project

- Results: 
    - Code can be found [here](https://github.com/khanhnguyenvinh2002/chat-app-angular)

## Coffee Venture

- Contacts: I developed this project all by myself.

![List of cafes image](https://user-images.githubusercontent.com/74166827/144358801-127ead0c-ce0b-4e87-9bd2-98f5227d3bde.png)

- Period: March 2021 - May 2021

- Goals: Create a social media platform where coffee enthusiasts can search for cafes, share and write posts and reviews, and save shops of interest; promote the Vietnamese coffee culture.

- Technical details:
    - I designed and developed all parts of the Angular - C# - SQL Server full-stack framework for this project.
    - I built a management system where admins can edit every detail shown on the web and a security system limiting access to certain functionalities to specific groups of users.
    - I designed the web service with 3-layered architecture: UI layer, business layer, database layer; and implemented JWT-based authentication.
    - Various CRUD operations are used.

- Results: 
    - Try it out [here!](https://coffee-venture.web.app)
    - Front-end code can be found [here](https://github.com/khanhnguyenvinh2002/coffeeventure-fe) and back-end code can be found [here](https://github.com/khanhnguyenvinh2002/coffeeventure-be-mirror)
    - I learned project organization skills, project management skills, and debugging skills.
    - I am developing new functionalities based on feedback I received and I am planning to officially launch the platform when the COVID-19 situation is better in Vietnam.

## Monster shooter

- Contacts: I developed this project all by myself.

![Monster shooter image](https://user-images.githubusercontent.com/74166827/147379816-9be6d096-9d3a-4084-b443-0c6789dc22c8.png)

- Period: May 2020

- Goals: learn Python and Python Turtle library, create a fun game to compete with friends.

- Results:
    - Code can be found [here](https://github.com/khanhnguyenvinh2002/monster-shooter)
    - This is the first program I have ever created. I learned programming techniques in Python and how to divide a program into small modules for easier maintenance and debugging.