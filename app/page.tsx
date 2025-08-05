import { Landing } from "@/features/Home/Landing/Landing";
import { Me } from "@/features/Home/Me/Me";
import { CodeGround } from "@/features/Home/CodeGround/CodeGround";
import { More } from "@/features/Home/More/More";
import { Popup } from "@/features/Home/Popup/Popup";

export default function Home() {
    return (
        <>
            <Landing />
            <Me />
            <CodeGround />
            <More />
            <Popup />
        </>
    );
}
