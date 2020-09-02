import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --color-background: #FFF;
  --color-primary: #212121;
  --color-text-in-button: #FFF;
  --color-input-border: #424242;
  --color-text-logout: #000000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  color: var(--color-primary);
}

html,
body,
#root {
  height: 100vh;
  
}

body {
  background: var(--color-background);
}
`;

export default GlobalStyle;
