import Card from "../Card/Card"
import "./Cards.scss"
// import { advisors } from './data';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvisors } from '../../redux/actions/actions';
import { useEffect } from 'react';

const Cards = () => {
  const dispatch = useDispatch();
  const advisors = useSelector(state => state.advisors);

  useEffect(() => {
    dispatch(getAdvisors())
  }, [dispatch])

  return (

    <div className="containerPrincipal">
      <div className="containeMessage">
        <h1>Our Advisors</h1>
        <br></br>
        <p>Let's join our best classes with one advisor.</p>
      </div>
      <div className="container">
        {advisors?.map((advisor) => {
          return <Card
            key={advisor.id}
            id={advisor.id}
            Image={advisor.Image}
            Firstname={advisor.Firstname + ' ' +
             advisor.Lastname}
            TechSkills={advisor.TechSkills}
            Specialty={advisor.Specialty}
            Score={advisor.Score}
          />
        })}
      </div>

    </div>
  )
}

export default Cards;