const {argv, bin, spawn} = require('../src')
const mocha = bin('mocha')
spawn(mocha, argv)
