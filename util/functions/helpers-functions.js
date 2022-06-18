export function isEmptyCellFile(data) {
  let getNulls = [];
  data.forEach(function (v, i) {
    if (
      Object.keys(v).some(function (k) {
        return v[k] == null;
      })
    ) {
      getNulls.push(1);
    } else {
      getNulls.push(0);
    }
  });

  return getNulls;
}

export function fileSummary(data) {
  const getPlayersByPosition = (searchValue) =>
    data.filter((item) => item.Position === searchValue).length;
  let teams = {
    totalPlayers: data.length,
    // starters: getPlayersByPosition("Yes"),
    goalKeepers: getPlayersByPosition("Goalkeeper"),
    defenders: getPlayersByPosition("Defender"),
    midFielders: getPlayersByPosition("Midfielder"),
    forwards: getPlayersByPosition("Forward"),
  };

  return teams;
}

export function isEdited(oldData, newData) {
  const oldDataValue = Object.values(oldData);
  const newDataValue = Object.values(newData);

  let n = oldDataValue.length;
  let m = newDataValue.length;
  if (n != m) return false;
  oldDataValue.sort();
  newDataValue.sort();
  console.log("oldDataValue", oldDataValue);
  console.log("newDataValue", newDataValue);

  for (let i = 0; i < n; i++)
    if (oldDataValue[i] != newDataValue[i]) return false;
  return true;
}
