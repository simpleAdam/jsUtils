// "my files" => "my-files"
function normalizeName(name) {
    return name.replace(/\s+/g, '-').toLowerCase();
}
