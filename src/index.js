module.exports = function multiply(first, second) {

  return (BigInt(+first)*BigInt(+second)).toString().replace('n','');
  // your solution
}
