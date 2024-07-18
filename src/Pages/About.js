import React from 'react'
import { NavLink, Routes, Route, Outlet } from 'react-router-dom'
import History from './About/History';
import Team from './About/Team';
import Values from './About/Values';

const AboutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="history" element={<History />} />
      <Route path="team" element={<Team />} />
      <Route path="values" element={<Values />} />
    </Routes>
  );
}

const About = () => {
  return (
    <div className="about">
      <form className='container'>
      <h1>About Us</h1>
        <p>
          Dinisuru Motors is a premier vehicle dealership company that offers a wide range of cars and
          and Exotic vehicles. Our mission is to provide high-quality vehicles at competitive prices, ensuring
          customer satisfaction and trust. We have a dedicated team of professionals who are always
          ready to assist you in finding the perfect vehicle that meets your needs and preferences.
        </p>
        <nav>
        <ul>
          <li>
            <NavLink to="history" activeClassName="active">History</NavLink>
          </li>
          <li>
            <NavLink to="team" activeClassName="active">Team</NavLink>
          </li>
          <li>
            <NavLink to="values" activeClassName="active">Values</NavLink>
          </li>
        </ul>
      </nav>
      </form> 
      <Outlet />
    </div>
  );
};

export { AboutRoutes };
export default About;