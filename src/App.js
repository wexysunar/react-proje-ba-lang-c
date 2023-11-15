import "./style.css"

function App() {
  return (
    <div className="App">
        {process.env.NODE_ENV === "development" &&(
          <>
          <h3>{process.env.NODE_ENV} Oratmında Çalışıyorsunuz</h3>
          </>
        )}
    </div>
  );
}

export default App;
