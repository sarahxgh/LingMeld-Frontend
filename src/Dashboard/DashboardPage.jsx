import React, { useEffect, useState } from "react"; 
import CommitmentCard from "./CommitmentCard"; 
import TotalProgressCard from "./TotalProgressCard";
import ProgressCard from "./ProgressCard";
import ProjectCard from './ProjectCard';
import VideoCard from './VideoCard'; // Import the new VideoCard component
import axios from "axios";

export default function DashboardPage() {
    const [videos, setVideos] = useState([]);
    const API_KEY = "AIzaSyASBilStNKzIsd5cljl9QU8kaXhr5CT6EY"; // Replace with your API key
    const SEARCH_QUERIES = [
        "translation studies",
        "translation theory",
        "translation from english to arabic",
        "translation from arabic to english"
    ]; // Updated search queries in an array

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videoData = [];
                // Randomly select a query each time the component mounts
                const randomQuery = SEARCH_QUERIES[Math.floor(Math.random() * SEARCH_QUERIES.length)];
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search`,
                    {
                        params: {
                            part: "snippet",
                            q: randomQuery,
                            type: "video",
                            maxResults: 5, // Display max 5 videos
                            key: API_KEY,
                        },
                    }
                );
                // Map response data to extract relevant video details
                const queryVideos = response.data.items.map((item) => ({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                    thumbnail: item.snippet.thumbnails.default.url, // Get thumbnail URL
                }));
                videoData.push(...queryVideos);
                setVideos(videoData);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, []); // Run once on component mount

    const projects = [
        { id: 1, image: 'translation.png', title: 'Gramatical TOS 1', description: 'An introduction to grammatical structures.' },
        { id: 2, image: 'translation.png', title: 'Linguistic Models of the Process of Translation', description: 'Exploring various linguistic models.' },
        { id: 3, image: 'translation.png', title: 'The Analysis of Translation as Text', description: 'Analyzing translation through text.' },
        { id: 4, image: 'translation.png', title: 'The Teaching of Translation', description: 'Methods and practices in teaching translation.' },
    ];

    return (
        <div className="mt-8 space-y-8 w-full">
            {/* Title for Courses Section */}
            <section className="flex flex-wrap gap-6 items-start w-full">
                <CommitmentCard />
                <ProgressCard value={100} />
                <TotalProgressCard />
            </section>

            <h2 className="text-2xl font-bold text-black mb-4 mt-4 pt-4 pb-4 text-left">Courses</h2>

            {/* Projects Section */}
            <section className="flex flex-wrap gap-8 items-center w-full">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </section>

            {/* Videos for You Section */}
            <h2 className="text-2xl font-bold text-black mb-4 mt-8 pt-4 pb-4 text-left">Videos for You</h2>
            <section className="flex flex-wrap gap-4">
                {videos.length > 0 ? (
                    videos.map((video) => (
                        <VideoCard key={video.id} {...video} />
                    ))
                ) : (
                    <p>Loading videos...</p>
                )}
            </section>
        </div>
    );
}
