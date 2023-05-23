# Google Docs Clone

Deployed site link: [GoogleDocs](https://clone-googledocs.netlify.app/)

This project is a frontend clone of Google Docs' single document editor screen, built using ReactJS. The main objective of this project is to replicate the interface and interactions of the document editing view in Google Docs, focusing on component-based design in React, state management, and user interaction handling.

## Components and Features

- **Text Editor:** A text editor component that mirrors the functionalities present on Google Docs' document editing screen. This component provides a white text editor overlaid on a gray background.
- **Text Editor:** A toolbar component that replicates the Google Docs toolbar. It includes options for formatting the text, such as bold, italic, underline, font size, font color, indentation, alignments and other formatting options. Additionally, it provides the ability to share the document.
- **Sidebar:** A sidebar component that includes links to other Google apps. This component allows easy navigation to other applications within the Google suite.

## Technologies Used

- **ReactJS v.18.2:** React: A JavaScript library for building user interfaces. React allows for efficient component-based development and provides a rich ecosystem for frontend development.
- **Tailwind CSS:** A utility-first CSS framework that enables rapid UI development by providing a set of pre-defined utility classes. Tailwind CSS offers flexibility and allows for easy customization of styles.
- **react-draft-wysiwyg:** A module for React that provides a rich text editor and toolbar. This module is used to implement the text editor and toolbar functionalities in the Google Docs Clone.

## Installation and Setup

1. Clone the repository from GitHub  
   `git clone https://github.com/Sakshii-Gautam/google-docs-clone.git`

2. Install dependencies  
   `npm install`

3. Start the application  
   `npm run dev`

4. Access the application on `http://localhost:5173`

## Deployment

The project can be deployed to a cloud service, by running the following command:

`npm run build`
