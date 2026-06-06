const songs = [
  { title: "Death By A Thousand Cuts", album: "Lover", tags: ["heartbreak", "queercoded"] },
  { title: "Cruel Summer", album: "Lover", tags: ["heartbreak", "queercoded", "nostalgia"] },
  { title: "You Need To Calm Down", album: "Lover", tags: ["queercoded", "fame"] },
  { title: "Cornelia Street", album: "Lover", tags: ["heartbreak", "nostalgia"] },
  { title: "London Boy", album: "Lover", tags: ["nostalgia", "cars"] },
  { title: "Paper Rings", album: "Lover", tags: ["heartbreak"] },
  { title: "The Archer", album: "Lover", tags: ["fame", "nostalgia"] },
  { title: "Soon You'll Get Better", album: "Lover", tags: ["nostalgia", "heartbreak"] },
  { title: "Daylight", album: "Lover", tags: ["nostalgia", "queercoded"] },
  { title: "Fearless", album: "Fearless", tags: ["nostalgia", "cars"] },
  { title: "You Belong With Me", album: "Fearless", tags: ["heartbreak", "nostalgia"] },
  { title: "Love Story", album: "Fearless", tags: ["nostalgia"] },
  { title: "White Horse", album: "Fearless", tags: ["heartbreak"] },
  { title: "The Best Day", album: "Fearless", tags: ["nostalgia", "nature"] },
  { title: "Fifteen", album: "Fearless", tags: ["nostalgia"] },
  { title: "Last Kiss", album: "Speak Now", tags: ["heartbreak"] },
  { title: "Dear John", album: "Speak Now", tags: ["heartbreak"] },
  { title: "Enchanted", album: "Speak Now", tags: ["heartbreak", "queercoded"] },
  { title: "Back To December", album: "Speak Now", tags: ["heartbreak", "nostalgia", "nature"] },
  { title: "Long Live", album: "Speak Now", tags: ["nostalgia", "fame"] },
  { title: "Mean", album: "Speak Now", tags: ["fame", "revenge"] },
  { title: "We Are Never Getting Back Together", album: "Red", tags: ["heartbreak", "revenge"] },
  { title: "All Too Well",
  album: "Red",
  tags: ["heartbreak", "nostalgia", "cars"],
  lyrics: { heartbreak: "And I forget about you long enough to forget why I needed to", nostalgia: "I remember it all too well" },
},
  { title: "State Of Grace", album: "Red", tags: ["heartbreak", "nature"] },
  { title: "22", album: "Red", tags: ["nostalgia"] },
  { title: "Red", album: "Red", tags: ["heartbreak", "nature", "cars"] },
  { title: "Begin Again", album: "Red", tags: ["heartbreak", "nostalgia"] },
  { title: "The Last Time", album: "Red", tags: ["heartbreak"] },
  { title: "Holy Ground", album: "Red", tags: ["nostalgia", "heartbreak"] },
  { title: "Blank Space", album: "1989", tags: ["revenge", "fame"] },
  { title: "Style", album: "1989", tags: ["heartbreak", "cars"] },
  { title: "Out Of The Woods", album: "1989", tags: ["heartbreak", "nature", "cars"] },
  { title: "Wildest Dreams", album: "1989", tags: ["heartbreak", "nostalgia", "nature"] },
  { title: "How You Get The Girl", album: "1989", tags: ["nostalgia"] },
  { title: "Clean", album: "1989", tags: ["heartbreak", "nature"] },
  { title: "Bad Blood", album: "1989", tags: ["revenge"] },
  { title: "This Love", album: "1989", tags: ["heartbreak", "nature"] },
  { title: "New Romantics", album: "1989", tags: ["heartbreak", "fame"] },
  { title: "I Know Places", album: "1989", tags: ["queercoded", "nature"] },
  { title: "Look What You Made Me Do", album: "Reputation", tags: ["revenge", "fame"] },
  { title: "Delicate", album: "Reputation", tags: ["heartbreak", "fame"] },
  { title: "Getaway Car", album: "Reputation", tags: ["heartbreak", "cars"] },
  { title: "King Of My Heart", album: "Reputation", tags: ["heartbreak"] },
  { title: "Dancing With Our Hands Tied", album: "Reputation", tags: ["heartbreak", "fame"] },
  { title: "Dress", album: "Reputation", tags: ["heartbreak", "queercoded"] },
  { title: "Call It What You Want", album: "Reputation", tags: ["heartbreak", "nostalgia"] },
  { title: "New Year's Day", album: "Reputation", tags: ["nostalgia", "heartbreak"] },
  { title: "This Is Me Trying", album: "Folklore", tags: ["heartbreak", "nostalgia"] },
  { title: "Illicit Affairs", album: "Folklore", tags: ["heartbreak"] },
  { title: "The 1", album: "Folklore", tags: ["heartbreak", "nostalgia", "cars"] },
  { title: "August", album: "Folklore", tags: ["heartbreak", "nostalgia", "nature", "queercoded"] },
  { title: "Seven", album: "Folklore", tags: ["nostalgia", "nature"] },
  { title: "Betty", album: "Folklore", tags: ["nostalgia", "queercoded"] },
  { title: "Peace", album: "Folklore", tags: ["heartbreak"] },
  { title: "Epiphany", album: "Folklore", tags: ["nature", "nostalgia"] },
  { title: "My Tears Ricochet", album: "Folklore", tags: ["revenge", "heartbreak"] },
  { title: "Exile", album: "Folklore", tags: ["heartbreak"] },
  { title: "Mad Woman", album: "Folklore", tags: ["revenge", "nature"] },
  { title: "Mirrorball", album: "Folklore", tags: ["fame", "heartbreak"] },
  { title: "Ivy", album: "Evermore", tags: ["queercoded", "nature", "heartbreak"] },
  { title: "Willow", album: "Evermore", tags: ["nature", "heartbreak", "nostalgia"] },
  { title: "Champagne Problems", album: "Evermore", tags: ["heartbreak"] },
  { title: "Gold Rush", album: "Evermore", tags: ["heartbreak", "queercoded"] },
  { title: "Tolerate It", album: "Evermore", tags: ["heartbreak"] },
  { title: "Happiness", album: "Evermore", tags: ["heartbreak", "nostalgia"] },
  { title: "Cowboy Like Me", album: "Evermore", tags: ["nostalgia", "nature"] },
  { title: "Long Story Short", album: "Evermore", tags: ["heartbreak", "nostalgia"] },
  { title: "Marjorie", album: "Evermore", tags: ["nostalgia"] },
  { title: "Closure", album: "Evermore", tags: ["heartbreak", "revenge"] },
  { title: "Evermore", album: "Evermore", tags: ["heartbreak", "nature"] },
  { title: "No Body No Crime", album: "Evermore", tags: ["revenge"] },
  { title: "Midnight Rain", album: "Midnights", tags: ["nostalgia", "fame"] },
  { title: "Anti-Hero", album: "Midnights", tags: ["fame", "heartbreak"] },
  { title: "Snow On The Beach", album: "Midnights", tags: ["heartbreak", "nature", "queercoded"] },
  { title: "Lavender Haze", album: "Midnights", tags: ["heartbreak", "fame", "queercoded"] },
  { title: "Maroon", album: "Midnights", tags: ["heartbreak", "nostalgia"] },
  { title: "Bejeweled", album: "Midnights", tags: ["revenge", "fame"] },
  { title: "Karma", album: "Midnights", tags: ["revenge", "fame"] },
  { title: "The Great War", album: "Midnights", tags: ["heartbreak", "revenge"] },
  { title: "Bigger Than The Whole Sky", album: "Midnights", tags: ["heartbreak", "nature"] },
  { title: "Hits Different", album: "Midnights", tags: ["heartbreak", "nostalgia"] },
  { title: "Question...?", album: "Midnights", tags: ["heartbreak", "nostalgia"] },
  { title: "Sweet Nothing", album: "Midnights", tags: ["heartbreak", "nature"] },
  { title: "Paris", album: "Midnights", tags: ["nostalgia", "queercoded"] },
  { title: "Mastermind", album: "Midnights", tags: ["revenge", "fame"] },
  { title: "Down Bad", album: "TTPD", tags: ["heartbreak", "queercoded"] },
  { title: "So Long, London", album: "TTPD", tags: ["heartbreak", "nostalgia","wedding"] },
  { title: "But Daddy I Love Him", album: "TTPD", tags: ["heartbreak", "fame", "revenge"] },
  { title: "Florida!!!", album: "TTPD", tags: ["heartbreak", "nostalgia", "cars"] },
  { title: "Who's Afraid Of Little Old Me?", album: "TTPD", tags: ["revenge", "fame"] },
  { title: "The Smallest Man Who Ever Lived", album: "TTPD", tags: ["heartbreak", "revenge"] },
  { title: "The Alchemy", album: "TTPD", tags: ["heartbreak"] },
  { title: "Clara Bow", album: "TTPD", tags: ["fame", "nostalgia"] },
  { title: "Peter", album: "TTPD", tags: ["heartbreak", "nostalgia"] },
  { title: "The Bolter", album: "TTPD", tags: ["nostalgia", "cars"] },
  { title: "I Can Do It With A Broken Heart", album: "TTPD", tags: ["fame", "heartbreak"] },
  { title: "Guilty As Sin?", album: "TTPD", tags: ["heartbreak", "queercoded"] },
  { title: "Fresh Out The Slammer", album: "TTPD", tags: ["heartbreak", "cars"] },
  { title: "loml", album: "TTPD", tags: ["heartbreak"] },
];

const tagLabels = {
  cars: "Cars",
  queercoded: "Queer coded",
  heartbreak: "Heartbreak",
  revenge: "Revenge / reclaim",
  nostalgia: "Nostalgia",
  fame: "Fame / media",
  nature: "Nature imagery"
};

let activeTag = "all";
let searchQuery = "";

function render() {
  const grid = document.getElementById("grid");
  const countEl = document.getElementById("count");
  let filtered = songs;
  if (activeTag !== "all") filtered = filtered.filter(s => s.tags.includes(activeTag));
  if (searchQuery) filtered = filtered.filter(s => s.title.toLowerCase().includes(searchQuery) || s.album.toLowerCase().includes(searchQuery));
  countEl.textContent = filtered.length + " song" + (filtered.length !== 1 ? "s" : "");
  if (!filtered.length) { grid.innerHTML = '<div class="empty">No songs found</div>'; return; }
  grid.innerHTML = filtered.map(s => `
    <div class="song-card">
      <div class="song-title">${s.title}</div>
      <div class="song-album">${s.album}</div>
      <div class="tags">${s.tags.map(t => `<span class="tag tag-${t}">${tagLabels[t]}</span>`).join("")}</div>
      ${activeTag !== "all" && s.lyrics && s.lyrics[activeTag] ? `<div class="lyric">"${s.lyrics[activeTag]}"</div>` : ""}
    </div>
  `).join("");
}

document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeTag = btn.dataset.tag;
  render();
});

document.getElementById("search").addEventListener("input", e => {
  searchQuery = e.target.value.toLowerCase();
  render();
});
render();