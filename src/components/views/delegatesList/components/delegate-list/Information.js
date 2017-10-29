import React from 'react';

const Information = ({ delegate }) => {

    const {name, coolness_score} = delegate;
    return (
        <div className="delegatecard-content">
            <div>
                <div className="delegate-name">{name}</div>
                <div>coolness: {coolness_score}</div>

            </div>
        </div>
    );
};

export default Information;

/*

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
                </Tooltip>


* */
