import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../store/countriesSlice";
import { initializeCountries } from "../services/countriesServices";
jest.mock("../services/countriesServices");

describe("countriesSlice tests:", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        countries: countriesReducer,
      },
    });
    console.log(store.getState());
  });
  it("initial state exists", () => {
    expect(store.getState().countries).toBeDefined();
  });

  it("contries should countain an initial state with certain properties", () => {
    const { countries, isLoading, search } = store.getState().countries;
    // can also be written like:
    // const countries = store.getState().countries.countries;
    // const isLoading = store.getState().countries.isLoading;
    // const search = store.getState().countries.search;
    //expect countries to be equal to an empty array
    //expect isLoading to be true
    //expect search to be an empty string
    expect(countries).toEqual([]);
    expect(isLoading).toBe(true);
    expect(search).toBe("");
  });

  it("should handle getCountries action inside countriesSlice", () => {
    const countriesPayLoad = [{ name: "Nigeria" }];

    store.dispatch({
      type: "countries/getCountries",
      payload: countriesPayLoad,
    });

    console.log(
      "Countries after payload:",
      store.getState().countries.countries
    );
    expect(store.getState().countries.countries).toEqual(countriesPayLoad);
  });
  
// everything under should be fixed later

  it("Should handle initializeCountries action", async ()=>{
    await store.dispatch(initializeCountries());
   const mockCountries = ["Nigeria", "Ghana"];
   countriesServices
  })
});
