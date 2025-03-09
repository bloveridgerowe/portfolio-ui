import { BookOpen, LucideIcon, ShoppingCart } from "lucide-react";

export interface RepositoryDetails {
    repositoryLink: string,
    technologies: string[]
}

export interface Project {
    name: string;
    icon: LucideIcon;
    link?: string;
    healthChecks?: string[];
    description: string[];
    workInProgress?: boolean;
    frontend?: RepositoryDetails;
    backend?: RepositoryDetails;
}

export const projects: Project[] = [
    {
        name: "E-Commerce System",
        icon: ShoppingCart,
        link: "https://eshop-ui.up.railway.app",
        healthChecks: [ "https://eshop-api.up.railway.app/health/check" ],
        workInProgress: true,
        description: [
            `This project is a full-stack e-commerce platform, designed as a lightweight alternative to marketplaces like eBay or Amazon. It provides
            a streamlined shopping experience where users can browse products, check availability, manage a shopping basket, track orders, and update
            their account details. The platform is built with a focus on performance, scalability, and maintainability, ensuring a smooth and responsive user experience.`,
            `The backend is built with ASP.NET 9, following domain-driven design and clean architecture to keep the codebase structured and robust. The system is organized into domain,
            application, infrastructure, and presentation layers, with a focus on rich domain models, aggregates, and value objects to enforce business rules at the core.
            To keep request handling clean and flexible, the application follows command-query separation using MediatR, with reactive workflows supported
            using domain events, allowing different parts of the application to respond dynamically without direct dependencies between components. Authentication relies on JWT with HTTP-only cookies,
            featuring multi-session support and secure refresh token rotation to prevent abuse. The API runs in a
            Dockerized environment, with a CI/CD pipeline deploying to Railway, where a managed PostgreSQL instance provides data persistence.`,
            `On the frontend, React powers the user interface, with TanStack Query handling API interactions and managing server state. The UI is built with ShadCN
            components, styled using Tailwind CSS, and designed for both desktop and mobile usability ensuring a seamless experience across all devices.
            The store features dedicated product pages with real-time stock validation, a basket with live availability checks, an orders page displaying current statuses,
            and a profile page allowing users to manage personal details, addresses, and payment methods.`,
        ],
        frontend: {
            repositoryLink: "https://github.com/bloveridgerowe/eshop-ui",
            technologies: [ "TypeScript", "React", "Vite", "Tailwind CSS", "TanStack Query", "ShadCN Components" ]
        },
        backend: {
            repositoryLink: "https://github.com/bloveridgerowe/eshop-api",
            technologies: [ "C#", "ASP.NET", "Entity Framework", "LINQ", "MediatR", "FastEndpoints", "PostgresQL", "Docker", "JWT" ]
        }
    },
    {
        name: "Portfolio Site",
        icon: BookOpen,
        link: "https://blr.up.railway.app",
        description: [
            `This portfolio site is a self-styled project, built completely from scratch without using any component libraries. Inspired by Google’s 
            Material You design philosophy, the UI embraces smooth transitions, rounded elements, and a modern, clean aesthetic. The site is hosted on
            Railway and features a CI/CD pipeline.`,
            `One of the key features of the site is real-time project health checks, powered by Axios and TanStack Query. Each project card dynamically displays
            an online/offline status indicator, allowing visitors to see whether my deployed hobby projects are currently live.`,
            `The project also features a smooth infinite scrolling carousel, achieved using CSS keyframes and flexbox. This effect creates a seamless loop, giving a 
            polished and interactive feel to my technologies section. By building this portfolio without relying on pre-built UI libraries, I was able to exercise full
            control over the design and implementation, refining my skills in React, Tailwind CSS, and modern frontend architecture.`
        ],
        frontend: {
            repositoryLink: "https://github.com/bloveridgerowe/portfolio-ui",
            technologies: [ "TypeScript", "React", "Vite", "Tailwind CSS", "TanStack Query", "Custom Components" ]
        }
    },
];
