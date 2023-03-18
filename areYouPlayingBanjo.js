function areYouPlayingBanjo(name) {
  // Implement me
  return name[0].toLowerCase() === "r" ? name + " plays banjo" : name + " does not play banjo";
}

function fusc(n) {
    if (n === 0 || n === 1) return n
    else if (!(n % 2)) return fusc(n / 2)
    else if (!!(n % 2)) return fusc((n - 1) / 2) + fusc((n - 1) / 2 + 1)
}