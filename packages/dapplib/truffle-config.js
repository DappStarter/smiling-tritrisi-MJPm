require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note spike essay inner nation fresh spoil'; 
let testAccounts = [
"0x7dec792f553dd06f4285e8629d911309d9786b974e02fe113eb1d1a856a00f89",
"0x8cc66ea7fe1df76bd6b2174043a7f62e7fc3872e4467162cecf4f8e5b8ee8349",
"0xad88730c302792f24a46b0891eb380b0f03911b04132cd9560a7f8d0f62c1933",
"0x24407ea886c85863889bdeb2bc3f6b9106c78ecf46c1caad0e21962773c5b5be",
"0x44abfa322c17c6f838d716c7740f32caa948cc3a2b564f87d1b0def483e5a51b",
"0xcd371a9f6414bd16a1f8f71a3700ec4ace5bca27611e2689928cc0d4945e9a86",
"0x68b995211db547c854cb8cbe819528005fa75eb92358b2d74b48e9044e737c0b",
"0xbae8558f4639588804bcd0589f2d91c4a88dcdb596aacbd9ca63550d6cc87351",
"0xd0b3c83c3e68c415d1554937364e913f3e4f12c8d3799d17cd785dc2d1b8f16d",
"0xf6d5ea9853609fff2df3e70f100443df6f6bee6afbf265a6bddda154e4d0b811"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

