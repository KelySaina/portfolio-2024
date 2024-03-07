import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GitRepoComponent.css'

const GitHubRepoComponent = ({ username }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/repos`);
                const reposWithLanguages = await Promise.all(
                    response.data.map(async (repo) => {
                        const languagesResponse = await axios.get(repo.languages_url);
                        const languages = Object.keys(languagesResponse.data);
                        return { ...repo, languages };
                    })
                );
                setRepos(reposWithLanguages);
            } catch (error) {
                console.error('Error fetching GitHub repos:', error);
            }
        };

        fetchRepos();
    }, [username]);

    return (
        <div>
            <h2>GitHub Repositories for {username}</h2>
            <ul className='repos-displayer'>
                {repos.map((repo) => (
                    <li className='repos-item' key={repo.id}>
                        <div className='repo-item'>
                            <strong>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </strong>
                            {repo.description && <p>{repo.description}</p>}
                            <p>Languages: {repo.languages.join(', ')}</p>
                            <p>Size: {repo.size} KB</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubRepoComponent;
