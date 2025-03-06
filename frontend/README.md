# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


install react router dom libarary
creted three folder in src context is for api , pages for website and components for components.

for font copy link and then paste it into index.html in head section
Crete pages inside pages to render on screen

import browserRouter, Routes,Route from react-router-dom in app.jsx
wrap all the components inside the BrowserRouter
set up the routes
after setup routes link it to the navigation bar.
create routes in app.jsx file to go the pages.
after completion of navbar Make another component that is Hero
after complete hero section make another component that is item

after that make popular component in that import data_product from assests/data
and mount item component in it and mount popular component in shop component.

make offer component and mount it in shop component.

now make newCollection component and mount it into shop
whem it's completed  then  make context api in context. After making wrap app component in ShopContextProvider.
Create shopcategory in pages . In it import useContext
now product page ?
now breadcrums component in component. ?
after that link that product page with the item component
and display product item while click on the item.
now create component description
create ShopContext in Context directory.