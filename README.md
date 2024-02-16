# P14 : Migrer une librairie jQuery vers React
## Par Seth Presman - Décembre 2023

### Getting started

#### Front-end

First, clone the project with `git clone https://github.com/Moonshield7/p14-hrnet.git`

To install the dependancies, use `npm install` to create the folder node_modules and the file package-lock.json.

To locally start the app, use `npm run dev` and open the tab http://localhost:5173/ in your browser.

### Versions

| Name | Version |
| :-: | :-: |
| React | 18.2.0 |
| react-router | 6.20.1 |
| react-router-dom | 6.20.1 |
| react-redux | 9.0.4 |
| Redux Toolkit | 2.0.1 |
| ESLint | 8.55.0 |
| Vite | 5.0.8 |
| FontAwesome | 6.5.1 |

### File organization

The files containing the app are placed in the **src** folder.

The **components** folder contains the components that are used to build tha app.

The **pages** folder contains the different pages that we can reach using the app.

The **redux** folder contains the Redux logic, with the store and the user slice in the feature folder.

### Extern packages used

Some of the components come from external packages.

Datepicker : https://github.com/Hacker0x01/react-datepicker/tree/main

Modal : https://mui.com/

Table : https://www.npmjs.com/package/moonshield-table