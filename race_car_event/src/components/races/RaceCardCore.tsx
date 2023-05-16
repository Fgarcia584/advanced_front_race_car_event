import { Link } from "react-router-dom";
import { Race } from "../../types/race";

interface Props {
  race: Race;
}

const RaceCardCore: React.FC<Props> = ({ race }) => (
  <>
    <figure>
      <img src="https://loremflickr.com/g/320/240/car" alt="Race Car" />
    </figure>
    <div className="card-body bg-secondary-content text-white">
      <h2 className="card-title">{race.name}</h2>
      <p>{race.description.slice(0,30)}</p>
      <p>{race.date}</p>
      <div className="card-actions justify-end">
        <Link to= {`/races/${race.id}`} className="btn btn-primary"> En savoir plus </Link>
      </div>
    </div>
  </>
);

export default RaceCardCore;