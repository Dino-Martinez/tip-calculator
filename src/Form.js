import react, {Component} from 'react';

class Form extends Component{
  constructor(props) {
     super(props)
     this.state = { value: 'Tip Calculator', bill: 0, tip: 0, split: 1, totalBill: 0, totalTip: 0, totalPerPerson: 0}
     this.changeBill = this.changeBill.bind(this);
     this.changeTip = this.changeTip.bind(this);
     this.changeSplit = this.changeSplit.bind(this);
     this.update = this.update.bind(this);
   }

   changeBill(event) {
     this.setState({bill: event.target.value}, this.update);
   }

   changeTip(event) {
     this.setState({tip: event.target.value}, this.update);
   }

   changeSplit(event) {
     this.setState({split: event.target.value}, this.update);
   }

   update() {
     let bill = this.state.bill;
     let tip = 1 + (this.state.tip / 100);
     let total = bill * tip;
     let totalTip = total - bill;
     let totalPerPerson = total / this.state.split;
     this.setState({totalBill: total, totalTip: totalTip, totalPerPerson: totalPerPerson});
   }

  render() {
    return (
      <form>
        <h1>{this.state.value}</h1>

        <h1>Bill:</h1>
        <input
          type="number"
          value={this.state.bill}
          onChange={this.changeBill}
        />

        <h1>Tip%:</h1>
        <input
          type="number"
          value={this.state.tip}
          onChange={this.changeTip}
        />

        <h1>Split:</h1>
        <input
          type="number"
          value={this.state.split}
          onChange={this.changeSplit}
        />

        <h1>Total Bill: ${this.state.totalBill}</h1>
        <h1>Total Tip: ${this.state.totalTip}</h1>
        <h1>Total Per Person: ${this.state.totalPerPerson}</h1>
      </form>
    );
  }
}

export default Form;
