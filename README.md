# ItModal

A lightweight, customizable React modal component.

## Features

- Simple API: show/hide modal with state
- Customizable title, body, and text color
- Click outside or close button to dismiss
- Styled with CSS, easy to override

## Installation

```sh
npm install it-modal

Usage
Import and use the ItModal component in your React application:

```jsx
import React, { useState } from 'react';
import ItModal from 'it-modal';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(true)}>Open Modal</button>
      <ItModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title="Welcome!"
        body="This is a customizable modal."
        color="#0074D9"
      />
    </div>
  );
}

export default App;
```

## Props

| Prop         | Type       | Required | Description                                     |
|--------------|------------|----------|-------------------------------------------------|
| isVisible    | `bool`     | Yes      | Controls the visibility of the modal            |
| setIsVisible | `function` | Yes      | Function to update the modal's visibility state |
| title        | `string`   | No       | Title text for the modal (optional)             |
| body         | `node`     | Yes      | Content to display inside the modal             |
| color        | `string`   | No       | Text color for the modal body (hex, optional)   |

## Styling

The modal comes with default styles defined in `src/style.css`.
You can override these styles by targeting the following classes:

```css
.modal-overlay
.modal-container
.modal-header
.modal-title
.modal-close
.modal-body
.no-header-body
```

## Development

To run the project locally:

```sh
npm install
npm run dev
```

To build the library:

```sh
npm run build
```

## License

This project is licensed under the MIT License.
Made by Ines Trabelsi. [GitHub Repo](https://github.com/InesJT/it-modal) ```
License
MIT

