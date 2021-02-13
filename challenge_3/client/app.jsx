class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: 'Anthony Sim',
      email: 'anthonyysim@gmail.com',
      password: 'richdad',
      address1: '3813 Huron Ave',
      address2: 'Apt #3',
      city: 'Culver City',
      state: 'CA',
      zipCode: '90232',
      phoneNumber: '949-449-5698',
      creditCardNumber: '1234-1234-1234-1234',
      expiredDate: '05/22',
      CVV: '656',
      creditCardZipCode: '90232'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, address1, address2, city, state, zipCode, phoneNumber, creditCardNumber, expiredDate, CVV, creditCardZipCode } = this.state;

    const data = { name, email, password, address1, address2, city, state, zipCode, phoneNumber, creditCardNumber, expiredDate, CVV, creditCardZipCode }
    console.log(data)

    fetch('http://localhost:3000/user', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(() => console.log('Success!'))
      .then(() => this.setState({
        step: 1,
        name: '',
        email: '',
        password: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        creditCardNumber: '',
        expiredDate: '',
        CVV: '',
        creditCardZipCode: ''
      }))
      .catch(() => console.error('Something wrong happened!'))
  }

  previous() {
    if (this.state.step > 0) {
      this.setState(prevState => {
        return {
          step: prevState.step -= 1
        }
      })
    }
  }

  next() {
    if (this.state.step < 4) {
      this.setState(prevState => {
        return {
          step: prevState.step += 1
        }
      })
    }
    console.log(this.state.name, this.state.email, this.state.password)
  }


  render() {
    let formStep;

    if (this.state.step === 1) {
      formStep = <button onClick={this.next}>Checkout</button>

    } else if (this.state.step === 2) {
      formStep = <form >
        <h3>Name:</h3>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <br />
        <br />
        <h3>Email:</h3>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <br />
        <br />
        <h3>Password:</h3>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
      </form>

    } else if (this.state.step === 3) {
      formStep = <form >
        <h3>Address1:</h3>
        <input type="text" name="address1" value={this.state.address1} onChange={this.handleChange} />
        <br />
        <br />
        <h3>Address2:</h3>
        <input type="text" name="address2" value={this.state.address2} onChange={this.handleChange} />
        <br />
        <br />
        <h3>City:</h3>
        <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
        <br />
        <br />
        <h3>State:</h3>
        <input type="text" name="state" value={this.state.state} onChange={this.handleChange} />
        <br />
        <br />
        <h3>Zipcode:</h3>
        <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} />
        <br />
        <br />
        <h3>Phone Number:</h3>
        <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
      </form>
    } else {
      formStep = <form >
        <h3>Credit Card Number:</h3>
        <input type="text" name="creditCardNumber" value={this.state.creditCardNumber} onChange={this.handleChange} />
        <br />
        <br />
        <h3>Expiration Date:</h3>
        <input type="text" name="expiredDate" value={this.state.expiredDate} onChange={this.handleChange} />
        <br />
        <br />
        <h3>CVV:</h3>
        <input type="text" name="CVV" value={this.state.CVV} onChange={this.handleChange} />
        <br />
        <br />
        <h3>Billing Zip Code:</h3>
        <input type="text" name="creditCardZipCode" value={this.state.creditCardZipCode} onChange={this.handleChange} />
      </form>
    }


    return (
      <div>
        <h1>Checkout</h1>
        <p>Step {this.state.step}</p>

        {formStep}
        <br />
        {this.state.step >= 2 && this.state.step < 4 && <button onClick={this.previous}>Previous</button>}
        {this.state.step >= 2 && this.state.step < 4 && <button onClick={this.next}>Next</button>}
        {this.state.step === 4 && <button onClick={this.handleSubmit}>Purchase</button>}
      </div >
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))