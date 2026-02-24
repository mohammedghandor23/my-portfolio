import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import meImage from "../../assets/me.png";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.08),transparent_54%)]" />

            <div className="relative z-10 site-container flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 max-lg:mt-36">
                <div className="w-full lg:flex-1">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4"
                        >
                            {t("hero.name.first")}{" "}
                            <span className="gradient-text">{t("hero.name.last")}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg md:text-xl text-text-secondary font-light mb-3"
                        >
                            {t("hero.role.flutter")}{" "}
                            <span className="text-white/20">|</span>{" "}
                            {t("hero.role.engineer")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="w-full max-w-2xl mb-8"
                        >
                            <div>
                                <p className="text-text-secondary leading-relaxed text-base md:text-lg font-light">
                                    {t("hero.bio.educationPrefix")}{" "}
                                    <span className="text-white font-medium">
                                        {t("hero.bio.educationHighlight")}
                                    </span>{" "}
                                    {t("hero.bio.educationSuffix")}
                                </p>
                                <p className="text-text-secondary leading-relaxed text-base md:text-lg font-light mt-4">
                                    {t("hero.bio.rankPrefix")}{" "}
                                    <span className="gradient-text font-semibold">
                                        {t("hero.bio.rankHighlight")}
                                    </span>{" "}
                                    {t("hero.bio.rankMiddle")}{" "}
                                    <span className="text-white font-medium">
                                        {t("hero.bio.rankSolved")}
                                    </span>{" "}
                                    {t("hero.bio.rankSuffix")}
                                </p>
                                <p className="text-text-secondary leading-relaxed text-base md:text-lg font-light mt-4">
                                    {t("hero.bio.experiencePrefix")}{" "}
                                    <span className="text-white font-medium">
                                        {t("hero.bio.experienceHighlight")}
                                    </span>{" "}
                                    {t("hero.bio.experienceSuffix")}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector("#projects")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                className="px-8 py-3.5 bg-gradient-accent rounded-xl text-white font-medium text-sm hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                {t("hero.cta.work")}
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector("#contact")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                className="px-8 py-3.5 rounded-xl text-text-secondary font-medium text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                            >
                                {t("hero.cta.contact")}
                            </a>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                    className="w-full lg:flex-1 flex justify-center lg:justify-end"
                >
                    <motion.img
                        src={meImage}
                        alt={`${t("hero.name.first")} ${t("hero.name.last")}`}
                        animate={{ y: [0, -10, 0], rotate: [0, 0.6, 0, -0.6, 0] }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-[240px] sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[500px] max-w-full aspect-square object-cover rounded-full transition-all duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
}
