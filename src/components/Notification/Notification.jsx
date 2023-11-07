import React from "react";
import css from './Notification.module.css'

const Notification  = ({message}) =>  {
        return (
            <div className={css.wraper_btn}>

                <h2 className={css.header}>{message}</h2>

            </div>
        );
    }

export default Notification;