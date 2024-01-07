import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/song.model';
import { SongService } from '../../service/song.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.page.html',
  styleUrls: ['./song-details.page.scss'],
})
export class SongDetailsPage implements OnInit {
  song: Song = {
    collaborators: undefined,
    title: '',
    artistName: '',
    releaseDate: '',
    lyrics: '',
    songUrl: '',
    imagePath: '',
    price: 0,
    isPurchased: false
  };

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params && params['songId']) {
        this.song = this.songService.getSongById(params['songId']);
      }
    });
  }

  playSong(): void {
    // Implémentez la logique pour jouer l'extrait de la chanson
    console.log('Play song:', this.song.title);
    // Exemple: Lancez la lecture audio ou vidéo ici
  }

  buySong(): void {
    // Implémentez la logique pour acheter la chanson
    console.log('Acheter la chanson:', this.song.title);
    // Exemple: Ajoutez la logique d'achat ici
    this.song.isPurchased = true; // Mise à jour de l'état d'achat
  }

  viewDetails(song: Song): void {
    this.navCtrl.navigateForward(`tabs/tab1/song-details/${song.id}`);
  }
}
