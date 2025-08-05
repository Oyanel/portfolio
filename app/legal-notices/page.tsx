import style from "./LegalNotices.module.scss";
import { HACKING_COOKIE_NAME } from "@/features/Hacking/constant";

export default function LegalNotices() {
    return (
        <div className={style.legalNoticesRoot}>
            <h1 className={style.title}>Legal Notices</h1>
            <div className={style.content}>
                <section className={style.section}>
                    <h2 className={style.header}>Cookie policy</h2>
                    <p className={style.text}>
                        This website uses cookies to improve your user experience. Cookies are small text files stored
                        on your device that help us remember your preferences and tailor content to your interests.
                    </p>
                    <p className={style.text}>We only use essential cookies (necessary for the website to function).</p>
                    <p className={style.text}>
                        Because we feel like it, and you made an effort to come here, here is the list of cookies we
                        use:
                    </p>
                    <ul className={style.list}>
                        <li className={style.text}>
                            {HACKING_COOKIE_NAME} - A Tag to remember the user triggered the hacking popup
                        </li>
                    </ul>
                </section>
                <section className={style.section}>
                    <h2 className={style.header}>Company/Website Information</h2>
                    <div className={style.list}>
                        <p className={style.text}>
                            <strong>Website Owner:</strong> Therence BRUNE IE
                        </p>
                        <p className={style.text}>
                            <strong>Contact:</strong> Therence BRUNE
                        </p>
                        <p className={style.text}>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:therence.brune@gmail.com">therence.brune@gmail.com</a>
                        </p>
                        <p className={style.text}>
                            <strong>Siret number: </strong>97908396100016
                        </p>
                        <p className={style.text}>
                            <strong>Website host: </strong>HOSTINGER
                        </p>
                        <p className={style.text}>
                            <strong>Website host address: </strong>61 Lordou Vironos str., 6023 Larnaca, Cyprus.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
