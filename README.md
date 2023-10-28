# Trabajo final React.Js - Gold Nutrition - Coderhouse

### Gonzalo Federico Jontade

## ## Instrucciones de instalación

``` 
	npm install
	npm run start
```

### `npm start`

Abrir navegador en [localhost](http://localhost:3000)

# Documentación de mi aplicación de React

La aplicación de React es un e-commerce sobre suplementos deportivos que permite a los usuarios navegar por productos, agregarlos al carrito y realizar compras autenticadas. La autenticación de usuarios se maneja a través de Firebase. Los componentes se organizan de manera efectiva para proporcionar una experiencia de compra completa.

### Componente App

El componente raíz de tu aplicación. Utiliza React Router para manejar las rutas y renderiza otros componentes, como NavBar, Routes, BrowserRouter y CartProvider.

### Componente ItemListContainer

Este componente muestra una lista de productos. Dependiendo de la categoría seleccionada, filtra los productos y los muestra en tarjetas. También permite agregar productos al carrito.

### Componente ItemDetailContainer

Este componente muestra los detalles de un producto específico. Permite al usuario ver la descripción, precio, stock y agregar el producto al carrito.

### Componente Cart

Muestra el contenido del carrito de compras, el total de la compra y botones para vaciar el carrito o finalizar la compra, según el estado actual del carrito. También proporciona un enlace para que el usuario pueda volver a la página de compras si el carrito está vacío.

### Componente CheckOut

Este componente permite a los usuarios realizar el proceso de pago de los productos en el carrito. Los usuarios deben completar su nombre y apellido, teléfono y mail para finalizar la compra. Después de la compra, se genera un número de pedido y se muestra al usuario.

### Componente Home

El componente principal de la página de inicio. Muestra un carrusel de bienvenida (CarouselBienvenida) y una lista de productos (ItemListContainer).

### Contexto CartContext

Este contexto proporciona datos y funciones a los componentes relacionados con el carrito de compras.

### CartProvider

Este componente envuelve toda la aplicación y proporciona el contexto CartContext a todos los componentes. Ayuda a gestionar el estado global de la aplicación y proporciona funciones para agregar productos al carrito, eliminar productos, vaciar el carrito, entre otros.

## Resumen de las bibliotecas y frameworks que utilicé en la aplicación de React:

Estas bibliotecas y frameworks son fundamentales para el desarrollo de la aplicación, ya que simplifican tareas como la gestión de rutas, la creación de una interfaz de usuario atractiva y la comunicación con una base de datos en la nube.

### React Router:

Es una biblioteca que se utiliza para manejar la navegación y las rutas en una aplicación React. Permite definir rutas y componentes asociados para crear una navegación fluida y amigable.

### Firebase:

Es una plataforma de desarrollo de aplicaciones móviles y web desarrollada por Google. Utilizo Firebase para autenticar a los usuarios, almacenar datos de productos en una base de datos y gestionar las órdenes de compra.

### React Bootstrap:

Biblioteca que proporciona componentes de interfaz de usuario preestilizados basados en Bootstrap para aplicaciones de React. Te ayuda a crear una interfaz de usuario atractiva y receptiva sin tener que escribir CSS personalizado.


### FirebaseUI:

Facilita la integración de Firebase para autenticación de usuarios.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
