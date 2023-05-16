import { Race } from "../../types/race";
import RaceCardCore from "./RaceCardCore";

interface Props {
  race: Race;
}

const RaceCard: React.FC<Props> = ({ race }) => (
  <div className="card w-96 glass shadow-xl">
    <RaceCardCore race={race} />
  </div>
);

export default RaceCard;
