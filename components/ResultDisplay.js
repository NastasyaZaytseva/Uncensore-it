const ResultDisplay = ({ modifiedText }) => {
    return (
      modifiedText && (
        <div className="modified-text-result">
          <span>{modifiedText}</span>
        </div>
      )
    );
  };
  
  export default ResultDisplay;
  