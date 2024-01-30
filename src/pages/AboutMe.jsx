import * as React from 'react';
// import { makeStyles } from '@mui/styles';
import myPic from "../assets/images/myPic.jpg";

// const useStyles = makeStyles(() => ({
//     image: {
//         width: '100%',
//         maxWidth: '300px',
//         height: 'auto',
//         maxHeight: '400px',
//         borderRadius: '50%',
//         objectFit: 'cover',
//         // alignItems: 'flex-end',
//     },
// }));

export default function AboutMe() {
    // const classes = useStyles();
    return (
        <div>
            <img
                src={myPic}
                alt="my pic"
                className="about-image"
                // className={classes.image}
            />
            <h2>About Me</h2>
            <p>
                My name is Cara Rosa. I am a sophomore in college. Currently, I am enrolled in the University of Austin Full Stack Web Development Bootcamp. In high school, I took three computer classes: Computer Skills, Graphic & Web Design, and Computer Science. I was introduced to HTML, CSS, Python, and JavaScript. Using these languages, I was able to build simple webpages and an alien invasion game. I truly enjoyed making these websites by myself or in group projects. Group projects were great resources that taught me a great deal about the importance of collaboration with others. Organization and clear communication about the project were tools that I was able to observe and learn. It was key to have a consolidated plan that would guide the group succinctly. Assigned roles and expectations needed to be communicated in order for the group project to reach a successful closure. Being part of a group project or even leading one has allowed me to observe and understand the importance of working together in this industry. I look forward to honing my skills further and developing a deeper understanding of the coding world.
            </p>
        </div>
    );
}
