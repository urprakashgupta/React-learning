import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>This is about section</h1>
            <User name = {"Prakash gupta(function)"}/>
            <UserClass name = {"Prakash kumar(classes)"} location = {"dehradun delhi (class)"} />
        </div>
    )
};

export default About;