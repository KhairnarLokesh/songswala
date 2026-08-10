/* ==========================================================================
   SONGSWALA - Retro Barber Shop Radio Player Application (Local MP3 Version)
   ========================================================================== */

// Curated List of 90s/2000s Bollywood Bangers
const PLAYLIST = [
  {
    id: 0,
    title: "Aa Re Pritam Pyaare",
    artist: "Mamta Sharma & Sajid-Wajid",
    audioUrl: "songs/Aa_Re_Pritam_Pyaare_-_Lyrical_Video___Rowdy_Rathore___Akshay_Kumar___Mamta_Sharma___Sajid_Wajid(48k).mp3",
    coverUrl: "songs/covers/Aa_Re_Pritam_Pyaare.jpg"
  },
  {
    id: 1,
    title: "Aaj Ki Raat",
    artist: "Madhubanti Bagchi & Sachin-Jigar",
    audioUrl: "songs/Aaj_Ki_Raat_-_Full_Song___Stree_2__Tamannaah_Bhatia,_Rajkummar_Rao,_Sachin-Jigar,_Madhubanti,Divya_K(48k).mp3",
    coverUrl: "songs/covers/Aaj_Ki_Raat.jpg"
  },
  {
    id: 2,
    title: "Baby Doll",
    artist: "Kanika Kapoor & Meet Bros",
    audioUrl: "songs/BABY_DOLL_[8K]_Full_Video_Song___Sunny_Leone___Ragini_MMS_2___Meet_Bros_Anjjan_Feat._Kanika_Kapoor(48k).mp3",
    coverUrl: "songs/covers/Baby_Doll.jpg"
  },
  {
    id: 3,
    title: "Bairan",
    artist: "Banjaare",
    audioUrl: "songs/Bairan_–_Animated_Love_Story___Banjaare__Official_Video_(48k).mp3",
    coverUrl: "songs/covers/Bairan.jpg"
  },
  {
    id: 4,
    title: "Bom Diggy Diggy",
    artist: "Zack Knight & Jasmin Walia",
    audioUrl: "songs/Bom_Diggy_Diggy___VIDEO____Zack_Knight___Jasmin_Walia___Sonu_Ke_Titu_Ki_Sweety(48k).mp3",
    coverUrl: "songs/covers/Bom_Diggy_Diggy.jpg"
  },
  {
    id: 5,
    title: "Chikni Chameli",
    artist: "Shreya Ghoshal & Ajay-Atul",
    audioUrl: "songs/Chikni_Chameli_-_8K_4k_Music_Video___Katrina_Kaif,_Hrithik___Agneepath___Shreya_Ghoshal___Ajay-Atul(48k).mp3",
    coverUrl: "songs/covers/Chikni_Chameli.jpg"
  },
  {
    id: 6,
    title: "Dilbar",
    artist: "Neha Kakkar & Dhvani Bhanushali",
    audioUrl: "songs/DILBAR_Lyrical___Satyameva_Jayate__John_Abraham,_Nora_Fatehi,Tanishk_B,_Neha_Kakkar,Dhvani,_Ikka(48k)(1).mp3",
    coverUrl: "songs/covers/Dilbar.jpg"
  },
  {
    id: 7,
    title: "Desi Kalakaar",
    artist: "Yo Yo Honey Singh",
    audioUrl: "songs/Desi_Kalakaar_Full_VIDEO_Song___Yo_Yo_Honey_Singh___Honey_Singh_New_Songs_2014(48k).mp3",
    coverUrl: "songs/covers/Desi_Kalakaar.jpg"
  },
  {
    id: 8,
    title: "O Saki Saki",
    artist: "Neha Kakkar, Tulsi Kumar & B Praak",
    audioUrl: "songs/Full_Song__O_SAKI_SAKI___Batla_House___Nora_Fatehi,_Tanishk_B,Neha_K,Tulsi_K,_B_Praak,Vishal-Shekhar(48k).mp3",
    coverUrl: "songs/covers/O_Saki_Saki.jpg"
  },
  {
    id: 9,
    title: "Khairiyat",
    artist: "Arijit Singh & Pritam",
    audioUrl: "songs/KHAIRIYAT_8K_-_BONUS_TRACK___Sushant_Singh_Rajput,Shraddha_Kapoor__Pritam__Arijit_Singh___Chhichhore(48k).mp3",
    coverUrl: "songs/covers/Khairiyat.jpg"
  },
  {
    id: 10,
    title: "Laila Main Laila",
    artist: "Pawni Pandey & Ram Sampath",
    audioUrl: "songs/Laila_Main_Laila_8K_Video___Raees___Shah_Rukh_Khan___Sunny_Leone___Pawni_Pandey___Ram_Sampath(48k).mp3",
    coverUrl: "songs/covers/Laila_Main_Laila.jpg"
  },
  {
    id: 11,
    title: "Main Tera Boyfriend",
    artist: "Arijit Singh & Neha Kakkar",
    audioUrl: "songs/Main_Tera_Boyfriend_Full_Video___Raabta___Arijit_Singh___Neha_Kakkar___Sushant_Singh_Kriti_Sanon(48k).mp3",
    coverUrl: "songs/covers/Main_Tera_Boyfriend.jpg"
  },
  {
    id: 12,
    title: "Saree Ke Fall Sa",
    artist: "Antara Mitra & Nakash Aziz",
    audioUrl: "songs/Saree_Ke_Fall_Sa__Full__Video__-_R...Rajkumar_Pritam_Shahid___Sonakshi_Antara___Nakash(48k).mp3",
    coverUrl: "songs/covers/Saree_Ke_Fall_Sa.jpg"
  },
  {
    id: 13,
    title: "Tere Liye",
    artist: "Atif Aslam & Shreya Ghoshal",
    audioUrl: "songs/Tere_Liye_-_Lyrical___Jhankar_____Atif_Aslam___Shreya_Ghoshal___Vivek_Oberoi___Prince(48k).mp3",
    coverUrl: "songs/covers/Tere_Liye.jpg"
  },
  {
    id: 14,
    title: "Tu Cheez Badi Hai Mast Mast",
    artist: "Udit Narayan & Neha Kakkar",
    audioUrl: "songs/Tu_Cheez_badi_hai_mast_mast_full_song___Machine_Mustafa___Kiara_Advani___Udit_Narayan___Neha_Kakkar(48k).mp3",
    coverUrl: "songs/covers/Tu_Cheez_Badi_Hai_Mast_Mast.jpg"
  },
  {
    id: 15,
    title: "Tujh Mein Rab Dikhta Hai",
    artist: "Roop Kumar Rathod",
    audioUrl: "songs/Tujh_Mein_Rab_Dikhta_Hai_Song___Rab_Ne_Bana_Di_Jodi___Shah_Rukh_Khan,_Anushka_Sharma___Roop_Kumar(48k).mp3",
    coverUrl: "songs/covers/Tujh_Mein_Rab_Dikhta_Hai.jpg"
  }
];

// Audio Elements
const musicAudio = document.getElementById('music-audio');
const ambientAudio = document.getElementById('ambient-audio');

// Local audio path for Ambient Barber Shop Sound
const AMBIENT_AUDIO_URL = "songs/barber_ambient.mp3";

// Application State Variables
let currentTrackIndex = 0;
let isPlaying = false;
let isAmbientActive = false;
let isMuted = false;
let isUserSeeking = false;

// DOM Elements Cache
const el = {
  bgImage: document.querySelector('.bg-image'),
  liveClock: document.getElementById('live-clock'),
  
  vinylDisc: document.getElementById('vinyl-disc'),
  vinylArtwork: document.getElementById('vinyl-artwork'),
  vinylWrapper: document.querySelector('.vinyl-wrapper'),
  
  trackTitle: document.getElementById('track-title'),
  trackArtist: document.getElementById('track-artist'),
  playlistCount: document.getElementById('playlist-count'),
  
  progressSlider: document.getElementById('progress-slider'),
  progressBarFill: document.getElementById('progress-bar-fill'),
  timeCurrent: document.getElementById('time-current'),
  timeTotal: document.getElementById('time-total'),
  sliderWrapper: document.querySelector('.time-slider-wrapper'),
  
  prevBtn: document.getElementById('prev-btn'),
  playBtn: document.getElementById('play-btn'),
  nextBtn: document.getElementById('next-btn'),
  iconPlay: document.getElementById('icon-play'),
  iconPause: document.getElementById('icon-pause'),
  
  volumeMuteBtn: document.getElementById('volume-mute-btn'),
  volIconHigh: document.getElementById('vol-icon-high'),
  volIconMuted: document.getElementById('vol-icon-muted'),
  musicVolume: document.getElementById('music-volume'),
  
  ambientToggleBtn: document.getElementById('ambient-toggle-btn'),
  ambientVolume: document.getElementById('ambient-volume'),
  
  playlistToggleBtn: document.getElementById('playlist-toggle-btn'),
  playlistCloseBtn: document.getElementById('playlist-close-btn'),
  playlistDrawer: document.getElementById('playlist-drawer'),
  playlistItems: document.getElementById('playlist-items')
};

/* ==========================================================================
   Track Loader & Audio API Event Bindings
   ========================================================================== */
function initPlayer() {
  // 1. Initial State Config
  musicAudio.volume = el.musicVolume.value / 100;
  ambientAudio.volume = el.ambientVolume.value / 100;
  ambientAudio.src = AMBIENT_AUDIO_URL;
  
  // 2. Load the first track details (without playing yet)
  loadTrackDetails(currentTrackIndex);
  renderPlaylistDrawer();
  
  // Enable Play Button controls
  el.playBtn.removeAttribute('disabled');
}

function loadTrackDetails(index) {
  const track = PLAYLIST[index];
  
  // Set source path
  musicAudio.src = track.audioUrl;
  
  // Update texts
  el.trackTitle.textContent = track.title;
  el.trackArtist.textContent = track.artist;
  
  // Load Cover Art Thumbnail with standard fallbacks
  const img = new Image();
  img.src = track.coverUrl;
  
  // Handle fallback if user hasn't uploaded local cover art yet
  img.onload = () => {
    el.vinylArtwork.src = track.coverUrl;
  };
  img.onerror = () => {
    el.vinylArtwork.src = "assets/bg.jpg";
  };
  
  // Reset timeline slider positions
  el.progressSlider.value = 0;
  el.progressBarFill.style.width = "0%";
  el.sliderWrapper.style.setProperty('--slider-percent', "0%");
  el.timeCurrent.textContent = "0:00";
  el.timeTotal.textContent = "0:00";
  
  // Update playlist active item highlighting
  updateActivePlaylistItem(index);
}

function playTrack(index) {
  currentTrackIndex = index;
  loadTrackDetails(index);
  
  // Play immediately
  const playPromise = musicAudio.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.warn("Audio auto-playback prevented or file not found:", error);
      // Wait for user interaction or show alert
      if (isPlaying) togglePlayUI(false);
    });
  }
}

function togglePlay() {
  if (musicAudio.paused) {
    const playPromise = musicAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error("Failed to play audio. Make sure the file exists in the songs/ folder.", error);
        el.trackArtist.textContent = "Check songs/ folder for MP3!";
      });
    }
  } else {
    musicAudio.pause();
  }
}

function nextTrack() {
  let nextIndex = currentTrackIndex + 1;
  if (nextIndex >= PLAYLIST.length) {
    nextIndex = 0;
  }
  playTrack(nextIndex);
}

function prevTrack() {
  let nextIndex = currentTrackIndex - 1;
  if (nextIndex < 0) {
    nextIndex = PLAYLIST.length - 1;
  }
  playTrack(nextIndex);
}

function togglePlayUI(playing) {
  isPlaying = playing;
  if (playing) {
    el.iconPlay.classList.add('hidden');
    el.iconPause.classList.remove('hidden');
    el.vinylDisc.classList.add('spin');
    el.vinylWrapper.classList.add('active-arm');
  } else {
    el.iconPlay.classList.remove('hidden');
    el.iconPause.classList.add('hidden');
    el.vinylDisc.classList.remove('spin');
    el.vinylWrapper.classList.remove('active-arm');
  }
}

/* ==========================================================================
   Timeline / Seeking Sync handlers
   ========================================================================== */
function handleAudioTimeUpdate() {
  if (isUserSeeking) return;
  
  const currentTime = musicAudio.currentTime || 0;
  const duration = musicAudio.duration || 0;
  
  if (duration > 0) {
    const percentage = (currentTime / duration) * 100;
    
    // Sync slider track fills
    el.progressSlider.value = percentage;
    el.progressBarFill.style.width = `${percentage}%`;
    el.sliderWrapper.style.setProperty('--slider-percent', `${percentage}%`);
    
    // Labels formatting
    el.timeCurrent.textContent = formatTime(currentTime);
    el.timeTotal.textContent = formatTime(duration);
  }
}

function handleAudioLoadedMetadata() {
  const duration = musicAudio.duration || 0;
  el.timeTotal.textContent = formatTime(duration);
}

// Convert seconds to MM:SS format
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Seek interactive gestures
function handleSeekStart() {
  isUserSeeking = true;
}

function handleSeekDrag() {
  const percentage = el.progressSlider.value;
  el.progressBarFill.style.width = `${percentage}%`;
  el.sliderWrapper.style.setProperty('--slider-percent', `${percentage}%`);
  
  const duration = musicAudio.duration || 0;
  const current = (percentage / 100) * duration;
  el.timeCurrent.textContent = formatTime(current);
}

function handleSeekEnd() {
  const percentage = el.progressSlider.value;
  const duration = musicAudio.duration || 0;
  
  if (duration > 0) {
    musicAudio.currentTime = (percentage / 100) * duration;
  }
  isUserSeeking = false;
}

/* ==========================================================================
   Ambient Mix (Barber shop atmosphere audio)
   ========================================================================== */
function toggleAmbientSound() {
  isAmbientActive = !isAmbientActive;
  
  if (isAmbientActive) {
    el.ambientToggleBtn.classList.add('active');
    const playPromise = ambientAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn("Ambient audio file barber_ambient.mp3 is missing from songs/ folder.", error);
        el.ambientToggleBtn.classList.remove('active');
        isAmbientActive = false;
        alert("To enable Barber Shop Vibe, please copy your ambient loops to songs/barber_ambient.mp3");
      });
    }
  } else {
    el.ambientToggleBtn.classList.remove('active');
    ambientAudio.pause();
  }
}

function handleAmbientVolumeChange() {
  const vol = el.ambientVolume.value / 100;
  ambientAudio.volume = vol;
}

/* ==========================================================================
   Music Volume & Muting
   ========================================================================== */
function handleMusicVolumeChange() {
  const vol = el.musicVolume.value / 100;
  musicAudio.volume = vol;
  
  if (isMuted && vol > 0) {
    toggleMute(false);
  }
}

function toggleMute(forceState = null) {
  isMuted = forceState !== null ? forceState : !isMuted;
  
  if (isMuted) {
    el.volIconHigh.classList.add('hidden');
    el.volIconMuted.classList.remove('hidden');
    musicAudio.muted = true;
  } else {
    el.volIconHigh.classList.remove('hidden');
    el.volIconMuted.classList.add('hidden');
    musicAudio.muted = false;
    musicAudio.volume = el.musicVolume.value / 100;
  }
}

/* ==========================================================================
   Playlist Drawer Management
   ========================================================================== */
function renderPlaylistDrawer() {
  el.playlistItems.innerHTML = '';
  
  PLAYLIST.forEach((track, index) => {
    const li = document.createElement('li');
    li.className = `track-item ${index === currentTrackIndex ? 'active' : ''}`;
    li.dataset.index = index;
    
    li.innerHTML = `
      <div class="track-item-artwork">
        <img class="drawer-thumb" src="${track.coverUrl}" alt="${track.title} Cover">
      </div>
      <div class="track-item-meta">
        <div class="track-item-title">${track.title}</div>
        <div class="track-item-artist">${track.artist}</div>
      </div>
      ${index === currentTrackIndex ? `
        <div class="equalizer-icon">
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
          <span class="eq-bar"></span>
        </div>
      ` : ''}
    `;
    
    // Drawer thumb fallback if cover image is missing
    const img = li.querySelector('.drawer-thumb');
    img.onerror = () => {
      img.src = "assets/bg.png";
    };
    
    li.addEventListener('click', () => {
      playTrack(index);
      if (window.innerWidth <= 640) {
        closePlaylist();
      }
    });
    
    el.playlistItems.appendChild(li);
  });
  
  el.playlistCount.textContent = PLAYLIST.length;
}

function updateActivePlaylistItem(activeIndex) {
  const items = el.playlistItems.querySelectorAll('.track-item');
  items.forEach((item, idx) => {
    if (idx === activeIndex) {
      item.classList.add('active');
      if (!item.querySelector('.equalizer-icon')) {
        const eq = document.createElement('div');
        eq.className = 'equalizer-icon';
        eq.innerHTML = '<span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span>';
        item.appendChild(eq);
      }
    } else {
      item.classList.remove('active');
      const eq = item.querySelector('.equalizer-icon');
      if (eq) eq.remove();
    }
  });
}

function openPlaylist() {
  el.playlistDrawer.classList.add('open');
}

function closePlaylist() {
  el.playlistDrawer.classList.remove('open');
}

/* ==========================================================================
   Ambient HUD Features (Clock & simulated Counter)
   ========================================================================== */
function initHUD() {
  // 1. Digital Clock
  function updateClock() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    el.liveClock.textContent = `${hrs}:${mins}:${secs}`;
  }
  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   Event Bindings & Audio Hook listeners
   ========================================================================== */
function bindEvents() {
  // Native Audio API Listeners
  musicAudio.addEventListener('timeupdate', handleAudioTimeUpdate);
  musicAudio.addEventListener('loadedmetadata', handleAudioLoadedMetadata);
  musicAudio.addEventListener('play', () => togglePlayUI(true));
  musicAudio.addEventListener('pause', () => togglePlayUI(false));
  musicAudio.addEventListener('ended', nextTrack);
  
  musicAudio.addEventListener('error', (e) => {
    console.warn("Audio file failed to load. Make sure the file exists in songs/ directory.", e);
    el.trackArtist.textContent = "Audio not found (Check songs/ folder)";
  });

  // Playback Controls
  el.playBtn.addEventListener('click', togglePlay);
  el.nextBtn.addEventListener('click', nextTrack);
  el.prevBtn.addEventListener('click', prevTrack);
  
  // Seek Timeline Interactions
  el.progressSlider.addEventListener('mousedown', handleSeekStart);
  el.progressSlider.addEventListener('touchstart', handleSeekStart, { passive: true });
  
  el.progressSlider.addEventListener('input', handleSeekDrag);
  
  el.progressSlider.addEventListener('mouseup', handleSeekEnd);
  el.progressSlider.addEventListener('touchend', handleSeekEnd, { passive: true });
  
  // Volume Controls
  el.musicVolume.addEventListener('input', handleMusicVolumeChange);
  el.volumeMuteBtn.addEventListener('click', () => toggleMute());
  
  // Ambient Sound controls
  el.ambientToggleBtn.addEventListener('click', toggleAmbientSound);
  el.ambientVolume.addEventListener('input', handleAmbientVolumeChange);
  
  // Playlist Drawer Toggles
  el.playlistToggleBtn.addEventListener('click', openPlaylist);
  el.playlistCloseBtn.addEventListener('click', closePlaylist);
  
  // Close playlist drawer when clicking outside it
  document.addEventListener('click', (e) => {
    if (
      el.playlistDrawer.classList.contains('open') &&
      !el.playlistDrawer.contains(e.target) &&
      !el.playlistToggleBtn.contains(e.target)
    ) {
      closePlaylist();
    }
  });
}

// Self-Initializing on DOM Content Load
document.addEventListener('DOMContentLoaded', () => {
  initPlayer();
  initHUD();
  bindEvents();
});
