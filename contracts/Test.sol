// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Test {
    function test(uint256 testNum) external pure returns(uint data) {

        assembly {
            mstore(0x40, 0x90)
        }

        uint8[3] memory items = [1,2,3];

        assembly {
            data := mload(0x90)
        }
    }
}