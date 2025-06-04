export { removemovie } from "../reducers/movieSlice";
import axois from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const details = await axois.get(`/movie/${id}`);
    const externalid = await axois.get(`/movie/${id}/external_ids`);
    const recommendations = await axois.get(`/movie/${id}/recommendations`);
    const similar = await axois.get(`/movie/${id}/similar`);
    const translations = await axois.get(`/movie/${id}/translations`);
    const videos = await axois.get(`/movie/${id}/videos`);
    const watchproviders = await axois.get(`/movie/${id}/watch/providers`);
    let theulimatedetails = {
      details: details.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map(t => t.english_name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
    };
    dispatch(loadmovie(theulimatedetails));
    console.log(theulimatedetails);
  } catch (error) {
    console.error("Failed to fetch movie details:", error);
  }
};
