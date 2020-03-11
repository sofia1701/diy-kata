const joinNames = namesObj => {
  const arrNames = namesObj
    .map(item => item.name) // get the names out of the object
    .join(", ") // joins string (names) with commas
    .replace(/,(?!.*,)/, " &"); // matches a comma,uses a negative lookahead (?!.*, to assert that what follows does not contain a comma. That will make sure that the last comma is matched.
  return arrNames;
};

module.exports = joinNames;
