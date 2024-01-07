import { Component, OnInit } from '@angular/core';
import { Song } from '../model/song.model';
import { SongService } from '../service/song.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  songs: Song[] = [];
  filteredSongs: Song[] = [];
viewDetails: any;

  constructor(private songService: SongService) {}

  ngOnInit() {
    // Chargez les chansons au moment de l'initialisation du composant
    this.loadSongs();
  }

  searchSongs(query: string | null | undefined) {
    if (query !== null && query !== undefined) {
      this.filteredSongs = this.songs.filter(song =>
        song.title.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredSongs = this.songs;
    }
  }

  loadSongs() {
    this.songService.getSongs().subscribe(
      (songs: Song[]) => {
        this.songs = songs;
        // Une fois les chansons chargées, affectez-les à filteredSongs
        this.filteredSongs = this.songs;
      },
      error => {
        console.error('Error loading songs:', error);
      }
    );
  }
}
