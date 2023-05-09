import { Race } from "../Types/race";

interface Props {
    race : Race;
}

const RaceCard: React.FC<Props> = ({ race }) => (
  <div className="card w-96 glass shadow-xl">
    <figure>
      <img
        src="https://loremflickr.com/g/320/240/car"
        alt="Race Car"
      />
    </figure>
    <div className="card-body bg-secondary-content ">
      <h2 className="card-title">{race.name}</h2>
      <p>{race.description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
);

export default RaceCard;