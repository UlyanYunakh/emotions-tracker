import { AfterViewInit, Component, OnInit } from '@angular/core';
import { error } from 'console';
import { timer } from 'rxjs';
var domtoimage = require('dom-to-image-more');
var FileSaver = require('file-saver');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit, OnInit {
  currentDescription = '';

  currentDate: Date = new Date();

  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
      this.currentDate = new Date();
    })
  }

  ngAfterViewInit(): void {
    this.onResize(new Event(''));
  }

  onDescriptionUpdate(str: string) {
    this.currentDescription = str;
  }

  getBlob() {
    return Promise.resolve()
      .then(() => {
        let id = this.currentDescription.length > 0 ? 'frame' : 'frame_partial';
        let node = document.getElementById(id);

        return domtoimage.toBlob(node);
      })
      .catch(error => {
        alert('Произошла ошибка, попробуйте воспользоваться приложением в другом браузере.');
      });
  }

  saveImage() {
    this.getBlob()
      .then(function (blob: any) {
        FileSaver.saveAs(blob, `Мои эмоции (${new Date().toISOString()}).png`);
      });
  }

  shareImage() {
    this.getBlob()
      .then(function (blob: any) {
        navigator.share({
          title: "Эмоции",
          text: "Моя таблица эмоций",
          files: [
            new File([blob], `Мои эмоции (${new Date().toISOString()}).png`, {
              type: blob.type,
            }),
          ],
        });
      });
  }

  getDate() {
    return Date.now();
  }

  onResize(event: Event) {
    var width = document.getElementById('frame')?.offsetWidth || -1;
    var outerWidth = document.getElementById('emotions')?.offsetWidth || -1;

    var scale = outerWidth < width ? outerWidth / width : 1;

    let frame = document.getElementById('emotions');
    if (frame) {
      frame.style.transform = `scale(${scale})`;
      frame.style.transformOrigin = 'top';

      let height = frame.offsetHeight * scale;
      frame.style.height = `${height}px`;
    }
  }
}
