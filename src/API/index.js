import Chance from "chance";

const chance = Chance();

export const fakeData = () => {
  console.log("fake data", chance.name({ middle_initial: true }));
  return chance.name({ middle_initial: true });
};

// fakeData()
