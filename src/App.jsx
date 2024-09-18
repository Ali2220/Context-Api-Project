import './App.css';
import ThemeBtn from './Components/ThemeBtn';
import { ThemeProvider } from './Context/theme';
import { useState, useEffect } from 'react';
import Card from './Components/Card';
import LoginBtn from './Components/LoginBtn';
import { LoginContext } from './Context/LoginContext';
import LoginForm from './Components/LoginForm';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const [username, setUsername] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  const LightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, LightTheme }}>
      {/* Make sure to pass value prop properly */}
      <LoginContext.Provider value={{ username, setUsername, showLoginForm, setShowLoginForm }}>
        <LoginBtn />
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>

        {/* Toggle login form */}
        {showLoginForm && <LoginForm username={username} setUsername={setUsername} />}
      </LoginContext.Provider>
    </ThemeProvider>
  );
}

export default App;
