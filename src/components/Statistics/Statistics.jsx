// import React, { Component } from "react";

// class Statistics extends Component {
//     render() {
//         return (
//             <div >
//                 <h2 >Statistics</h2>

//                 <ul >
//                     <li>
//                         <span>Good:</span>
//                         <span></span>
//                     </li>

//                     <li>
//                         <span>Neutral:</span>
//                         <span></span>
//                     </li>

//                     <li>
//                         <span>Bad:</span>
//                         <span></span>
//                     </li>

//                     <li>
//                         <span>Total:</span>
//                         <span></span>
//                     </li>

//                     <li>
//                         <span>Positive feedback:</span>
//                         <span></span>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// };

// export default Statistics;

// ======================================================================================


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