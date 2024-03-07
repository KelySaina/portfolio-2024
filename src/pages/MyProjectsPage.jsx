import * as React from 'react'
import GitHubRepoComponent from '../components/GitRepoComponent'
import AppBarComponent from '../components/AppBarComponent'
import './MyProjectsPage.css'

const MyProjectsPage = () => {
    return (
        <>
            <AppBarComponent />
            <div className='project-content'>
                <GitHubRepoComponent username={"KelySaina"} />
            </div>
        </>
    )
}

export default MyProjectsPage