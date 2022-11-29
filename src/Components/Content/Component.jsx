import React from "react";

export class Content extends React.Component{
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }
    getRandomColor(){
        return '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
    }
    setRandomColor(element){
        element.target.style.background = this.getRandomColor();
        element.target.style.color = this.getRandomColor();
    }
    render() {
        return <>
            <h2 onClick={this.setRandomColor} >Мачило Роман Павлович</h2>

            <p onClick={this.setRandomColor}>Дата та місце народження: 11.06.2003, м. Трускавець, Україна</p>
            <p> Освіта: СЗШ №2 гімназія м. Трускавця; НТУУ "КПІ" м. Київ</p>

            <hr />
            <h4>Хобі:</h4>
            <ul type ="square">
                <li>Шахи</li>
                <li>Волейбол</li>
                <li>Катання на мотоциклі</li>
                <li>Воркаут</li>
            </ul>

            <h4>Улюблені фільми:</h4>
            <ol>
                <li>"Паперовий будинок"</li>
                <li>"Втеча із Шоушенка" 1994</li>
                <li>"Зелена миля" 1999</li>
            </ol>

            <h4>Трускавець</h4>
            <p>
                Трускавець — один з найвідоміших бальнеологічних курортів України, а також місто з древньою буремною історією.<br />
                Бальнеологічний курорт Трускавець знаходиться у мальовничій долині в передгір’ї Карпат.<br />
                На території сучасного Трускавця, мабуть, було поселення за часів Київської Русі, коли в Прикарпатті отримав значний розвиток солеварний промисел.
            </p>
        </>
    }
}