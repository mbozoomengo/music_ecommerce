import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Song } from '../model/song.model';
import { SongService } from '../service/song.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  songs: Song[] = []; // Propriété pour la liste des chansons

  constructor(private songService: SongService,  private navCtrl: NavController) {}

  ngOnInit() {
    this.loadSongs();
  }
  viewDetails(song: Song): void {
    this.navCtrl.navigateForward(`/song-details/${song.id}`);
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
