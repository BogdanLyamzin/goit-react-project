import React from 'react'
import PropTypes from 'prop-types';
import { ReactComponent as Completed } from '../../icons/completed.svg';
import { ReactComponent as Incompleted } from '../../icons/incompleted.svg'

const TaskCard = (title, reward, imageUrl, date, isCompleted, toggleCompleted) => {

    const today = new Date().toISOString().slice(0, 10);
    const expiredDate = Date.parse(today) > Date.parse(date)

    return (
        <li>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{reward} балла</p>
            {today === date && <input onChange={toggleCompleted}></input> // input Марины и логика Дани//
            }
            {expiredDate && isCompleted && <Completed />}
            {expiredDate && !isCompleted && <Incompleted />}
        </li>
    );
}

TaskCard.defaultProps = {
    imageUrl: '',
    reward: '',
    title: '',
    isCompleted: false,
    date: function () { return new Date() },
    toggleCompleted: () => { },
}

TaskCard.propTypes = {
    imageUrl: PropTypes.string,
    reward: PropTypes.string,
    title: PropTypes.string,
    isCompleted: PropTypes.bool,
    toggleCompleted: PropTypes.func,
    date: PropTypes.instanceOf(Date),
}

export default TaskCard;