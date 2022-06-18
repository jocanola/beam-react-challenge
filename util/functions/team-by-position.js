export const getPlayerByPosition = (starters, position) => {
  const teamByPosition = starters?.filter(
    (item) => item.Position.toLowerCase() === position.toLowerCase()
  );
  const teamLength = teamByPosition.length;
  return { teamByPosition, teamLength };
};
