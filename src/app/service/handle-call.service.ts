import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleCallService {

  constructor() { }

  save(url, content) {
    if (url) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(content ? content : {})
        })
        .then(response => response.json())
        .then(responseJson => {
          resolve(responseJson);
        })
        .catch(err => {
          console.log('error', err);
          reject(err);
        })
      })
    }
  }

  getData(url) {
    if (url) {
      return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          resolve(responseJson);
        })
        .catch(err => {
          console.log('error', err);
          reject(err);
        })
      })
    }
  }
}
