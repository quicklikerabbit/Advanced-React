function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.foods);
    }, 2000);
  });
};

describe("Mocking Learning", () => {
  it("mocks a reg function", () => {
    const fetchDogs = jest.fn();
    fetchDogs("snickers");
    expect(fetchDogs).toHaveBeenCalled();
    fetchDogs("hugo");
    expect(fetchDogs).toHaveBeenCalledWith("snickers");
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });

  it("can create a person", () => {
    const me = new Person("Steve", ["pizza", "burgs"]);
    expect(me.name).toBe("Steve");
  });
  it("can fetch foods", async () => {
    const me = new Person("Steve", ["pizza", "burgs"]);
    me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'pizza']);
    const favFoods = await me.fetchFavFoods();
    expect(favFoods).toContain("pizza");
  });
});
