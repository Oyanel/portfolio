import style from "./Landing.module.scss";

export const Landing = () => (
    <main className={style.container}>
        <div className={style.textContainer}>
            <h1 className={style.title}>WELCOME</h1>
            <h2 className={style.subTitle}>This is my website, Feel free to explore.</h2>
        </div>
    </main>
);
