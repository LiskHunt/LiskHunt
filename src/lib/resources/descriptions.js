let descriptions = {};

descriptions.LiskmultiSigner = ` 
# Lisk-multiSigner
This script is used to automatically sign multiple pending multisig-transactions in a specific account.
After executing it, it will list the pending multisig transactions in this account and will ask you if you want to sign all these transactions in one batch.

## Installation

### Installing needed python modules:
\`sudo apt-get install python-requests\`

If you start the script with missing modules it will tell you which modules you have to install.

### Cloning github repo
\`git clone https://github.com/simonmorgenthaler/Lisk-multiSigner.git\`

  ### Make script executable
  \`chmod +x multiSigner.py\`

`;

descriptions.liskBuilders = ` 
# Lisk.builders - Making Lisk better block by block

Lisk.builders is a community of developers, entrepreneurs, public speakers that make it their mission to make lisk better day by day.

The website presents you with a list of Delegates and easy ways to look up their activity and past contributions in addition to rewarding you for your votes with a lottery and a pool.

`;

descriptions.DPOSTools = ` 
# DPOSTool for LISK - Optimize and analyze your lisk revenue
The Swiss-knife for major DPOS coins.

DPOSTools provides a lot of insights for both delegates and lisk holders.

`;


descriptions.liskit = ` 
# Liskit
Pool sharing the 20% of the rewards.
`;

descriptions.liskpro = ` 
# Liskpro.com
Unofficial Lisk support in french managed from liskpro.com Delegate.
`;

descriptions.lisky = ` 
# lisky

Lisky allows you to communicate with a remote or local node and carry out Lisk-related functionality using an interactive or non-interactive command line tool.
`;

descriptions.liskmonitor = ` 
# lisk Monitor

LiskMonitor is a stand-alone PowerShell script to do end-user monitoring on Lisk MainNet Node(s) and Delegate. It uses PowerShell so it run only on Windows but can monitor a node on any type of installation since it uses HTTP protocol to communicate with API.

Included features are:

 - Monitoring Last Block Age of every provided nodes URLs.
 - Monitoring Last Block Height of every provided nodes URLs.
 - Monitoring Last Forged Block Height of configured delegate on all provided nodes URLs.
 - Monitoring Delegate Forging Status on all provided URLs.

Current Threshold values are 120 seconds for last block age, 5 blocks lag on public nodes and 40 minutes for last forged block age.

`;

descriptions.liskmonitor = ` 
# lisk Monitor

LiskMonitor is a stand-alone PowerShell script to do end-user monitoring on Lisk MainNet Node(s) and Delegate. It uses PowerShell so it run only on Windows but can monitor a node on any type of installation since it uses HTTP protocol to communicate with API.

Included features are:

 - Monitoring Last Block Age of every provided nodes URLs.
 - Monitoring Last Block Height of every provided nodes URLs.
 - Monitoring Last Forged Block Height of configured delegate on all provided nodes URLs.
 - Monitoring Delegate Forging Status on all provided URLs.

Current Threshold values are 120 seconds for last block age, 5 blocks lag on public nodes and 40 minutes for last forged block age.

`;

descriptions.notify = ` 
# Notify

Notifiy is a  Notification as a Service for the Lisk blockchain,
When an event gets triggered, an email notification is sent out.

Events are:

 - When a new transaction on a wallet happens.
 - When a delegate misses a block
 - When a delegate changes ranking
 - When a delegate receives a new vote.
 - When a delegate starts forging.

Soon Webhooks and integration with IFTTT will be released!

`;

descriptions.liskpool = ` 
# Lisk Pool

This is first and fully open-sourced Lisk delegate forging pool (also known as delegate reward sharing). Written in PHP.

`;

descriptions.liskak = ` 
# liskak
Lisk Army Knife - Forging failover and command line lisk


\`\`\`./liskak.sh -s 10\`\`\` *# sends 10 LSK to 8858064098621060602L*

\`\`\`./liskak.sh -t 10 8858064098621060602L\`\`\` *# transfers 10 LSK to 8858064098621060602L*


# Foreword
Last weekend, while educating a couple of individuals on javascript, they started asking a lot of questions on how to achieve many things in nodejs.

  They wanted to have their lisk delegate nodes monitored, healthy and having at least one forging.
  
...And then to check their balance

...And then to transfer lisks from the command line

...And then to check sync status

...And then to list their votes

...And then to vote for many delegates.

...And then a lot of other stuff.



The following script insued.

# DISCLAIMER
This script is immature and in need of many tests.

  Nonetheless, since it proved it's worth and is allegedly usefull for the lisk community, here it is.

Pay close attention to the USAGE below, there are some flags that are self explanatory but not detailed in this README file.

  Should you want features: ask! Will add it whenever I can.

  Do as you will, have a delegation!
`;

descriptions.lisknano = ` 
# Lisk Nano

Lisk Nano enables the user to send and receive transactions on the Lisk network and provides a simple user interface for more advanced features like delegate voting or registering a second passphrase. 
With Lisk Nano, there is no need for blockchain synchronisation as it connects to official Lisk nodes hosted by the Lisk Foundation. For the use of API calls and other advanced features please use Lisk Core.

`;

descriptions.liskcore = ` 
# Lisk Core

Lisk Core enables delegate forging, provides blockchain synchronisation, and includes the complete API for developers. 
Please note, installing Lisk Core is for advanced technical users looking to build on top of the Lisk Platform, securing the network infrastructure or attain delegate forging access.
`;

descriptions.liskjs = ` 
# Lisk-JS

Lisk JS is a JavaScript library for Lisk - the cryptocurrency and blockchain application platform. 
It allows developers to create offline transactions and broadcast them onto the network. It also allows developers to interact with the core Lisk API, for retrieval of collections and single records of data located on the Lisk blockchain. Its main benefit is that it does not require a locally installed Lisk node, and instead utilizes the existing peers on the network. It can be used from the client as a browserify compiled module, or on the server as a standard Node.js module.
`;

descriptions.liskexplorer = ` 
# Lisk blockchain explorer

The official blockchain explorer for Lisk developed by LiskHQ.
`;


descriptions.liskscripts = ` 
# Lisk Delegate Scripts

Useful scripts for your delegate server.
### Consensus check script

\`check_consensus.sh\`
This script looks at the last two lines of the log: ~/lisk-main/logs/lisk.log for the word 'Inadequate'.  If it sees that word then it tries to switch forging quickly to server 2.  If server two is not at a good height, it tries server 3 if available.  You can run this on all forging servers.


### Anti-fork script

\`check_height_and_rebuild.sh\`
Compares the height of your 100 connected peers and gets the highest height.  Then checks your node is within 4 blocks of it.  If not, it tries a reload first.  If the reload doesn't get it back within an acceptable range, it tries a rebuild.  The rebuild attempts to get the newest snap available from servers listed. 

### Management script
\`manage.sh\` This script will check the block heights of all listed servers.  It will attempt to have one and only one server forging and prefer to have server 1 do the forging.  If the forging server swtiches by something other then this script, it will pause for 15 seconds and then check the status of the servers after that.

`;


descriptions.liskdocs = ` 
# Lisk Docs

The official documentation for Lisk made in LiskHQ.
`;



descriptions.swiftlisk = ` 
# SwiftyLisk

SwiftyLisk allows you to add blockchain functionalities to any Swift app for iOS and macOS alike.

## Usage

The Lisk API is composed of eight modules:

- AccountAPI
- BlockAPI
- DelegateAPI
- LoaderAPI
- MultisignatureAPI
- PeerAPI
- SignatureAPI
- TransactionAPI

Every available method is implemented as a class method. At the moment the Wiki for SwiftyLisk is not ready. Please refer to the comments preceding each method for documentation. Also, notice that SwiftyLisk implements all methods available in the [Lisk API Reference](https://github.com/LiskArchive/lisk-wiki/wiki/Lisk-API-Reference), so, as a rule of thumb, to use a method from the reference reference type \`MODULE_NAME + API.METHOD_NAME\`. (Note: a few methods have been renamed to make code more readable.)

## Support

SwiftyLisk is maintained by LiskUser1234 ([Lisk Forum](https://forum.lisk.io/memberlist.php?mode=viewprofile&u=1265), [Reddit](https://www.reddit.com/user/LiskUser1234/)).

`;

descriptions.swiftlisk = ` 
# SwiftyLisk

SwiftyLisk allows you to add blockchain functionalities to any Swift app for iOS and macOS alike.

## Usage

The Lisk API is composed of eight modules:

- AccountAPI
- BlockAPI
- DelegateAPI
- LoaderAPI
- MultisignatureAPI
- PeerAPI
- SignatureAPI
- TransactionAPI

Every available method is implemented as a class method. At the moment the Wiki for SwiftyLisk is not ready. Please refer to the comments preceding each method for documentation. Also, notice that SwiftyLisk implements all methods available in the [Lisk API Reference](https://github.com/LiskArchive/lisk-wiki/wiki/Lisk-API-Reference), so, as a rule of thumb, to use a method from the reference reference type \`MODULE_NAME + API.METHOD_NAME\`. (Note: a few methods have been renamed to make code more readable.)

## Support

SwiftyLisk is maintained by LiskUser1234 ([Lisk Forum](https://forum.lisk.io/memberlist.php?mode=viewprofile&u=1265), [Reddit](https://www.reddit.com/user/LiskUser1234/)).

`;

descriptions.delegatesbot = ` 
# DelegatesBot

A simple telegram bot that tracks your delegate for you.
`;

descriptions.liskapi = ` 
# Lisk API Wrapper

A smart wrapper for Lisk node APIs.

## Docs
Full documentation is [here](https://andreafspeziale.github.io/liskapi/).

### Basic usage

\`\`\`javascript
const lisk = require ('liskapi')();

lisk.getSyncStatus ().call ()
  .then ((res) => {
    console.log (\`Got data \${res}\`);
  })
  .catch ((err) => {
    console.log ('Got an error');
  });
\`\`\`

### Get with params

\`\`\`javascript
lisk.getBalance ({address: 'address'})
  .call ()
  .then ((res) => {
    console.log (\`Get balance of delegate\n \${JSON.stringify (res)}\`);
  })
  .catch ((err) => {
    console.log ('Got an error in getting balance\n', err);
  });
\`\`\`

### Post usage

\`\`\`javascript
const lisk = require ('liskapi')();

lisk.enableForging ()
  .data ({secret: '...'})
  .call ()
  .then ((res) => {
    console.log (\`Got data \${res}\`);
  })
  .catch ((err) => {
    console.log ('Got an error');
  });
\`\`\`


### Connect to a node different from local

\`\`\`javascript
const params = {
  host: 'othernode.com',
  port: 8000,
  ssl: true
};

const lisk = require ('liskapi')(params);
\`\`\`


### Pagination semplification

Call an endpoint with pagination; if \`limit\` is great than 101, the endpoint will
be called many time as required.

\`\`\`javascript
const lisk = require ('liskapi')();

lisk.getTransactions ()
  .paginate ({ limit: 100, offset: 0 })
  .call ()
  .then ((res) => {
    console.log (\`Got data \${res}\`);
  })
  .catch ((err) => {
    console.log ('Got an error');
  });
\`\`\`



### Sorting

\`\`\`javascript
const lisk = require ('liskapi')();

lisk.getTransactions ()
  .sort ({ time: 'asc' })
  .call ()
  .then ((res) => {
    console.log (\`Got data \${res}\`);
  })
  .catch ((err) => {
    console.log ('Got an error');
  });
\`\`\`



### Change host for a given call

\`\`\`javascript
const lisk = require ('liskapi')();

lisk.getTransactions ()
  .host ({ host: 'othernode2.com', port: 8000, ssl: true })
  .call ()
  .then ((res) => {
    console.log (\`Got data \${res}\`);
  })
  .catch ((err) => {
    console.log ('Got an error');
  });
\`\`\`

`;

descriptions.liskitbot = ` 
# Liskitbot

## (@LiskitBot and @TestnetLiskitBot)
Explore the Lisk network retrieving information about your delegate

## Available commands

    - /ping (check bot status)
    - /watch start/stop delegateName (activating/stopping forging monitoring on a delegate)
    - /forged start/stop delegateName (activating/stopping forging block notification on a delegate)
    - /voted start/stop delegateName (activating/stopping votes notification on a delegate)
    - /balance delegateName (check balance for delegate name)
    - /rank delegateName (check rank for delegate)
    - /markets bittrex | poloniex | bitsquare (check last 24h markets)
    - /height (check height from node with the highest one)

    - /status http/s IP PORT (check height from delegate node) --> ask to liskit delegate the BOT IP so you can whitelist it

    - /list monitoring/forged/voted(show the delegates you are watching/receiving forging and votes notifications)    
    - /uptime delegateName (check uptime for delegate name)
    - /pkey delegateName (check public key for delegate name)
    - /findbypkey pkey (find delegate from public key)
    - /address delegateName (check address for delegate name)
    - /voters delegateName (check voters of delegate name)
    - /votes delegateName (check votes made by delegate name)

`;

descriptions.alwaysforge = ` 
# always-forge
**AlwaysForge** is PHP forging fail-over for **Lisk** cryptocurrency. It will monitor all your nodes in real-time and switch forging to best server available. It uses active (maybe a little too aggressive) approach and best practices.

## Version:
\`1.0.0\`

## Dependencies:
Script require **PHP** with **cURL** support and **Cron**. If you want to run it on hosting instead of VPS - one with **SLA 99.99%** is highly recommended.

## Installation:
**Remember to add your monitor's server IP to lisk whitelist (for API and forging)!**

\`\`\`
git clone https://github.com/4miners/always-forge
  cd always-forge
cp config.json.example config.json
  \`\`\`
Edit \`config.json\` to your needs:
\`\`\`
{
  "log_level": "info", // Log details level: debug, info, none
  "check_interval_sec": 1, // Checker will pause for that interval each loop
  "timeouts": {
  "request_sec": 3, // Timeout for cURL request, must be higher than connect_msec
    "connect_msec": 1000 // Timeout for cURL connection establishment
},
  "delegate": {
  "address": "delegate_address", // Your delegate address
    "publicKey": "delegate_publicKey", // Your delegate public key
    "secret": "delegate_secret" // Your delegate secret
},
  // List of servers, first server will have highest priority, last - lowest priority
  // Each server must have unique name! For your delegate security HTTPS connection is forced!
  "servers": [
  {
    "name": "mainnet-1 #1",
    "ip": "127.0.0.1",
    "port": 8000
  },
  {
    "name": "mainnet-1 #2",
    "ip": "127.0.0.1",
    "port": 8001
  }
]
}
\`\`\`

Save config and test it:
\`\`\`
php always_forge.php
  \`\`\`
If it works - add to your crontab \`monitor_always_forge.sh\` to run every minute, for example: \`crontab -e\`, then insert:
\`\`\`
* * * * * bash /home/lisk/always-forge/monitor_always_forge.sh
  \`\`\`
`;

descriptions.liskvoters = ` 
# Lisk Voters
"git diff" btw two delegate / address voters

# Install

    $ npm install
    $ bower install
    $ grunt (build)
`;

export default descriptions;
