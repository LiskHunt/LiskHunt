import React from 'react';
import { Tooltip } from 'react-lightweight-tooltip';

const Information = ({ delegate }) => {

    const {name, app_count, likes, total_donations, coolness_score} = delegate;
    return (
        <div className="delegate-content">
            <div>
                <div className="delegate-name">{name}</div>
                <Tooltip
                    content={[
                        ' The coolness score is calculated by the amount of Apps the delegate developed,\n',
                        'the ammount of received likes and the amount of donations made. In this case:\n',

                        `Apps: ${app_count} || Likes: ${likes}`,

                        `\nDonations: ${total_donations}`,
                    ]}
                    className="tooltip"
                    key={name}
                >
                    <strong
                        data-tip
                        data-for="score-explain"
                        data-tooltip="Tooltip Text"
                        key={'tooltip' + name}
                    >
                        Coolness score:
                    </strong>{' '}
                    <small>{coolness_score}</small>
                </Tooltip>
            </div>
        </div>
    );
};

export default Information;
