import GameItem from "../../molecules/GameItem"

export default function FeatureGame() {
    return (
        <section className="featured-game pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br/> Games This Year
                </h2>
                <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                    data-aos="fade-up">
                    <GameItem thumbnail="/img/Thumbnail-1.png" title="Super Mechs" typeGame="Mobile"/>
                    <GameItem thumbnail="/img/Thumbnail-2.png" title="all of Duty: Modern" typeGame="Mobile"/>
                    <GameItem thumbnail="/img/Thumbnail-3.png" title="Mobile Legends" typeGame="Mobile"/>
                    <GameItem thumbnail="/img/Thumbnail-4.png" title="Clash of Clans" typeGame="Mobile"/>
                    <GameItem thumbnail="/img/Thumbnail-5.png" title="Valorant" typeGame="Dekstop"/>
                </div>
            </div>
        </section>
    )
}