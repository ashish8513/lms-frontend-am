 #LMS Frontend

 #### Setup instructions

1.Clone the Project directory
.....
git clone https://github.com/ashish8513/lms-frontend-am.git 2. Move into the project directory
.....
......
cd lms-frontend-am
3.install dependencies
npm i
...... 4. run the server
npm run lms-frontend-am

 ### setup the instructions for the tailwind

 [Tailwind official instructions doc ](https://tailwindcss.com/docs/installation)

 1. install taiwind css (npm install -D tailwindcss)

2.create tailwind by :-(npx tailwindcss init)

// to install tailwind extra dependencies
3. npm install postcss autofixer 

2. add file extension to tailwind config file in the content property
( ["./src/**/*.{html,js,jsx,ts,tsx}","./index.html])
3. add the tailwind diector to tailwind at the top of the 'index.css' file
.........
@tailwind base;
@tailwind components;
@tailwind utilities;
.........
#Adding the some Functionality on the react redux 
.........
(npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwind/line-clamp)``
.........
## Configure Auto Eslint in the install the package
(https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
2.add the the smiple-sort item in the eslint config
....
    'simple-import-sort/import': 'error',
....
3.add the simple-import-sort plugin in the eslint config
....
  plugins: ['react-refresh','simple-react-sort'],
....
4.to enable auto enable short in elastic and the folowing config 
  "editor.codeActionsOnSave":{
        "source.fixAll.eslint": true
    },