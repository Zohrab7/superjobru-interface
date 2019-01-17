import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquare} from '@fortawesome/free-regular-svg-icons';
import {faCheck, faSearch} from '@fortawesome/free-solid-svg-icons'
import "./index.scss";
import {Card} from "../../components/Card";
import Modal from "../../components/Modal";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "none"
        }
    }

    windowPopUp = () => this.state.display === "none" ? this.setState({display: "block"}) : this.setState({display: "none"});

    render() {
        return (
            [<section className="List-projects" key="1">
                <header className="List-projects__Header">
                    Список проектов
                </header>
                <nav className="List-projects__Navbar">
                    <section className="List-projects__Navbar__Input">
                        <input className="List-projects__Navbar__Input__Search" placeholder="Поиск по вакансиям"/>
                    </section>
                    <section className="List-projects__Navbar__Options">
                        <section className="List-projects__Navbar__Options__Select">
                            <FontAwesomeIcon
                                className="List-projects__Navbar__Options__Select__Checkbox"
                                color="grey"
                                icon={faSquare}
                                size="1x"
                            />
                            <h4>Только открытые</h4>
                        </section>
                        <button className="List-projects__Navbar__Options__Create" onClick={this.windowPopUp}>ДОБАВИТЬ
                            ПРОЕКТ
                        </button>
                    </section>
                </nav>
                <Card>
                    <section className="Card__Container__Left">
                        <h2>Название первого проекта</h2>
                        <section className="Card__Container__Left__Options">
                            <h4>34 вакансии</h4>
                            <h4 className="add">ДОБАВИТЬ ВАКАНСИЮ</h4>
                        </section>
                    </section>
                    <section className="Card__Container__Right">
                        <section className="Card__Container__Right__Options">
                            <span>ЗАКРЫТЬ ПРОЕКТ</span>
                            <span>УДАЛИТЬ</span>
                        </section>
                    </section>
                </Card>
                <section className="List-projects__MultiCard">
                    <Card>
                        <section className="Card__Container__Left">
                            <h2>Название проекта, который раскрыт</h2>
                            <section className="Card__Container__Left__Options">
                                <h4>2 вакансии</h4>
                                <h4 className="add">ДОБАВИТЬ ВАКАНСИЮ</h4>
                            </section>
                        </section>
                        <section className="Card__Container__Right">
                            <section className="Card__Container__Right__Options">
                                <span>ЗАКРЫТЬ ПРОЕКТ</span>
                                <span>УДАЛИТЬ</span>
                            </section>
                        </section>
                    </Card>
                    <Card>
                        <section className="Card__Container__Left">
                            <h2>Первая вакансия</h2>
                            <section className="Card__Container__Left__Options">
                                <h4>
                                    <FontAwesomeIcon
                                        className="List-projects__Navbar__Options__Select__Checkbox"
                                        color="grey"
                                        icon={faSearch}
                                        size="1x"
                                    />
                                </h4>
                                <h4 className="add">Вакансия открыта, идет подбор кандидатов</h4>
                            </section>
                        </section>
                        <section className="Card__Container__Right">
                            <section className="Card__Container__Right__Options">
                                <span>ЗАКРЫТЬ ПРОЕКТ</span>
                                <span>УДАЛИТЬ</span>
                            </section>
                        </section>
                    </Card>
                    <Card>
                        <section className="Card__Container__Left">
                            <h2>Вторая вакансия</h2>
                            <section className="Card__Container__Left__Options">
                                <h4>
                                    <FontAwesomeIcon
                                        className="List-projects__Navbar__Options__Select__Checkbox"
                                        color="grey"
                                        icon={faSearch}
                                        size="1x"
                                    />
                                </h4>
                                <h4>Вакансия открыта, идет подбор кандидатов</h4>
                            </section>
                        </section>
                        <section className="Card__Container__Right">
                            <section className="Card__Container__Right__Options">
                                <span>ЗАКРЫТЬ ПРОЕКТ</span>
                                <span>УДАЛИТЬ</span>
                            </section>
                        </section>
                    </Card>
                    <Card>
                        <section className="Card__Container__Left">
                            <h2>Третья вакансия</h2>
                            <section className="Card__Container__Left__Options">
                                <h4>
                                    <FontAwesomeIcon
                                        className="List-projects__Navbar__Options__Select__Checkbox"
                                        color="grey"
                                        icon={faCheck}
                                        size="1x"
                                    />
                                </h4>
                                <h4>Вакансия закрыта, сотрудник нанят</h4>
                            </section>
                        </section>
                        <section className="Card__Container__Right">
                            <section className="Card__Container__Right__Options">
                                <span style={{color: "#00aa87"}}>ОТКРЫТЬ ПРОЕКТ</span>
                                <span>УДАЛИТЬ</span>
                            </section>
                        </section>
                    </Card>
                </section>
                <Card>
                    <section className="Card__Container__Left">
                        <h2>Название второго проекта</h2>
                        <section className="Card__Container__Left__Options">
                            <h4>55 вакансии</h4>
                            <h4 className="add">ДОБАВИТЬ ВАКАНСИЮ</h4>
                        </section>
                    </section>
                    <section className="Card__Container__Right">
                        <section className="Card__Container__Right__Options">
                            <span>ЗАКРЫТЬ ПРОЕКТ</span>
                            <span>УДАЛИТЬ</span>
                        </section>
                    </section>
                </Card>
                <Card>
                    <section className="Card__Container__Left Card__Container__Left__LongText">
                        <h2>Очень-очень длинное название третьего проекта, которое переносится на две строки</h2>
                        <section className="Card__Container__Left__Options__Long">
                            <h4>55 вакансии</h4>
                            <section className="Card__Container__Left__SubOptions">
                                <FontAwesomeIcon
                                    className="List-projects__Navbar__Options__Select__Checkbox"
                                    color="grey"
                                    icon={faCheck}
                                    size="1x"
                                />
                                <h4 className="checked">Проект закрыт, сотрудники наняты</h4>
                            </section>
                        </section>
                    </section>
                    <section className="Card__Container__Right">
                        <section className="Card__Container__Right__Options">
                            <span>ОТКРЫТЬ ПРОЕКТ</span>
                            <span>УДАЛИТЬ</span>
                        </section>
                    </section>
                </Card>
            </section>,
                <Modal
                    display={this.state.display}
                    windowPopUp={() => this.windowPopUp}
                    key="2"
                />
            ]
        );
    }
}