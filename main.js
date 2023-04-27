let text1 = "This is an example text";
let text2 = "This is another example text";

function levenshteinDistance(text1, text2) {
  // Find the lengths of the two texts
  let n = text1.length;
  let m = text2.length;

  // Create a two-dimensional matrix
  let matrix = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    matrix[i] = new Array(m + 1);
  }

  // Fill the first column of the matrix
  for (let i = 0; i <= n; i++) {
    matrix[i][0] = i;
  }

  // Fill the first row of the matrix
  for (let j = 0; j <= m; j++) {
    matrix[0][j] = j;
  }

  // Fill the rest of the matrix
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      let cost = text1[i - 1] == text2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  // Return the result
}
