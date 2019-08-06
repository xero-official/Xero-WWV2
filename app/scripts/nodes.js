"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
  /*	ETH: "ETH",
  	ETC: "ETC",
  	Ropsten: "ROPSTEN ETH",
  	Kovan: "KOVAN ETH",
  	Rinkeby: "RINKEBY ETH",
  	EXP: "EXP",
  	UBQ: "UBQ",
  	POA: "POA",
  	TOMO: "TOMO",
  	ELLA: "ELLA",
  	ETSC: "ETSC",
  	EGEM: "EGEM",
  	CLO: "CLO",
  	MUSIC: "MUSIC",
  	GO: "GO",
  	EOSC: "EOSC",
  	AKA: "AKA",
  	ESN: "ESN",
  	PIRL: "PIRL", */
  ETHO: "ETHO",
  XERO: "XERO",
  /*	ATH: "ATH",
  	ILT: "ILT",
  	WEB: "WEB",
  	MIX: "MIX",
  	REOSC: "REOSC",
  	THUNDERCORE: "TT", */
  Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
  name: "CUS",
  blockExplorerTX: "",
  blockExplorerAddr: "",
  type: nodes.nodeTypes.Custom,
  eip155: false,
  chainId: "",
  tokenList: [],
  abiList: [],
  service: "Custom",
  lib: null
};
nodes.nodeList = {
  etho: {
    name: "ETHO",
    blockExplorerTX: "https://explorer.ether1.org/tx/[[txHash]]",
    blockExplorerAddr: "https://explorer.ether1.org/addr/[[address]]",
    type: nodes.nodeTypes.ETHO,
    eip155: true,
    chainId: 1313114,
    tokenList: require("./tokens/ethoTokens.json"),
    abiList: require("./abiDefinitions/ethoAbi.json"),
    estimateGas: true,
    service: "ether1.org",
    lib: new nodes.customNode("https://rpc.ether1.org", "")
  },
  xero: {
    name: "XERO",
    blockExplorerTX: "https://explorer.xerom.org/tx/[[txHash]]",
    blockExplorerAddr: "https://explorer.xerom.org/addr/[[address]]",
    type: nodes.nodeTypes.XERO,
    eip155: true,
    chainId: 1313500,
    tokenList: require("./tokens/xeroTokens.json"),
    abiList: require("./abiDefinitions/xeroAbi.json"),
    estimateGas: true,
    service: "xerom.org",
    lib: new nodes.customNode("https://rpc.xerom.org", "")
  }
};

nodes.ethPrice = require("./nodeHelpers/ethPrice");
module.exports = nodes;
