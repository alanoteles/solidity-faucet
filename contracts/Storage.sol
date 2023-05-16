// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Storage {
    uint8 public a = 7; // 1 byte
    uint16 public b = 10; // 2 bytes
    address public c = 0xDb3a7cF77Db99aD796b1849453951616d2408F70; // 20 bytes
    bool d = true; // 1 byte
    uint64 public e = 15; // 8 bytes
    // 32 bytes, all values will be stored in slot 0

    uint256 public f = 200; // 32 bytes -> slot 1

    uint8 public g = 40; // 1 byte -> slot 2
    
    uint256 public h = 789; // 32 bytes -> slot 3
    
}