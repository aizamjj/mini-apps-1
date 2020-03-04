class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <button>Checkout</button>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
