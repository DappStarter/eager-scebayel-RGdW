require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone strong random night equip just clock army gate'; 
let testAccounts = [
"0xc037e74f2edbfefb93ac2b7636568a5f99dad071bbb705bda98d5d3077cef63e",
"0x5bcc6d473a436042f050ea4db55005f0ef070150628504d9663cb4ed98ee771d",
"0x30f86a49a18845dcd927fb8f6b1dddd706f82c44dea3d7d8998924e63667791f",
"0x70cdc3368e473978960747e791342c2ee4d4b05a0a956919f315e9dd77e35199",
"0x26373610f6b1623bc14c4f7d6625a391cbb4b6bccc1e3149b56bdde1c4f4e053",
"0xd9ff3f2a78aca6d37f15cb19a629b3044f77b5d884fe98cb7ebfad71b7b6639e",
"0xf4b54a0796cdf8e765fe4667d2d6e6bf4a028624f6e52202b2dce456f7d4c9e4",
"0x9bc8b3c2f090162f0fd40e932a2b04ba9731d875c0154f654bdb84c816fe7c9c",
"0x07db0c6ff9c569548fd352bc331eb094ae32b5f6dbd024f0d812c53c0d4f3cf3",
"0xeec108ac85dafcd8a8dddb358c377dbc6eea3513e0fb1d9d5040fbf974495d99"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


