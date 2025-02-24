import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FootballData = () => {
  // State for storing fetched data
  const [teams, setTeams] = useState([]);
  
  // State to store selected league
  const [leagueId, setLeagueId] = useState(1); // Default to league 1, for example

  // Fetch football data whenever the leagueId changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with actual API URL and include the leagueId parameter
        const response = await axios.get(`https://api.football-data.org/v4/competitions/${leagueId}/teams`, {
          headers: {
            'X-Auth-Token': 'YOUR_API_KEY' // Replace with your actual API key
          }
        });

        // Store the fetched teams in state
        setTeams(response.data.teams);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [leagueId]); // Re-fetch when leagueId changes

  return (
    <div>
      <h1>Football Teams</h1>

      {/* Dropdown to select a league */}
      <select onChange={(e) => setLeagueId(e.target.value)} value={leagueId}>
        <option value={1}>League 1</option>
        <option value={2}>League 2</option>
        {/* Add more options based on available leagues */}
      </select>

      {/* Display the fetched teams */}
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FootballData;
