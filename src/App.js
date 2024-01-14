import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './Context/AuthContext';
import Dashboard from './Components/Dashboard.jsx';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Dashboard> </Dashboard>
      </AuthProvider>
    </div>
  );
}

export default App;
