import { h, Component } from "preact";
import { calculateBMI, calculateMBMI } from "./calculateBMI";
/** @jsx h */

export class Kalkulacka extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "m",
      years: 7,
      months: 0,
      height: 124,
      weight: 24,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const cls = event.target.className;
    const val = event.target.value;

    if (cls.includes("calc-gender-button")) {
      this.setState({ gender: event.target.value });
    } else if (cls.includes("calc-year-input")) {
      this.setState({ years: val });
    } else if (cls.includes("calc-month-input")) {
      this.setState({ months: val });
    } else if (cls.includes("calc-height-input")) {
      this.setState({ height: val });
    } else if (cls.includes("calc-weight-input")) {
      this.setState({ weight: val });
    }
  }

  render() {
    const {
      gender, years, months, height, weight,
    } = this.state;
    const age = Number(years) + months / 12;
    const bmi = calculateBMI(gender, age, height, weight);
    const mbmi = calculateMBMI(height, weight);

    const displayMBMI = String(Math.round(mbmi * 100) / 100).replace(".", ",");
    const displayBMI = () => {
      if (bmi === 0) return "podváha";
      if (bmi === 1) return "normální hmotnost";
      if (bmi === 2) return "nadváha";
      if (bmi === 3) return "obezita";
      return "chyba!";
    };

    return (
      <div>
        <div className="calc-title">Kalkulačka dětské nadváhy</div>
        <div className="calc-gender-buttons">
          <button type="button" className={`calc-gender-button btn ${(gender === "m" ? "btn-primary" : "btn-nonsel")}`} value="m" onClick={this.handleInput}>Chlapec</button>
          <button type="button" className={`calc-gender-button btn ${(gender === "f" ? "btn-primary" : "btn-nonsel")}`} value="f" onClick={this.handleInput}>Dívka</button>
        </div>
        <div className="calc-content">
          <div>
            <label htmlFor="vek">Věk (od 5 do 19 let)</label>
            <br />
            <input className="calc-year-input" type="number" min="5" max="19" step="1" value={years} onChange={this.handleInput} />
            {" let"}
            <input className="calc-month-input" type="number" min="0" max="11" step="1" value={months} onChange={this.handleInput} />
            {" měsíců"}
          </div>
          <div>
            <label htmlFor="vyska">Výška</label>
            <br />
            <input className="calc-height-input" type="number" min="0" max="230" value={height} onChange={this.handleInput} />
            {" cm"}
          </div>
          <div>
            <label htmlFor="vaha">Váha</label>
            <br />
            <input className="calc-weight-input" type="number" min="0" max="160" value={weight} onChange={this.handleInput} />
            {" kg"}
          </div>
        </div>
        <div className="calc-result">
          {(mbmi > 0 && mbmi < Infinity)
            ? (
              <div>
                {"BMI "}
                <span className="bold">{displayMBMI}</span>
                {", to je u vybraného pohlaví a věku "}
                <span className="bold">{displayBMI()}</span>
                {"."}
              </div>
            ) : "Neplatný vstup!"}
        </div>
      </div>
    );
  }
}

export default Kalkulacka;
