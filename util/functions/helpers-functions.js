export function sortFile(data) {
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
