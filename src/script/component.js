export class Component {
  constructor(element) {
    this.element = element;
  }

  didMount = false;

  forceUpdate() {
    const component = this.render()
      .replace(/(<\/li>),(<li>)/g, (match, p1, p2) => {
        return p1 + p2;
      });

    this.element.innerHTML = component;

    if (!this.didMount && this.componentDidMount) {
      this.componentDidMount();
      this.didMount = true;
    }
  }

  setState(arg) {
    const newStateItem = (typeof arg === 'function')
      ? arg({...this.state})
      : arg;

    this.state = {
      ...this.state,
      ...newStateItem,
    }

    this.forceUpdate();
  }
}
