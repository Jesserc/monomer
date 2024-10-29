"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[371],{1248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(3438),i=n(5627);const a={sidebar_position:2},r="Interact with a Monomer Rollup Devnet",s={id:"build/interact",title:"Interact with a Monomer Rollup Devnet",description:"This guide assumes you have a Monomer rollup chain running locally. If you don't, refer to the prior tutorial.",source:"@site/docs/build/interact.md",sourceDirName:"build",slug:"/build/interact",permalink:"/build/interact",draft:!1,unlisted:!1,editUrl:"https://github.com/polymerdao/monomer/tree/main/docs/docs/build/interact.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create an Application With Monomer",permalink:"/build/create-an-app-with-monomer"}},l={},d=[{value:"Configuring L1 and L2 Wallets",id:"configuring-l1-and-l2-wallets",level:2},{value:"Submitting an L1 Deposit Transaction",id:"submitting-an-l1-deposit-transaction",level:2},{value:"Submitting an L2 Cosmos SDK Transaction",id:"submitting-an-l2-cosmos-sdk-transaction",level:2},{value:"Querying the Rollup Chain",id:"querying-the-rollup-chain",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"interact-with-a-monomer-rollup-devnet",children:"Interact with a Monomer Rollup Devnet"}),"\n",(0,o.jsxs)(t.p,{children:["This guide assumes you have a Monomer rollup chain running locally. If you don't, refer to the ",(0,o.jsx)(t.a,{href:"/build/create-an-app-with-monomer",children:"prior tutorial"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["We will need to have an account on L1 with funds.\nTo give yourself funds on the devnet at genesis, run the devnet start command specified in the last tutorial with the ",(0,o.jsx)(t.code,{children:"--monomer.dev.l1-user-address"})," flag:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'./testappd monomer start --minimum-gas-prices 0.01wei --monomer.dev-start --api.enable --monomer.dev.l1-user-address "<address>"\n'})}),"\n",(0,o.jsx)(t.h2,{id:"configuring-l1-and-l2-wallets",children:"Configuring L1 and L2 Wallets"}),"\n",(0,o.jsx)(t.p,{children:"To interact with a Monomer rollup chain, you will need to configure wallets for both the L1 and L2 chains.\nThe L1 wallet will be used to interact with the L1 chain, submit deposit transactions to L2, and prove and finalize withdrawal transactions initiated on L2.\nThe L2 wallet will be used to submit transactions on the L2 chain and initiate withdrawals back to L1."}),"\n",(0,o.jsx)(t.p,{children:"Monomer currently provides a simple wallet integration server that can automate the process of setting up wallets for both chains and depositing ETH from L1.\nHowever, the server currently requires that MetaMask be used for the L1 wallet and Keplr for the L2 wallet."}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"For additional safety, you should ensure that you're using a wallet specific to testing and not a wallet that stores any funds on Ethereum mainnet."})}),"\n",(0,o.jsx)(t.p,{children:"Once the devnet is running, run the following command from the generated application directory to set up the test server:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"go run github.com/eliben/static-server@v1.3.0 -port=0 wallet\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then, open up the site and follow the instructions to add the L1 wallet to MetaMask and the L2 wallet to Keplr."}),"\n",(0,o.jsx)(t.h2,{id:"submitting-an-l1-deposit-transaction",children:"Submitting an L1 Deposit Transaction"}),"\n",(0,o.jsxs)(t.p,{children:["A deposit transaction can be sent from L1 to L2 through the ",(0,o.jsx)(t.code,{children:"OptimismPortal"})," contract on L1.\nThe wallet integration server provides a simple interface for depositing ETH from L1 to L2 where the user specifies the amount of ETH to deposit and the recipient address of the user on L2 to send the funds to."]}),"\n",(0,o.jsx)(t.h2,{id:"submitting-an-l2-cosmos-sdk-transaction",children:"Submitting an L2 Cosmos SDK Transaction"}),"\n",(0,o.jsx)(t.p,{children:"L2 transactions behave the same as other Cosmos SDK chains and can be submitted to the Monomer rollup chain through the CometBFT  the Keplr wallet (or an alternative Cosmos SDK wallet if configured manually)."}),"\n",(0,o.jsx)(t.h2,{id:"querying-the-rollup-chain",children:"Querying the Rollup Chain"}),"\n",(0,o.jsxs)(t.p,{children:["The rollup chain can be queried directly through the ",(0,o.jsx)(t.a,{href:"https://docs.cosmos.network/api#tag/Query",children:"Cosmos SDK REST API endpoints"})," for supported modules."]}),"\n",(0,o.jsxs)(t.p,{children:["For example, if a user wants to query the ",(0,o.jsx)(t.code,{children:"bank"})," module for their account balance and is using the default API configuration, then they can use the following command:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl http://localhost:1317/cosmos/bank/v1beta1/balances/{address}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5627:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(3790);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);