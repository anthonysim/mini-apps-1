class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.onbSubmit = this.onbSubmit.bind(this);
  }

  changeHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  onbSubmit(e) {
    e.preventDefault();
    const { name, email, password, address1, address2, city, state, zipCode, phoneNumber, creditCardNumber, expiredDate, CVV, creditCardZipCode } = this.state;
  }

  render() {
    console.log(this.state.step)
    let formStep;

    if (this.state.step === 1) {
      formStep = <button>Checkout</button>
    } else if (this.state.step === 2) {
      formStep = <input type="text" value="name" />
    }


    return (
      <div>
        <h1>Checkout</h1>
        <p>Step {this.state.step}</p>

        {formStep}
      </div >
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))