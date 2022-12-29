const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button buttonText="Like" className="button1" />
      <Button buttonText="Comment" className="button2" />
      <Button buttonText="Share" className="button3" />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
