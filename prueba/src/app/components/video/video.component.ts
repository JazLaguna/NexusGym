import { Component } from '@angular/core';
import { SafePipe } from '../../shared/url.pipe';

@Component({
  selector: 'app-video',
  imports: [SafePipe, VideoComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
    videoUrl = 'https://archive.org/download/survivor-eye-of-the-tiger-1080p/SURVIVOR%20%28Eye%20Of%20The%20Tiger%29%20%28720p%29.mp4';
}
