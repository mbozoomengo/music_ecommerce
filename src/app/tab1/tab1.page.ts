import { Component, OnInit } from '@angular/core';
import { Song } from '../model/song.model';
import { SongService } from '../service/song.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  songs: Song[] = []; // Propriété pour la liste des chansons


  constructor(private songService: SongService,  private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    this.loadSongs();
  }
  viewDetails(songId: string): void {
    
    this.router.navigate(['tabs/tab1/song-details', songId]);
  }

  loadSongs() {
    this.songService.getSongs().subscribe(
      (songs: Song[]) => {
        this.songs = songs;
      },
      error => {
        console.error('Error loading songs:', error);
      }
    );
    console.log('Songs:', this.songs);

  }

  // Méthode pour gérer le clic sur le bouton Play
  playSong(song: Song): void {
    // Implémentez la logique pour jouer l'extrait de la chanson
    console.log('Play song:', song.title);
  }

}
