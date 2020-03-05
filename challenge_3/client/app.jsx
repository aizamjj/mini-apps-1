class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      formOne: false,
      formTwo: false,
      formThree: false,
      storage: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.setState({
      home: false,
      formOne: true
    })
  }

  handleNext(data) {
    var newArray = this.state.storage;
    newArray.push(data);
    this.setState({
      storage: newArray,
      formOne: false,
      formTwo: true,
      formThree: true,
    })
  }

  render() {
    return (
      <div>
        {this.state.home ? <button onClick={this.handleClick}>Checkout</button> : ''}
        {this.state.formOne ? <FormOne next={this.handleNext}/> : ''}
        {this.state.formTwo ? <FormTwo next={this.handleNext}/> : ''}
        {this.state.formThree ? <FormThree next={this.handleNext}/> : ''}


      </div>
    );
  }
}

///////////FORM///////////////////////

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
handleChange(e) {
  console.log(e)
  const {name, value} = e.target;
  this.setState({
    [name]: value
  }, () => {console.log(this.state)})
}

handleClick(e) {
  e.preventDefault();
  this.props.next(this.state)

}
 render() {
   return (
      <div>
      <form>
        <label>Name:
          <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
        </label>
        <label>Email:
          <input type='text' value={this.state.email} onChange={this.handleChange} name='email'/>
        </label>
        <label>Password:
          <input type='text' value={this.state.password} onChange={this.handleChange} name='password'/>
        </label>
        <button onClick={this.handleClick}>Next</button>
      </form>
      </div>
   )
 }
}

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressLineOne: '',
      addressLineTwo: '',
      city: '',
      state: '',
      zipcode: '',
      phoneNumber: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
handleChange(e) {
  console.log(e)
  const {name, value} = e.target;
  this.setState({
    [name]: value
  }, () => {console.log(this.state)})
}

handleClick(e) {
  e.preventDefault();
  var newArray = this.state.
  this.props.next(this.state);

  }
 render() {
   return (
      <div>
      <form>
        <label>Line 1:
          <input type='text' value={this.state.addressLineOne} onChange={this.handleChange} name='addressLineOne'/>
        </label>
        <label>Line 2:
          <input type='text' value={this.state.addressLineTwo} onChange={this.handleChange} name='addressLineTwo'/>
        </label>
        <label>City:
          <input type='text' value={this.state.city} onChange={this.handleChange} name='city'/>
        </label>
        <label>State:
          <input type='text' value={this.state.state} onChange={this.handleChange} name='state'/>
        </label>
        <label>ZipCode:
          <input type='text' value={this.state.zipcode} onChange={this.handleChange} name='zipcode'/>
        </label>
        <label>Phone Number:
          <input type='text' value={this.state.phoneNumber} onChange={this.handleChange} name='phoneNumber'/>
        </label>
        <button onClick={this.handleClick}>Next</button>
      </form>
      </div>
   )
 }
}

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: '',
      expiryDate: '',
      cVVCode: '',
      billingZipCode: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
handleChange(e) {
  console.log(e)
  const {name, value} = e.target;
  this.setState({
    [name]: value
  }, () => {console.log(this.state)})
}

handleClick(e) {
  e.preventDefault();
  this.props.next(this.state)

}
 render() {
   return (
      <div>
      <form>
        <label>Credit Card Number:
          <input type='text' value={this.state.addressLineOne} onChange={this.handleChange} name='creditCardNumber'/>
        </label>
        <label>Expiry Date:
          <input type='text' value={this.state.addressLineTwo} onChange={this.handleChange} name='expiryDate'/>
        </label>
        <label>CVV Code:
          <input type='text' value={this.state.city} onChange={this.handleChange} name='cVVCode'/>
        </label>
        <label>Billing Zip Code:
          <input type='text' value={this.state.state} onChange={this.handleChange} name='billingZipCode'/>
        </label>
        <button onClick={this.handleClick}>Next</button>

      </form>
      </div>
   )
 }
}
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
