import React from "react";

const SeasonSwitcher = ({ handleSeasonChange, selectedSeason, seasons }) => {
  return (
    <select
      className="bg-[#1A161E] text-[#4C4158] p-4"
      onChange={handleSeasonChange}
      value={selectedSeason}
    >
      {seasons.map((season) => (
        <option key={season} value={season}>
          Season {season}
        </option>
      ))}
    </select>
  );
};

export default SeasonSwitcher;
