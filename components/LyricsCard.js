import propTypes from "prop-types";

const LyricsCard = (props) => {
    return (
        <div className="card">
            <div className="lyrics-song-bg">
                <img className={"lyrics-image"} src={'https://i.ytimg.com/vi/mIYXf2RlQbk/maxresdefault.jpg'}/>
            </div>
            <div className="card-body">
                <img className={"shadow p-3 mb-5 bg-white rounded image-song-card"}
                     src={'https://placehold.it/256x256'}/>

                <div className="d-block lyric-container d-md-flex">
                    <div className="p-2 flex-1">

                        <h2 className="pb-3 font-weight-bold">ИМЕ НА ПЕСЕН</h2>
                        <p className={"lyrics"}>
                                <span>
                                        Това не е нормално
                                        не зная какво правя
                                        искам да изляза , <br/>
                                        всичко от главата ми да кажа,<br/>
                                        сутрин не ми се става<br/>
                                        вечер не ми се ляга<br/>
                                        като гледам скоро бате май няма да се оправя<br/>
                                        не мисли че ще се справя<br/>
                                        не зная, какво се случва<br/>
                                        опитвам се някак да се науча<br/>
                                        но не мога да намеря ключа<br/>
                                        от тая шибана депресия да се отчупа<br/>
                                        и отново добрия аз да пусна<br/>
                                        отново с истиска усмивка аз да лъсна<br/>
                                        направо от себе си доста ми втръсна<br/>
                                        Ма не става бе, пробвах всякви начини<br/>
                                        Главата ми е пълна с шибана демони<br/>
                                        и няма да стане просто така<br/>
                                        искат да се предам и<br/>
                                        да ми хванат слабоста<br/>
                                        да здрав съм<br/>
                                        ма вътрешно кървя<br/>
                                        и зная точно, по кой път вървя.<br/>



                                        И няма как да се прадаам сега.<br/>
                                        Искам отново да усетя всички неща.<br/>
                                        Да оставя шибана следа.<br/>
                                </span>
                        </p>

                    </div>
                    <div className="p-2 flex-1"></div>
                    <div className="p-3 flex-1">

                        {/*TODO:
                            Линк на изпълнителя
                            Съкратяване на описанието до 250 char..
                            Коригиране на изображението
                            */}
                        <h2 className="pb-3 font-weight-bold">Информация: </h2>
                        <p align="justify">
                            <b>Изпълнител: <span class={"text-muted"}>ИмеИзпълнител</span></b>
                            <br/>
                            <b>Жанр: <span className={"text-muted"}>Име На Жанр</span></b>
                            <br/>
                            <b>Кратко описание: <br/> <span className={"text-muted"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa non, ut? Alias aliquam deleniti distinctio dolor ducimus eius est excepturi impedit, inventore laboriosam molestiae nemo nostrum obcaecati quae veniam voluptate!</span></b>
                        </p>

                    </div>


                </div>

            </div>
        </div>
    )
}

LyricsCard.propTypes = {
    song: propTypes.array.isRequired
}

export default LyricsCard;