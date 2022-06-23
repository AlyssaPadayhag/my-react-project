import "./WelcomeBack.css";

  const pStyle = {
    color: "black",
    fontFamily: "Zen Dots, cursive",
  };
  const userName = {
    padding: "2px 4px",
    marginRight: "2px",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "4px",
  };

function WelcomeBack({name="valued customer", adjective="nice"}) {
    return <p style={pStyle}>Welcome back, {adjective} <span style={userName}>{name}</span>!</p>;
  }

  export default WelcomeBack;