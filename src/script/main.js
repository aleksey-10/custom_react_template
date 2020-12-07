import { Component } from './component';

const initialState = {
  title: 'Title 1',
  words: ['one', 'two'],
};

class App extends Component {
  state = initialState;

  showWords() {
    console.log(this.state.words.join('-'));
  }

  addWord(word) {
    this.state = {
      ...this.state,
      words: [
        ...this.state.words,
        word,
      ],
    };
  }

  setTitle(title) {
    this.state = {
      ...this.state,
      title,
    };
  }

  render() {
    const { title, words } = this.state;

    return (`
      <div>
        <h1>${title}</h1>
        <ul>
          ${words.map(word => `<li>${word}</li>`)}
        </ul>
      </div>
    `);
  }
};

const app = new App(document.querySelector('#root'));

app.forceUpdate();

setTimeout(() => {
  app.setState(prevState => ({
    title: prevState.title + '123',
  })); // The words should be updated
}, 2000);

setTimeout(() => {
  app.setState({ title: '333' }); // the title should be updated
}, 5000);

setTimeout(() => {
  app.setState({ words: [4, 5, 6, 7, 8] }); // The words should be updated
}, 10000);
