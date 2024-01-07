// song.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../model/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSongById(songId: any): Song {
    throw new Error('Method not implemented.');
  }

  private songsUrl = 'assets/songs.json'; // Spécifiez le chemin vers votre fichier JSON

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl);
  }
  getSongDetails(songId: string): Observable<Song> {

   return this.http.get<Song>(`/api/songs/${songId}`);
  }
}
