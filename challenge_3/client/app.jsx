class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    console.log('Clicked')
  }
  render() {
    return (
      <button onClick={this.handleClick}>Checkout</button>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
