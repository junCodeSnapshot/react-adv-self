import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes
} from 'react-router-dom';

import logo from '../logo.svg';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/formik-basic" element={<FormikBasicPage />}/>
          <Route path="/formik-yup" element={ <FormikYupPage />}/>
          <Route path="/Register" element={<RegisterPage />}/>
          <Route path="/formik-components" element={<FormikComponents />}/>
          <Route path="/*" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}