import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme1 from './theme1';
import theme2 from './theme2';
import Container from './Container';
import Colors from './Colors';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: theme1,
    };
  }

  changeTheme = (themeName) => {
    switch (themeName) {
      case 'theme1':
        this.setState({
          theme: theme1,
        });
        break;
      case 'theme2':
        this.setState({
          theme: theme2,
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div>
          <div>
            <header>
            Learn React
            </header>
            <Container text="Hello World" />
            <Colors />
          </div>
          <button type="button" onClick={() => this.changeTheme('theme1')}>Theme 1</button>
          <button type="button" onClick={() => this.changeTheme('theme2')}>Theme 2</button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
