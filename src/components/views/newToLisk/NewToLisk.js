import React, {Component}  from 'react';
import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';

import { goResourcesList } from '../../router/routes';

import { connect } from "react-redux";
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

class NewToLisk extends Component {
  render() {
    return (
      <AnimationsWrapper>
        <div className="container top45 bottom20">
          <div className="columns">
            <div className="container padded-content has-text-centered column is-half is-offset-one-quarter">
              <h1 className="title is-size-1">
              <span aria-label="nerd" role="img">
                ✨
              </span>{' '}
                So you are new to lisk?
              </h1>

              <p>
                Lisk is a blockchain platform that provides decentralized
                blockchain apps. <br />
                It's developed in Javascript and enables developers to create
                their own dApp (decentralized application) and run them on the
                Lisk sidechains. Lisk uses a system known as Delegated Proof of
                Stake as it&apos;s consensus model.
                <br />
                <br />
              </p>
              <p>
                The sdk is annonced to be released before the end of 2017.<br />
              </p>
              <p>
                For a better explanation you can refer to{' '}
                <a
                  href="https://blog.lisk.io/what-is-lisk-and-what-it-isnt-e7b6b6188211"
                  className="underlined"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  "What is Lisk? And what it isnt." article
                </a>{' '}
                from the LiskHQ.<br />
              </p>

              <div className="has-text-left top50">
                <h2 className="title is-size-3 top10">
                  Where can I purchase Lisk?
                </h2>
                <p>
                  At the moment Lisk tokens can purchased on Poloniex, Bittrex,
                  Jubi, BitBay, Yobit, Livecoin, HitBTC and some other minor
                  exchanges<br />
                  To see which exchanges are trading Lisk, refer this page on{' '}
                  <a
                    href="https://coinmarketcap.com/currencies/lisk/#markets"
                    className="underlined"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Coinmarketcap
                  </a>{' '}
                </p>
              </div>

              <div className="has-text-right top30">
                <h2 className="title is-size-3 top10">
                  What is delegated proof of stake?
                </h2>
                <p>
                  Lisk uses the Delegated Proof of Stake (DPoS) consensus
                  algorithms. The network is secured and/or protected by 101
                  active delegates. Each delegate is elected by the stakeholders
                  of LSK. Once voted into the list of active delegates they are
                  given the authority to generate blocks. Every Lisk stakeholder
                  can be a part of the electoral process, by placing votes for
                  delegates in their favour, or by becoming a candidate
                  themselves. The duty of the 101 active delegates is to secure
                  the Lisk main blockchain (sidechains have their own delegates).
                  In order to provide an incentive to secure the network,
                  transaction fees on the network are distributed equally amongst
                  the 101 active delegates. In addition, an inflationary block
                  reward (aka forging reward) is distributed to each block
                  generator.
                </p>
              </div>
              <div className="has-text-left top30">
                <h2 className="title is-size-3 top10">
                  How do I become a delegate?
                </h2>
                <p>
                  To become a delegate you just need to register a delegate
                  username within the client. After the registration your account
                  ID appears in the list of all delegates. The registration fee is
                  currently 25 LSK.
                </p>
              </div>
              <div className="has-text-right top30">
                <h2 className="title is-size-3 top10">
                  What's an active or standby delegate?
                </h2>
                <p>
                  Every delegate is placed at a specific position on the delegate
                  ranking list. The number of votes determines that position. All
                  delegates with a rank between 1 and 101 are active delegates.
                  All other delegates with a rank over 101 (102-∞) are classified
                  as standby delegates. Only the 101 active delegates will
                  actually forge and earn rewards. The standby delegates are there
                  only to replace an active delegate if they lose enough votes to
                  get bumped out.
                </p>
              </div>
              <div className="has-text-left top30">
                <h2 className="title is-size-3 top10">What is forging?</h2>
                <p>
                  Forging is another word for block generation, at Bitcoin this
                  process is called mining. Lisk utilizes an inflationary forging
                  rewards system which creates new LSK for every successful block.
                  More information about this below.
                </p>
              </div>

              <div className="has-text-right top20">
                Source:{' '}
                <a
                  href="https://github.com/LiskArchive/lisk-wiki/wiki/Delegates-Forging"
                  className="underlined"
                >
                  Delegates Forging
                </a>
              </div>

              <h2 className="title is-size-2 top30">
                Now let's start to find some cool apps!{' '}
                <a
                  onClick={() => this.props.goResourcesList()}
                  className="underlined has-text-success"
                ><br className="is-hidden-desktop"/>
                  <i className="fa fa-share" aria-hidden="true"></i>
                  let's go!
                </a>
              </h2>
            </div>
          </div>
        </div>
      </AnimationsWrapper>
    );
  }
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    goResourcesList: () => push(goResourcesList)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewToLisk);
