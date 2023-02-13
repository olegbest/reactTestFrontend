import 'src/App.scss';

import { Link } from 'react-router-dom';
import { ROUTES_PATHS } from 'src/router/routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link data-testid="admin" to={ROUTES_PATHS.admin.products.index}>
          Admin
        </Link>
      </header>
    </div>
  );
}

export default App;
