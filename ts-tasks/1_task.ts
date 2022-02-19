const houses: House[] = [
  { name: 'Atreides', planets: 'Calladan' },
  { name: 'Corrino', planets: ['Kaitan', 'Salusa Secundus'] },
  { name: 'Harkonnen', planets: ['Giedi Prime', 'Arrakis'] },
];

interface House {
  name: string;
  planets: Array<string> | string;
}

interface HouseWithID extends House {
  id?: number;
}

const findHouses = (
    houses: string | House[],
    filter?: (house: House) => boolean
  ): any => {

  const parseFromString = (arr: string | House[]) =>
    (!Array.isArray(houses) && typeof arr === 'string') ? JSON.parse(arr) : arr;  

  const validHouses: HouseWithID[] = parseFromString(houses);

  const housesWithId: HouseWithID[] = validHouses.reduce((acc: HouseWithID[], user: House, id: number) => {
    acc.push({...user, id});
    return acc;
  }, []);

  if (!filter) return housesWithId;

  const filteredHouse: HouseWithID[] = housesWithId.reduce((acc: HouseWithID[], house: HouseWithID) => {
    if (filter(house)) {
      acc.push(house);
    }
    return acc;
  }, []);

  return filteredHouse;
};

console.log( findHouses(JSON.stringify(houses)))
console.log( findHouses(houses) );
console.log( findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides") );
console.log( findHouses(houses, ({ name }) => name === "Harkonnen") );
console.log( findHouses(houses, ({ planets }) => planets[0] === "Kaitan") );
