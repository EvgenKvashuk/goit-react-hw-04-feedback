import React from "react";
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <div className={css.wraper_btn}>

                <ul className={css.list_btn}>
                    {options.map(option => (
                        <li >
                            <button
                                className={css.button}
                                type="button"
                                onClick={() => onLeaveFeedback(option)}>

                                {option}

                            </button>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    );
}

export default FeedbackOptions;