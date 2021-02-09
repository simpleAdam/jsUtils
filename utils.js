// "my files" => "my-files"
function normalizeName(name) {
    return name.replace(/\s+/g, '-').toLowerCase();
}
// (3,1,5,10,50) => 30
function normaliseInterpolate(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}
