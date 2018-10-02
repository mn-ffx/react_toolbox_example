# React Toolbox example

This project is a small React App with React Toolbox components.

## Participants:

* Martina Neureiter

## Quick start

1. Clone repo: ```git clone https://github.com/mn-ffx/react_toolbox_example.git```

2. Move to: ```cd react_toolbox_example```

3. Run ```npm install``` to install the dependencies

4. Run ```npm run build``` to create a production build

5. Run ```npm start``` to start the application in dev mode

## Development

To add new component of React Toolbox, you have to:

1. Choose component

2. Add component to package.json (in upper case)

  Example: Button:
  ```
  "reactToolbox": {
    "include": [
      "BUTTON"
    ]
  }
  ```

3. Run ```npm run toolbox``` to add theme files to asset folder

4. Import component

  Hint: change path
  * path from Documentation: ```import {Button} from 'react-toolbox/lib/button';```
  * change to: ```import Button from 'react-toolbox/lib/button/Button';```

## React Toolbox Documentation

http://react-toolbox.io
