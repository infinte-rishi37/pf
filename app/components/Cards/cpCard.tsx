
import {getRating, getInfo} from "../../services/functions/codeforcesAPI";
import { useState, useEffect } from 'react';
import UserGraph from "../Graphs/userGraph";
import Image from "next/image";
import { Button, TextField } from "@mui/material";

interface Info {
    rank: string;
    handle: string;
    rating: number;
    maxRating: number;
    maxRank: string;
    titlePhoto: string;
}

const CPCard = () => {
    const [username, setUsername] = useState('Rishi_Kumar_Singh');
    const [info, setInfo] = useState({
        rank: '...',
        handle: '...',
        rating: 0,
        maxRating: 0,
        maxRank: '...',
        titlePhoto: '...',
      });
    const [handle, setHandle] = useState({});

    useEffect(() => {
        getRating(username)
          .then((result) => setHandle(result))
          .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        getInfo(username)
          .then((result) => setInfo(result as Info))
          .catch((error) => console.error("Error fetching data:", error));
    }, []);
    console.log(info);

    const getColor = (rating: number) => {
        if (rating >= 3000) {
          return '#a00';
        } else if (rating >= 2600) {
          return '#f33';
        } else if (rating >= 2400) {
          return '#f77';
        } else if (rating >= 2300) {
          return '#ffbb55';
        } else if (rating >= 2100) {
          return '#ffcc88';
        } else if (rating >= 1900) {
          return '#f8f';
        } else if (rating >= 1600) {
          return '#aaf';
        } else if (rating >= 1400) {
          return '#77ddbb';
        } else if (rating >= 1200) {
          return '#7f7';
        } else {
          return '#ccc';
        }
      };      

    return (
        <main className='bg-pall-dl bg-opacity-25 p-6 m-2'>
            <h1 className="text-h3 flex justify-between pb-8">
                <div>
                    Codeforces : {username}
                </div>
                <div className="flex gap-4">
                    <TextField 
                        id="standard-basic" label="Username" variant="standard" 
                        size="small"
                        placeholder="Enter Username"
                        value={username}
                        color="success"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button 
                        variant="contained"
                        onClick={() => {
                            getRating(username)
                            .then((result) => setHandle(result))
                            .catch((error) => console.error("Error fetching data:", error));
                            getInfo(username)
                            .then((result) => setInfo(result as Info))
                            .catch((error) => console.error("Error fetching data:", error));
                    }}>Check Your</Button>
                </div>
            </h1>
            <div>
                <div className="text-text">
                    {/* User data */}
                </div>  
                <div className="flex justify-between">
                    <div>
                        <div style={{ color: getColor(info.rating) }}>
                            {info.rank.charAt(0).toUpperCase() + info.rank.slice(1)} <br />
                            {info.handle} {info.rating} <br />
                        </div>
                        <div style={{ color: getColor(info.maxRating), fontWeight: 'bold' }}>
                            &#9733; {info.maxRating} {info.maxRank.charAt(0).toUpperCase() + info.maxRank.slice(1)} 
                        </div>
                    </div>
                    <img
                        src={info.titlePhoto}
                        alt="Profile"
                        height={400}
                        className="rounded-full"
                    />
                </div>

                <div className="text-text">
                    {/* User Contests */}
                </div>
                {/* {console.log(handle)} */}
                <UserGraph data={handle}></UserGraph>
            </div>
        </main>
    );
}  

export default CPCard;