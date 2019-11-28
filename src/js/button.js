import "../css/btn.css";

const makeButton = buttonName => {
    const buttonLabel = `Button: ${buttonName}`;

    const btn = document.createElement("button");
    btn.innerText = buttonLabel;

    return btn;
};

export default makeButton;
