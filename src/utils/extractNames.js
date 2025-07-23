export const extractMovieNames = (arr) => {
  return arr.filter((line) => {
    const clean = line.trim();
    // Remove if it looks like a sentence or too long
    if (clean.length > 40) return false;
    // Remove if it contains non-title words
    if (/sure|enjoy|like|films|represent|know more|movies/i.test(clean))
      return false;

    return true;
  });
};
