export { removetv } from "../reducers/tvSlice";
import axois from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const details = await axois.get(`/tv/${id}`);
    const externalid = await axois.get(`/tv/${id}/external_ids`);
    const recommendations = await axois.get(`/tv/${id}/recommendations`);
    const similar = await axois.get(`/tv/${id}/similar`);
    const translations = await axois.get(`/tv/${id}/translations`);
    const videos = await axois.get(`/tv/${id}/videos`);
    const watchproviders = await axois.get(`/tv/${id}/watch/providers`);
    let theulimatedetails = {
      details: details.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map(t => t.english_name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
    };
    dispatch(loadtv(theulimatedetails));
    // console.log(theulimatedetails);
  } catch (error) {
    console.error("Failed to fetch tv details:", error);
  }
};
