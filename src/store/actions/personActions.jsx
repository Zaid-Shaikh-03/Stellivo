export { removeperson } from "../reducers/personSlice";
import axois from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const details = await axois.get(`/person/${id}`);
    const externalid = await axois.get(`/person/${id}/external_ids`);
    const combinedCredits = await axois.get(`/person/${id}/combined_credits`);
    const tvCredits = await axois.get(`/person/${id}/tv_credits`);
    const movieCredits = await axois.get(`/person/${id}/movie_credits`);
    let theulimatedetails = {
      details: details.data,
      externalid: externalid.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };
    dispatch(loadperson(theulimatedetails));
    // console.log(theulimatedetails);
  } catch (error) {
    console.error("Failed to fetch person details:", error);
  }
};
