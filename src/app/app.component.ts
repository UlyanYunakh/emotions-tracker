import { Component, HostListener } from '@angular/core';
var domtoimage = require('dom-to-image-more');
var FileSaver = require('file-saver');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  currentDescription = '';

  onDescriptionUpdate(str: string) {
    this.currentDescription = str;
  }

  getBlob() {
    return Promise.resolve()
      .then(() => {
        let id = this.currentDescription.length > 0 ? 'frame' : 'frame_partial';
        let node = document.getElementById(id);

        return domtoimage.toBlob(node);
      });
  }

  saveImage() {
    this.getBlob()
      .then(function (blob: any) {
        FileSaver.saveAs(blob, `Мои эмоции (${new Date().toISOString()}).png`);
      });
  }

  copyImage() {
    this.getBlob()
      .then(function (blob: any) {
        navigator.clipboard.write([
          new ClipboardItem({
            'image/png': blob
          })
        ]);
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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    debugger;
    let scaledContent = document.getElementById('emotions');
    let scaledWrapper  = document.getElementById('container');

    if (scaledContent && scaledWrapper) {
      scaledContent.style.transform = 'scale(1, 1)';

      let { width: cw, height: ch } = scaledContent.getBoundingClientRect();
      let { width: ww, height: wh } = scaledWrapper.getBoundingClientRect();
    
      let scaleAmtX = Math.min(ww / cw, wh / ch);
      let scaleAmtY = scaleAmtX;
    
      scaledContent.style.transform = `scale(${scaleAmtX}, ${scaleAmtY})`;
    }
  }
}
