/**
 * REGULAR EXPRESSIONS
 */
// TODO: 4. Ignore case while matching.

// TODO: 3. Match a literal string with different possibilites
{
  // ? Search with or operator.
  const withDifferentPossibilities = (log) => {
    const sentance = 'I am here for you forever waiting.'
    const reg = /you|me|her|him/;
    const result = reg.test(sentance);
    console.log(result);
  };
  withDifferentPossibilities(true);
}
// TODO: 2. Match literal string
{
  const matchLiteralString = (log = false) => {
    let sentance = "Regex do Case Search on string";
    let regex = /Case Search/;
    let result = regex.test(sentance);
    if (log) {
      console.log(result);
    }
  };
  matchLiteralString();
}
// TODO: 1. using the test method.
{
  const usingTestMethod = (log = false) => {
    let sentance = "Hello! really nice to meet you.";
    let regstring = /Hello/;
    const result = regstring.test(sentance);
    if (log) {
      console.log(result);
    }
  };
  usingTestMethod();
}
