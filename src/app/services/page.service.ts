import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  // * Set Document Title to a Specific Value by "title" argument 
  set = (title: string): void => {
    document.title = title;
  }

  // * Reset Document Title To "YPS"
  reset = (): void => {
    document.title = "YPS";
  }

  // * Add a Specific Value to the Current Document Title Value
  append = (title: string) => {
    const currentDocumentTitle = document.title;
    document.title = currentDocumentTitle + title;
  }
}
