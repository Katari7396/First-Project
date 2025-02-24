import React, { useState, useEffect } from "react";
import './football.css'
 
const Football = () => {
  const [leagueId, setLeagueId] = useState("5");
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      setError("");
 
      try {
        const response = await fetch(
          `https://v3.football.api-sports.io/teams?league=${leagueId}&season=2023`,
          {
            headers: {
              "x-rapidapi-key": "f714b0fe181f2c063de5e2cce7bc7586",
              "x-rapidapi-host": "v3.football.api-sports.io",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();

        setTeams(data.response || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
 
    fetchTeams();
  }, [leagueId]);
 
  return (
  <div>
    <h1>Football Teams</h1>
      <select
        id="league-select"
        value={leagueId} onChange={(e) => setLeagueId(e.target.value)}>
          <option value="3">Premier League</option>
          <option value="14">La Liga</option>
          <option value="7">Bundesliga</option>
          <option value="13">Serie A</option>
          <option value="65">Ligue 1</option>
      </select>
      {loading && <p>Loading...</p>}
 
      {error && <p style={{ color: "red" }}>{error}</p>}
 
      {!loading && !error && (
        <ul>
          {teams.map((team) => (
            <li key={team.team.id}>{team.team.name}</li>
          ))}
        </ul>
      )}
</div>
  );
};
 
export default Football;
