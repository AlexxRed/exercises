// Задача - 
// Створить компонент каунтер - при кліку на баттон збільшувать каунтер на один, початкове значення 42
// Вивести каунтер в h2 з класом counter, на батоні каунтера класс counter-button
// Класи асайнить через classnames пакет


import classNames from 'classnames/bind';// since the class names are static we can get rid of using this and just use className="counter" etc
import { Component } from 'react';

export default class Counter extends Component {

    state = {
        counterValue: 42
    };

    constructor() {
        super();
        this.handleCounterButtonClick = this.handleCounterButtonClick.bind(this);
    }

    handleCounterButtonClick(event) {
        this.setState({
            counterValue: ++this.state.counterValue // тут спецом маленька помилка архітектурна - мутація стейта, так робить не можна, краще this.state.counterValue + 1
        });
    }

    render() {
        return (
            <>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
                
                <div>
                    <h2 className={classNames("counter")}>{ this.state.counterValue }</h2>
                </div>

                <button className={classNames("counter-button")} 
                    onClick={this.handleCounterButtonClick}>Click</button> 
            </>
        );
    }
}
