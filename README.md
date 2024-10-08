# Pharmacy Stock Management Web App.

### Built Using : 

1. **Next.js** 14
2. **React.js** 18
3. **Recoil** - for State management.
4. **Tailwind CSS** - for Styling
5. **React Table**


***

### To run

##### 1. Install node packages.
```
npm install
``` 

If there are any conflicts, use the `--force` option.

##### 2. Open the folder in terminal and use the run command.
```
npm run dev
```

##### 3. Go to `localhost:3000` on your browser.




***

### Folder Structure

📦src
 ┣ 📂app
 ┃ ┣ 📂(auth)
 ┃ ┃ ┗ 📂signin
 ┃ ┣ 📂manage-stock
 ┃ ┃ ┣ 📂[productId]
 ┃ ┣ 📜globals.css
 ┣ 📂atoms
 ┣ 📂components
 ┣ 📂Data
 ┗ 📜utils.ts


The tree above represents a short description of the folder structure used.

- *atoms* contain the state stores for recoil js.
- the main *app* directory is the **Main Menu** or home page.
- All the styles and extra classes are in the `globals.css` file.
- `tailwind.config.ts` contains custom classes and definitions for colors and media query sizes. Although never used, it also contains some of the font styles.
- The `EditableTable.tsx` and `Cell.tsx` make up the in-place table editing feature. It uses the `contentEditable` attribute of HTML through `react-contenteditable`.
- The user authentication is stored on `sessionStorage` and the state is managed centrally using Recoil. The Sign In and Sign Out both the methods are provided.
- The app has a search bar with debouncing to optimize performance and avoid unnecessary re-renders. Implemented with `lodash.debounce` to delay the search while the user is typing. It can be found in `./src/app/manage-stock/page.tsx` and `./src/components/SearchBar.tsx`. 
- A Custom modal is implemented with a backdrop to handle actions such as updating stock or confirming actions. It can be found in `./src/components/Modal.tsx` 
- 
***

### Room for Improvements : 

1. Add unit testing for components.
2. Reducing repititve code logic in table rendering and input handling.
3. SearchBar filtering needs more validation, along with other state management functions such as user authenticaion and table inputs ( content-editable can be easily susceptible to XSS attacks).
4. Inline styling needs to be reduced.... too much of repition for flexbox and a few other stylings.
5. Needs more error handling to avoid edge cases in tables and authentication.
---