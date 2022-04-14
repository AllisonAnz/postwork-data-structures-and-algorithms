function count_vowels(s, k) {
  const vowels = new Set(Array.from("aeiouAEIOU"));

  let t = 0;
  //count first k
  for (let i = 0; i < k && i < s.length; i++) {
    t += vowels.has(s[i]) ? 1 : 0;
  }

  let mx = t;

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) {
      t += 1
    }
    if (vowels.has(s[i - k])) {
      t -= 1;
    }
    if (t > mx) {
      mx = t;
    }
  }

  return mx;
}

console.log(count_vowels("eirowpfmsnaquisaaaa", 5))