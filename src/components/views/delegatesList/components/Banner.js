import React from 'react';

const Banner = () => {
    return (
        <div className="delegatelist--banner-wrap columns">
            <div className="delegatelist--banner columns">
            <div className="column">
            <h1 className="">Welcome to the delegates hunt</h1>
            <h2 className="">
                The delegates bringing Lisk to the next level, sorted by coolness
                score. <br />
                A super-duper index to show how the delegate is contributing to
                the Lisk ecosystem. <br />
                The coolness score is given by the following formula: <br />

                If you want to join the list{' '}
                    <a
                        onClick={() => this.props.goSubmitHunt()}
                        className="underlined"
                    >
                        click here
                    </a>
                </h2>
            </div>
            <div className="column">
                <p>
                    <small>
                        coolness_score = ( appsLikes ) + ( apps.length * 10) +
                        (delegate.donations_1) + (delegate.donations_2 * 5) +
                        (delegate.donations_3 * 7)
                    </small>
                </p>
            </div>
            </div>
        </div>
    );

};

export default Banner;
