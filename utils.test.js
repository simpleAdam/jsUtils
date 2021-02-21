// "My files" => "my-files"
function normalizeName(name) {
    return name.replace(/\s+/gu, '-').toLowerCase();
}
// (3,1,5,10,50) => 30
function normalizeInterpolate(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}
// new Date => "February 12"
// result appears to vary
function formatDate(date) {
    return date.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });
}

it('behaves as expected', () => {
  expect(normalizeName('My Files')).toBe('my-files')
})

it('returns a number',() => {
  expect(typeof normalizeInterpolate(5,4,6,0,1)).toBe("number")
})

it('interpolates correctly',() => {
  expect(normalizeInterpolate(5,4,6,0,1)).toBe(0.5)
  expect(normalizeInterpolate(5,4,6,1,3)).toBe(2)
  expect(normalizeInterpolate(5,4,6,-4,-6)).toBe(-5)
})

it('formats a date',() => {
	expect(formatDate(new Date(Date.UTC(2021, 1, 12, 3, 0, 0)))).toMatch(/February/)
})
it('date retuns a string',() => {
	expect(typeof formatDate(new Date())).toBe("string")
})