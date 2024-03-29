import { Landing } from "../features/Home/Landing/Landing";
import { Me } from "../features/Home/Me/Me";
import { DevGround } from "../features/Home/DevGround/DevGround";
import { More } from "../features/Home/More/More";

export default function Home() {
    return (
        <>
            <Landing />
            <Me />
            <DevGround />
            <More />
        </>
    );
}
