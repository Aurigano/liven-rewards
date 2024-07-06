# Overview

The app allows customers to purchase rewards displayed as individual cards on the screen. This project involves the development of a mobile-first rewards system web app using React and Vite

## Main highlights include:

- Header and Footer with redirecting links
- Switch to change views for gifts
- Clickable cards having data according to the switch state and also can redirect to other page

## Technologies used:

- React for high efficiency and robust component-based architecture
- Vite as build tool for fast development server and modern JS support
- Tailwind CSS for styling in an utility-first approach and rapid maintainable development
- Jest for unit testing of data driven components

Development approach -
According to screens, development would take a mobile-first approach for focusing on designing for smaller screens first to ensure a responsive experience across devices
Checking the data dependencies, the app should not deal with complex states or internal routing making it independent from usage of state-management libraries and routing libraries like redux and react-router-dom.

For going with mobile-friendly layout, Tailwind CSS facilitated the rapid styling with uniformity across the app. It gracefully scales into larger screens.

Logos, Button and Cards hold interactivity and redirects to the required pages using anchor elements and window event handling respectively.

Jest is used for covering unit tests of the critical components which depends on the data props passed. Usually would be helpful for scalabilty, leveraging edge cases and performance optimizations further down the road.

Learning points:

- Complex styling to be achieved using Tailwind CSS
- Testcase for particular data driven component for making it more performant

Overall the change of state is gracefully accompanied by config-driven UI. Making it further scalable and maintainable.

Source Code can be found in: https://github.com/Aurigano/liven-rewards

Deployed App: https://liven-rewards.vercel.app/

## Conclusion

This project successfully delivers a responsive and user-friendly rewards system web app, leveraging React, Vite, and Tailwind CSS. By focusing on simplicity, performance, and maintainability, it ensures a seamless experience for customers interacting with the platform.
