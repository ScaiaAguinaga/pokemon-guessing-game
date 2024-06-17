// Image imports
import bug from '../images/bug.svg';
import dark from '../images/dark.svg';
import dragon from '../images/dragon.svg';
import electric from '../images/electric.svg';
import fairy from '../images/fairy.svg';
import fighting from '../images/fighting.svg';
import fire from '../images/fire.svg';
import flying from '../images/flying.svg';
import ghost from '../images/ghost.svg';
import grass from '../images/grass.svg';
import ground from '../images/ground.svg';
import ice from '../images/ice.svg';
import normal from '../images/normal.svg';
import poison from '../images/poison.svg';
import psychic from '../images/psychic.svg';
import rock from '../images/rock.svg';
import steel from '../images/steel.svg';
import water from '../images/water.svg';

const imagePaths = {
  bug: bug,
  dark: dark,
  dragon: dragon,
  electric: electric,
  fairy: fairy,
  fighting: fighting,
  fire: fire,
  flying: flying,
  ghost: ghost,
  grass: grass,
  ground: ground,
  ice: ice,
  normal: normal,
  poison: poison,
  psychic: psychic,
  rock: rock,
  steel: steel,
  water: water,
};

function TypeButton({ typeName, onClick }) {
  return (
    <>
      <button onClick={onClick} className={`flex rounded-[20px] p-2 bg-${typeName} text-${typeName}`}>
        <div className="grid grid-cols-4">
          <img src={imagePaths[typeName]} alt={typeName} className="h-10 w-10" />
          <p className="col-span-3 flex items-center justify-center text-2xl text-white font-bold">{typeName}</p>
        </div>
      </button>
    </>
  );
}

export default TypeButton;
