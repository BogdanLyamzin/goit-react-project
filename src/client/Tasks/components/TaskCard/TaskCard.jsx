import React from 'react'
import PropTypes from 'prop-types';
import { ReactComponent as Completed } from '../../icons/completed.svg';
import { ReactComponent as Incompleted } from '../../icons/incompleted.svg'

const TaskCard = (title, reward, imageUrl, date, isCompleted, toggleCompleted) => {

    const today = new Date().toISOString().slice(0, 10);

    return (
        <li>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{reward} балла</p>
            {today === date &&
                <div>
                    <label htmlFor="task"></label>
                    <input id="task" type="checkbox" onClick={toggleCompleted} name="task">
                    </input>
                </div>}
            {today > date && isCompleted && <Completed />}
            {today > date && !isCompleted && <Incompleted />}
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