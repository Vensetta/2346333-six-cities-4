import './spinner.css';


export function Spinner(): JSX.Element {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading ...</p>
    </div>
  );
}
