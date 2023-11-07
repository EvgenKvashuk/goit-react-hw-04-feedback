import React from "react";
import css from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className={css.wraper}>
            <h2 className={css.header}>Statistics</h2>

            <ul className={css.list}>
                <li className={css.stat}>
                    <span>Good:</span>
                    <span>{good}</span>
                </li>

                <li className={css.stat}>
                    <span>Neutral:</span>
                    <span>{neutral}</span>
                </li>

                <li className={css.stat}>
                    <span>Bad:</span>
                    <span>{bad}</span>
                </li>

                <li className={css.stat}>
                    <span>Total:</span>
                    <span>{total}</span>
                </li>

                <li className={css.stat}>
                    <span>Positive feedback:</span>
                    <span>{positivePercentage} %</span>
                </li>
            </ul>
        </div>
    );
};

export default Statistics;