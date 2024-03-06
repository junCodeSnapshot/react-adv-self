import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes
} from 'react-router-dom';

import logo from '../logo.svg';
import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, RegisterFormikPage } from '../03-forms/pages';
import { DynamicForms } from '../03-forms/pages/DynamicForms';

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
            <li>
              <NavLink to="/formik-abstraction" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstraction</NavLink>
            </li>            
            <li>
              <NavLink to="/formik-register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik</NavLink>
            </li>  
            <li>
              <NavLink to="/dynamic-forms" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic Forms</NavLink>
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
          <Route path="/formik-abstraction" element={<FormikAbstraction />}/>
          <Route path="/formik-register" element={<RegisterFormikPage />}/>
          <Route path="/dynamic-forms" element={<DynamicForms />}/>
          <Route path="/*" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}