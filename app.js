class App {
	constructor(props) {
		this.el = document.querySelector("#root");
		this.state = {
			cards: ["nico", "kev", "mouloud"],
			selectedIndex: 2,
		};
		this.props = {
			...props,
		};
	}

	setState = (newState) => {
		this.state = {
			...this.state,
			...newState,
		};
		this.el.innerHTML = "";
		this.render();
	};

	handleClick = () => {
		console.log("state before", this.state);
		// this.state.selectedIndex = 0;
		this.setState({
			selectedIndex: 0,
		});
		console.log("state after", this.state);
	};

	render() {
		this.el.innerHTML = `
      <h1>Bienvenue sur ${this.props.name}</h1>
      ${this.state.cards.map((card, idx) => {
				const cardClass = this.state.selectedIndex === idx ? "active" : "";

				return `<div class='card ${cardClass}'>${card}</div>`;
			})}
      <button id="btn">Click</button>
    `;

		document.getElementById("btn").addEventListener("click", this.handleClick);
	}
}

const myApp = new App({
	name: "Ma super app",
});
myApp.render();
