import { Navigation } from "../components/Navigation";
import { Landing } from "../features/Home/Landing/Landing";
import { Me } from "../features/Home/Me/Me";

export default function Home() {
    return (
        <>
            <Navigation />
            <Landing />
            <Me />
        </>
    );
}
