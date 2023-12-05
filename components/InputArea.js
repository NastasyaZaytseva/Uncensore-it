const InputArea = ({ inputText, onInputChange, onSubmit }) => {
    return (
      <div className="input-area">
        <textarea
          value={inputText}
          onChange={onInputChange}
          placeholder="START TYPING HERE..."
          className="textarea"
        />
        <button onClick={onSubmit} className="button">
          PRESS TO UNCENSOR IT
        </button>
      </div>
    );
  };
  
  export default InputArea;
  